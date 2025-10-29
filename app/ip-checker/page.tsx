"use client";
import { useEffect, useState } from "react";

interface IpInfo {
  ip: string;
  country_name: string;
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

  const renderContent = () => {
    if (!ipInfo) {
      return (
        <div className="flex items-center justify-center space-x-2">
          <div className="w-6 h-6 rounded-full animate-spin border-2 border-dashed border-orange-600 border-t-transparent"></div>
          <span className="text-gray-500">Checking your IP...</span>
        </div>
      );
    }

    if (ipInfo.error) {
      return (
        <div className="flex flex-col items-center text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <p className="font-semibold text-lg">Error</p>
          <p className="text-gray-500 text-sm">Could not fetch IP information.</p>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {/* IP */}
        <div className="text-center">
          <p className="text-sm text-gray-500">Your IP Address</p>
          <h3 className="text-3xl sm:text-4xl font-bold text-orange-600 break-all">
            {ipInfo.ip}
          </h3>
        </div>

        {/* Info Cards */}
        <div className="grid gap-4">
          {/* Country */}
          <div className="flex items-center p-4 bg-gray-50 border border-gray-200 rounded-xl hover:shadow-md transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <div>
              <p className="text-xs text-gray-500 uppercase">Country</p>
              <p className="text-lg font-semibold text-gray-800">
                {ipInfo.country_name || "N/A"}
              </p>
            </div>
          </div>

          {/* ISP */}
          <div className="flex items-center p-4 bg-gray-50 border border-gray-200 rounded-xl hover:shadow-md transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
              />
            </svg>
            <div>
              <p className="text-xs text-gray-500 uppercase">ISP / Organization</p>
              <p className="text-lg font-semibold text-gray-800">
                {ipInfo.org || "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="text-center mt-6">
          <p className="bg-orange-100 text-orange-700 py-3 px-5 rounded-xl font-semibold shadow-sm">
            ⚠️ You’re Exposed! Protect your IP with <span className="font-bold">SoraVPN</span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 text-center">
        Check Your IP Status
      </h1>
      <p className="text-gray-600 text-lg mb-12 max-w-2xl text-center">
        Instantly view your current IP, location, and VPN protection status with SoraVPN’s IP Checker.
      </p>

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-md p-8 transition-all duration-300 ease-in-out hover:shadow-lg">
        {renderContent()}
      </div>
    </section>
  );
}
