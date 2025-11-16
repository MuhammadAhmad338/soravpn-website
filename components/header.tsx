"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/features", label: "Features" },
    { href: "/plans", label: "Plans" },
    { href: "/download", label: "Download" },
    { href: "/support", label: "Support" },
    { href: "/ip-checker", label: "IP Checker" },
  ];

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-[1380px] mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="SoraVPN Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="font-semibold text-lg text-gray-900 tracking-tight">
            SoraVPN
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium text-md">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-orange-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-orange-600 text-white px-5 py-2.5 rounded-full shadow-sm hover:bg-orange-700 transition-colors text-sm font-semibold"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center justify-center rounded-full border border-gray-200 bg-white p-2 shadow-sm text-gray-700"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[82vw] bg-white z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden shadow-xl`}
      >
        {/* Mobile Header inside drawer */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2"
          >
            <Image
              src="/logo.png"
              alt="SoraVPN Logo"
              width={30}
              height={30}
              className="w-7 h-7"
            />
            <span className="font-semibold text-base text-gray-900 tracking-tight">
              SoraVPN
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white p-2 text-gray-700 shadow-sm"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile nav list */}
        <nav className="px-5 py-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Auth Buttons */}
        <div className="px-5 pt-2 pb-6 border-t border-gray-100 mt-2">
          <div className="space-y-3">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center text-sm font-semibold text-gray-800 border border-gray-200 rounded-full py-2.5 hover:border-orange-500 hover:text-orange-600 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center text-sm font-semibold bg-orange-600 text-white rounded-full py-2.5 shadow-md hover:bg-orange-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Small caption */}
          <p className="mt-4 text-[11px] text-gray-400 text-center">
            Secure your connection in seconds with SoraVPN.
          </p>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-30"
        />
      )}
    </header>
  );
};

export default Header;
