import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react"; // using lucide-react for icons

const Header = () => {
  return (
    <header className="w-full bg-white sticky top-0 z-50">
      <div className="max-w-[1380px] mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="SoraVPN Logo" width={32} height={32} className="w-8 h-8" />
          <span className="font-bold text-xl text-gray-800">SoraVPN</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium text-md">
          <Link href="features" className="hover:text-orange-600 transition">
            Features
          </Link>
          <Link href="plans" className="hover:text-orange-600 transition">
            Plans
          </Link>
          <Link href="download" className="hover:text-orange-600 transition">
            Download
          </Link>
          <Link href="support" className="hover:text-orange-600 transition">
            Support
          </Link>
          <Link href="ip-checker" className="hover:text-orange-600 transition">
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
        <button className="md:hidden text-gray-700">
          <Menu className="w-7 h-7" />
        </button>
      </div>
    </header>
  );
};

export default Header;
