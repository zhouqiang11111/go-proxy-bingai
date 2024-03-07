import { bingapiChat } from '../../cloudflare/bingapi.js'

export const config = {
  runtime: 'edge',
};

export function POST(request) {
  if (request.method == 'OPTIONS') {
    return Response.json({ code: 200, message: 'OPTIONS', data: null }, {
      headers: {
        "Allow": "POST, OPTIONS",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, Cookie",
      }
    });
  }
  if (request.method != 'POST') {
    return Response.json({ code: 405, message: 'Method Not Allowed', data: null }, { status: 405 });
  }

  const CUSTOM_OPTIONS = {
    cookie: '',
    BYPASS_SERVER: 'https://bypass.zklcdc.xyz',
  }
  return bingapiChat(request, CUSTOM_OPTIONS);
}