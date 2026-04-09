import axios from 'axios';

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
      return {
        statusCode: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        body: JSON.stringify({ ok: false }),
      };
    }

    const body = event.body ? JSON.parse(event.body) : {};
    const { eventName, eventId, url, fbp, fbc } = body;

    if (!eventName) {
      return {
        statusCode: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        body: JSON.stringify({ ok: false }),
      };
    }

    const clientIp =
      (event.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
      event.headers['client-ip'] ||
      '';
    const userAgent = event.headers['user-agent'] || '';

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

    await axios.post(
      `https://graph.facebook.com/v19.0/${META_PIXEL_ID}/events`,
      payload,
      {
        params: { access_token: META_ACCESS_TOKEN },
        headers: { 'Content-Type': 'application/json' },
        timeout: 5000,
      }
    );

    return {
      statusCode: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true }),
    };
  } catch (_) {
    return {
      statusCode: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: false }),
    };
  }
};
