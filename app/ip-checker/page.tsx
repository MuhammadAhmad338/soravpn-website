"use client";
import { useEffect, useState } from "react";

interface IpInfo {
  ip: string;
  country_name: string;
  country_code: string;
  org: string;
  error?: boolean;
}

export default function IpChecker() {
  const [ipInfo, setIpInfo] = useState<IpInfo | null>(null);

  useEffect(() => {
    fetch("/api/ip-checker")
      .then((res) => res.json())
      .then(setIpInfo)
      .catch(() => setIpInfo({ error: true } as IpInfo));
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-20">
      {/* Section Header (same style as Plans) */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 text-center">
        Check Your IP Status
      </h1>
      <p className="text-gray-600 text-lg mb-12 max-w-2xl text-center">
        Instantly view your current IP, location, and VPN protection status with SoraVPN’s IP Checker.
      </p>

      {/* IP Info Card (styled like Plans cards) */}
      {ipInfo ? (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-md p-8 text-center">
          {ipInfo.error ? (
            <p className="text-red-500 font-medium">
              Could not fetch IP information.
            </p>
          ) : (
            <>
              <h2 className="text-2xl font-semibold mb-4 text-orange-600">
                Your IP Information
              </h2>

              <div className="text-gray-700 space-y-3 text-left mb-6">
                <p>
                  <strong className="text-orange-500">IP:</strong> {ipInfo.ip}
                </p>
                <p>
                  <strong className="text-orange-500">Country:</strong>{" "}
                  {ipInfo.country_name}
                </p>
                <p>
                  <strong className="text-orange-500">ISP:</strong>{" "}
                  {ipInfo.org}
                </p>
              </div>

              <div
                className={`py-3 px-4 rounded-lg font-semibold ${
                  ipInfo.country_code
                    ? "bg-red-100 text-red-600"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {ipInfo.country_code
                  ? "⚠️ You’re Exposed! (No VPN Detected)"
                  : "🛡️ You're Protected by SoraVPN!"}
              </div>
            </>
          )}
        </div>
      ) : (
        <p className="text-gray-400 text-lg">Fetching your IP...</p>
      )}
    </section>
  );
}
