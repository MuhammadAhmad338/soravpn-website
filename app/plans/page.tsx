import React from "react";

const Plans = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-20">
      
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 text-center">
        Choose Your Plan
      </h1>
      <p className="text-gray-600 text-lg mb-12 max-w-2xl text-center">
        Whether you need a short-term VPN or long-term protection, SoraVPN has the right plan for you.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-5xl">
        {/* Basic Plan */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 w-full md:w-1/3 p-8 text-center">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Basic</h2>
          <p className="text-4xl font-bold text-orange-600 mb-1">$5</p>
          <p className="text-gray-500 mb-6">per month</p>
          <ul className="text-gray-600 space-y-3 text-left mb-8">
            <li>✅ Access to basic servers</li>
            <li>✅ Standard speed</li>
            <li>✅ Basic support</li>
          </ul>
          <button className="bg-orange-600 text-white font-medium w-full py-3 rounded-lg hover:bg-orange-700 transition">
            Get Started
          </button>
        </div>

        {/* Premium Plan (Highlighted) */}
        <div className="bg-gradient-to-b from-orange-600 to-orange-700 text-white rounded-2xl shadow-lg scale-105 p-8 w-full md:w-1/3 text-center relative">
          <span className="absolute top-4 right-4 bg-white text-orange-700 text-xs font-bold px-3 py-1 rounded-full shadow">
            Most Popular
          </span>
          <h2 className="text-2xl font-semibold mb-2">Premium</h2>
          <p className="text-4xl font-bold mb-1">$15</p>
          <p className="opacity-80 mb-6">per month</p>
          <ul className="space-y-3 text-left mb-8">
            <li>⭐ Access to all servers</li>
            <li>⭐ High speed connection</li>
            <li>⭐ Priority 24/7 support</li>
          </ul>
          <button className="bg-white text-orange-700 font-medium w-full py-3 rounded-lg hover:bg-gray-100 transition">
            Choose Premium
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 w-full md:w-1/3 p-8 text-center">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Pro</h2>
          <p className="text-4xl font-bold text-orange-600 mb-1">$25</p>
          <p className="text-gray-500 mb-6">per month</p>
          <ul className="text-gray-600 space-y-3 text-left mb-8">
            <li>🚀 Unlimited bandwidth</li>
            <li>🚀 Highest speed servers</li>
            <li>🚀 Dedicated account manager</li>
          </ul>
          <button className="bg-orange-600 text-white font-medium w-full py-3 rounded-lg hover:bg-orange-700 transition">
            Go Pro
          </button>
        </div>

      </div>
    </section>
  );
};

export default Plans;
