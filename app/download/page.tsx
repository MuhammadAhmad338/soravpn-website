"use client";
import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";

const DownloadPage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-20">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 text-center">
        Download SoraVPN
      </h1>
      <p className="text-gray-600 text-lg mb-12 max-w-2xl text-center">
        Secure your connection on all platforms. Download SoraVPN now and stay protected wherever you go.
      </p>

      {/* Download Cards */}
      <div className="flex justify-center w-full max-w-6xl">
        {/* Android Download Card */}
        <div className="bg-white p-10 rounded-2xl shadow-md text-center hover:shadow-lg transition-all duration-300 max-w-5xl">
          <Image
            src="/androidicon.png"
            alt="Android"
            className="w-20 mx-auto mb-6"
            width={80}
            height={80}
          />
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Android</h2>
          <p className="text-gray-500 mb-6">Available as an APK download</p>
          <a
            href="/downloads/app-release.apk"
            className="flex items-center justify-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg mx-auto hover:bg-orange-700 transition font-medium"
          >
            <Download size={20} /> Download APK
          </a>
        </div>
      </div> 

      {/* Support link */}
      <p className="text-gray-500 text-sm mt-12 text-center max-w-xl">
        Having trouble installing? Visit our{" "}
        <a href="/support" className="text-orange-600 hover:underline">
          support page
        </a>{" "}
        for help.
      </p>
    </section>
  );
};

export default DownloadPage;
