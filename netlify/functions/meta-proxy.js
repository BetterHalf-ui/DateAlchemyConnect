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

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  const META_PIXEL_ID = process.env.META_PIXEL_ID;
  const META_ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;

  if (!META_PIXEL_ID || !META_ACCESS_TOKEN) {
    console.error('Missing META_PIXEL_ID or META_ACCESS_TOKEN environment variables');
    return {
      statusCode: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Missing Meta credentials' }),
    };
  }

  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const { eventName, eventId, url, fbp, fbc } = body;

    if (!eventName) {
      return {
        statusCode: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'eventName is required' }),
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

    const response = await axios.post(
      `https://graph.facebook.com/v19.0/${META_PIXEL_ID}/events`,
      payload,
      {
        params: { access_token: META_ACCESS_TOKEN },
        headers: { 'Content-Type': 'application/json' },
      }
    );

    return {
      statusCode: response.status,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true, result: response.data }),
    };
  } catch (error) {
    const metaStatus = error?.response?.status;
    const metaData = error?.response?.data;
    console.error('Meta CAPI error:', metaData || error.message);
    return {
      statusCode: metaStatus || 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: 'Failed to send event to Meta CAPI',
        ...(metaData && { detail: metaData }),
      }),
    };
  }
};
