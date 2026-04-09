export const handler = async (event) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: corsHeaders, body: '' };
  }

  try {
    const META_PIXEL_ID = process.env.META_PIXEL_ID;
    const META_ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;

    if (!META_PIXEL_ID || !META_ACCESS_TOKEN) {
      console.log('[meta-proxy] missing credentials — META_PIXEL_ID or META_ACCESS_TOKEN not set');
      return {
        statusCode: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        body: JSON.stringify({ ok: false, reason: 'missing credentials' }),
      };
    }

    const body = event.body ? JSON.parse(event.body) : {};
    const { eventName, eventId, url, fbp, fbc } = body;

    console.log('[meta-proxy] invoked', { eventName, eventId });

    if (!eventName) {
      console.log('[meta-proxy] missing eventName — aborting');
      return {
        statusCode: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        body: JSON.stringify({ ok: false, reason: 'missing eventName' }),
      };
    }

    const clientIp =
      (event.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
      event.headers['client-ip'] ||
      '';
    const userAgent = event.headers['user-agent'] || '';

    console.log('[meta-proxy] user context', { clientIp: clientIp || '(none)', userAgent: userAgent ? userAgent.substring(0, 60) : '(none)' });

    const userData = {
      client_ip_address: clientIp,
      client_user_agent: userAgent,
    };
    if (fbp) userData.fbp = fbp;
    if (fbc) userData.fbc = fbc;

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          event_source_url: url,
          action_source: 'website',
          user_data: userData,
        },
      ],
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const metaUrl = `https://graph.facebook.com/v19.0/${META_PIXEL_ID}/events?access_token=${META_ACCESS_TOKEN}`;

    const metaResponse = await fetch(metaUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const metaStatus = metaResponse.status;
    console.log('[meta-proxy] result', metaStatus);

    return {
      statusCode: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: metaResponse.ok, metaStatus }),
    };
  } catch (err) {
    console.log('[meta-proxy] error', err && err.message ? err.message : String(err));
    return {
      statusCode: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: false }),
    };
  }
};
