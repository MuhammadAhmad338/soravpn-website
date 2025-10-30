"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // added 'X' for closing menu

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-[1380px] mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="SoraVPN Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="font-bold text-xl text-gray-800">SoraVPN</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium text-md">
          <Link href="/features" className="hover:text-orange-600 transition">
            Features
          </Link>
          <Link href="/plans" className="hover:text-orange-600 transition">
            Plans
          </Link>
          <Link href="/download" className="hover:text-orange-600 transition">
            Download
          </Link>
          <Link href="/support" className="hover:text-orange-600 transition">
            Support
          </Link>
          <Link href="/ip-checker" className="hover:text-orange-600 transition">
            IP Checker
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-gray-700 hover:text-orange-600 transition font-medium"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-orange-600 text-white px-6 py-3 rounded-sm shadow hover:bg-orange-700 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="SoraVPN Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-bold text-lg text-gray-800">SoraVPN</span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-700"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-6 gap-5 text-gray-700 text-lg font-medium">
          <Link
            href="/features"
            onClick={() => setIsOpen(false)}
            className="hover:text-orange-600"
          >
            Features
          </Link>
          <Link
            href="/plans"
            onClick={() => setIsOpen(false)}
            className="hover:text-orange-600"
          >
            Plans
          </Link>
          <Link
            href="/download"
            onClick={() => setIsOpen(false)}
            className="hover:text-orange-600"
          >
            Download
          </Link>
          <Link
            href="/support"
            onClick={() => setIsOpen(false)}
            className="hover:text-orange-600"
          >
            Support
          </Link>
          <Link
            href="/ip-checker"
            onClick={() => setIsOpen(false)}
            className="hover:text-orange-600"
          >
            IP Checker
          </Link>
        </nav>

        <div className="mt-6 flex flex-col px-6 gap-4">
          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-orange-600 transition font-medium"
          >
            Login
          </Link>
          <Link
            href="/signup"
            onClick={() => setIsOpen(false)}
            className="bg-orange-600 text-white px-6 py-3 rounded-sm shadow hover:bg-orange-700 transition text-center"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm md:hidden z-30"
        />
      )}
    </header>
  );
};

export default Header;
