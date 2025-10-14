"use client";
import React from "react";

const Support = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-20">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 text-center">
        Support Center
      </h1>
      <p className="text-gray-600 text-lg mb-12 max-w-2xl text-center">
        Need help? Our support team is here 24/7. Fill out the form below or check out our quick help topics.
      </p>

      <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl">
        {/* Left - Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md flex-1">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center md:text-left">
            Contact Us
          </h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-600"
            />
            <textarea
              placeholder="How can we help you?"
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-600"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Help Section */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center md:text-left">
            Quick Help
          </h2>
          <ul className="space-y-3 text-gray-600 text-center md:text-left">
            <li>📌 How to download and install SoraVPN</li>
            <li>🔑 Resetting your account password</li>
            <li>🌐 Troubleshooting connection issues</li>
            <li>💳 Billing & subscription questions</li>
            <li>🛡️ Security & privacy information</li>
          </ul>
          <p className="mt-6 text-gray-500 text-sm text-center md:text-left">
            Can’t find your answer? Fill out the form or email us directly at{" "}
            <span className="text-orange-600 font-medium">support@soravpn.com</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Support;
