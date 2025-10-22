"use client";
import React from "react";
import { Shield, Zap, Globe, Lock, Server, Wifi } from "lucide-react";

const features = [
  {
    icon: <Shield className="w-12 h-12 text-orange-600" />,
    title: "Military-Grade Encryption",
    description:
      "Keep your data completely safe with AES-256 encryption — the same security standard used by governments and top tech companies.",
  },
  {
    icon: <Globe className="w-12 h-12 text-orange-600" />,
    title: "Global Server Network",
    description:
      "Access your favorite content from anywhere with servers spread across multiple regions worldwide.",
  },
  {
    icon: <Zap className="w-12 h-12 text-orange-600" />,
    title: "Blazing Fast Speeds",
    description:
      "Enjoy ultra-fast streaming and browsing with our optimized VPN servers, designed for minimal latency.",
  },
  {
    icon: <Lock className="w-12 h-12 text-orange-600" />,
    title: "Strict No-Logs Policy",
    description:
      "Your privacy comes first. We never store your browsing data or personal information — ever.",
  },
  {
    icon: <Server className="w-12 h-12 text-orange-600" />,
    title: "99.9% Uptime",
    description:
      "Our high-performance infrastructure ensures you stay connected securely, anytime, anywhere.",
  },
  {
    icon: <Wifi className="w-12 h-12 text-orange-600" />,
    title: "Public Wi-Fi Protection",
    description:
      "Stay safe on public Wi-Fi networks with automatic protection against hackers and data theft.",
  },
];

const FeaturesPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-24 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-orange-100 opacity-30 blur-3xl rounded-full -z-10" />

      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-6">
        Powerful Features for a Safer Internet
      </h1>
      <p className="text-gray-600 text-lg mb-16 max-w-2xl text-center">
        SoraVPN combines speed, privacy, and accessibility — giving you total
        freedom and security online.
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex justify-center mb-5">{feature.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Ready to Experience True Online Freedom?
        </h2>
        <a
          href="/plans"
          className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-medium shadow hover:bg-orange-700 transition-all"
        >
          View Our Plans
        </a>
      </div>
    </section>
  );
};

export default FeaturesPage;
