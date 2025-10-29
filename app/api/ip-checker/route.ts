// app/api/ip-checker/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const ipApis = [
      'https://api.ipify.org?format=json',
      'https://ipapi.co/json/',
      'https://api64.ipify.org?format=json',
    ];

    let data = null;

    for (const api of ipApis) {
      try {
        const res = await fetch(api, {
          headers: { 'User-Agent': 'SoraVPN-IP-Checker/1.0' },
          cache: 'no-store',
        });
        if (res.ok) {
          data = await res.json();
          break;
        }
      } catch {
        continue;
      }
    }

    if (!data) throw new Error('All IP APIs failed');

    // Get location details if missing
    if (data.ip && !data.country_name) {
      try {
        const detailRes = await fetch(`https://ipapi.co/${data.ip}/json/`);
        if (detailRes.ok) {
          const detail = await detailRes.json();
          data = { ...data, ...detail };
        }
      } catch {}
    }

    return NextResponse.json(data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (e) {
    console.error('IP Checker Error:', e);
    return NextResponse.json({ error: true }, { status: 500 });
  } 
}
