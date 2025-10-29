import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0] || "8.8.8.8"; // fallback

    const apis = [
      `https://ipwho.is/${ip}`,
      `https://ipapi.co/${ip}/json/`,
      `https://ipinfo.io/${ip}/json`,
    ];

    let data = null;
    for (const api of apis) {
      try {
        const res = await fetch(api, { cache: "no-store" });
        if (res.ok) {
          data = await res.json();
          break;
        }
      } catch {
        continue;
      }
    }

    if (!data) throw new Error("All IP APIs failed");

    const ipInfo = {
      ip: data.ip || ip,
      country_name: data.country || data.country_name || "N/A",
      country_code: data.country_code || data.countryCode || "N/A",
      org: data.connection?.org || data.org || data.isp || "Unknown",
    };

    return NextResponse.json(ipInfo);
  } catch (error) {
    console.error("IP API Error:", error);
    return NextResponse.json({ error: true }, { status: 500 });
  }
}
