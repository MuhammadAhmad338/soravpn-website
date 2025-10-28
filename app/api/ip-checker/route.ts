import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Try multiple IP APIs as fallback
    const apis = [
      'https://api.ipify.org?format=json',
      'https://ipapi.co/json/',
      'https://api64.ipify.org?format=json'
    ];

    let data = null;
    let lastError = null;

    for (const apiUrl of apis) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

        const response = await fetch(apiUrl, {
          headers: {
            'User-Agent': 'SoraVPN-IP-Checker/1.0',
          },
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (response.ok) {
          data = await response.json();
          break;
        }
      } catch (error) {
        lastError = error;
        continue;
      }
    }

    if (!data) {
      throw lastError || new Error('All IP APIs failed');
    }

    // If we got basic IP from ipify, try to get more details from ipapi
    if (data.ip && !data.country_name) {
      try {
        const detailResponse = await fetch(`https://ipapi.co/${data.ip}/json/`, {
          headers: {
            'User-Agent': 'SoraVPN-IP-Checker/1.0',
          },
        });

        if (detailResponse.ok) {
          const detailData = await detailResponse.json();
          data = { ...data, ...detailData };
        }
      } catch {
        // Keep basic data if detailed fetch fails
      }
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('IP API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch IP information' },
      { status: 500 }
    );
  }
}