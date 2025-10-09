import React from "react";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground mt-12">
      <div className=" border-t border-t-gray-100 mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand / Logo */}
        <div>
          <h2 className="text-xl font-bold">SoraVPN</h2>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            Building a safer, faster, and more open internet for everyone.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-2">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-2">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="/termsandservices" className="hover:underline">Terms of Service</a></li>
              <li><a href="/privacypolicy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-blue-500"><Facebook size={20} /></a>
            <a href="#" className="hover:text-sky-400"><Twitter size={20} /></a>
            <a href="#" className="hover:text-pink-500"><Instagram size={20} /></a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white"><Github size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" border-gray-200 bg-orange-500 dark:border-gray-800 py-4 text-center text-sm text-white">
        © {new Date().getFullYear()} SoraVPN. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
