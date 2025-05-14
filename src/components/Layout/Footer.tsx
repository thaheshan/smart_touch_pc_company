import React from 'react';
import { Link } from 'react-router-dom';
import { Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Exclusive</h2>
            <p className="mb-4">Subscribe</p>
            <p className="mb-4">Get 10% off your first order</p>
            <div className="flex border border-white rounded-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-none outline-none py-2 px-4 w-full"
              />
              <button className="px-3 flex items-center justify-center">
                <Send size={20} />
              </button>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Support</h2>
            <p className="mb-2">no 14, Post office RD</p>
            <p className="mb-2">
                    Trincomalee, Sri Lanka.</p>
            <p className="mb-2">SMARTTOUCHPC@gmail.com</p>
            <p className="mb-2">+94 75-257-0435</p>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Account</h2>
            <Link to="/account" className="block mb-2 hover:text-red-500 transition-colors">
              My Account
            </Link>
            <Link to="/login" className="block mb-2 hover:text-red-500 transition-colors">
              Login / Register
            </Link>
            <Link to="/cart" className="block mb-2 hover:text-red-500 transition-colors">
              Cart
            </Link>
            <Link to="/wishlist" className="block mb-2 hover:text-red-500 transition-colors">
              Wishlist
            </Link>
            <Link to="/" className="block mb-2 hover:text-red-500 transition-colors">
              Shop
            </Link>
          </div>

          {/* Column 4 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Quick Link</h2>
            <Link to="/privacy-policy" className="block mb-2 hover:text-red-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="block mb-2 hover:text-red-500 transition-colors">
              Terms Of Use
            </Link>
            <Link to="/faq" className="block mb-2 hover:text-red-500 transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="block mb-2 hover:text-red-500 transition-colors">
              Contact
            </Link>
          </div>

          {/* App Download Section */}
          <div className="space-y-4 lg:col-span-4 xl:col-span-1">
            <h2 className="text-xl font-bold mb-4">Download App</h2>
            <p className="text-sm text-gray-300 mb-2">Save $3 with App New User Only</p>
            <div className="flex space-x-4 items-center">
              <div className="qr-code">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://example.com/app" 
                  alt="QR Code" 
                  className="w-24 h-24"
                />
              </div>
              <div className="space-y-2">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Play Store" 
                  className="h-8"
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="App Store" 
                  className="h-8"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center md:justify-end space-x-6 mt-8">
          <a href="https://facebook.com" className="hover:text-red-500 transition-colors">
            <Facebook size={24} />
          </a>
          <a href="https://twitter.com" className="hover:text-red-500 transition-colors">
            <Twitter size={24} />
          </a>
          <a href="https://instagram.com" className="hover:text-red-500 transition-colors">
            <Instagram size={24} />
          </a>
          <a href="https://linkedin.com" className="hover:text-red-500 transition-colors">
            <Linkedin size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-16">
          <p className="text-gray-400">© Copyright FUTURA Solutions 2025. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;