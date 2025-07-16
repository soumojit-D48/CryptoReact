import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-[#0d0d0d] text-gray-300 border-t border-[#5f5d5f]">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About CryptoPrice</h2>
          <p className="text-sm leading-relaxed">
            CryptoPrice is a real-time cryptocurrency tracker. Stay updated with live coin prices, market trends, and portfolio performance. Powered by public APIs.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Markets</a></li>
            <li><a href="#" className="hover:underline">Portfolio</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-xl">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="text-center text-sm text-gray-400 border-t border-[#5f5d5f] py-4">
        © 2025 CryptoPrice — All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
