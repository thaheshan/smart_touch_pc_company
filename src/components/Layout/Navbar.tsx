import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Heart, User, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-black text-white text-center py-2 px-2 ">
        <p className="text-sm ">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
          <span className="font-bold cursor-pointer   px-2">ShopNow</span>
          <Link  className=' cursor-pointer text-S  absolute -right-0 px-3 hover:text-red-500 transition-colors' to={''}
           onClick={() => setIsEnglish(!isEnglish)}>ENGLISH</Link>

        </p>
      </div>

      {/* Main Navbar */}
      <nav className="border-b border-gray-200 py-4 bg-white">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-S font-bold text-black-800 hover:text-red-500">
            SMART TOUCH PC
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/home" className="text-gray-800 hover:text-red-500 transition-colors">
              Home
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-red-500 transition-colors">
              Contact
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-red-500 transition-colors">
              About
            </Link>
            <Link to="/signup" className="text-gray-800 hover:text-red-500 transition-colors">
              Sign Up
            </Link>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-md px-4 py-2 w-[300px]">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent border-none outline-none w-full text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search size={20} className="text-gray-400 cursor-pointer" />
          </div>

          {/* Action icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/wishlist" className="text-gray-800 hover:text-red-500 transition-colors">
              <Heart size={24} />
            </Link>
            <Link to="/cart" className="text-gray-800 hover:text-red-500 transition-colors relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <Link to="/account" className="text-gray-800 hover:text-red-500 transition-colors">
              <User size={24} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      {/* Language Selection menu */}
      {isEnglish &&(
        <div className="bg-white border-b border-gray-200 py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/english" className="text-gray-800 hover:text-red-500 transition-colors">
                English
              </Link>
              <Link to="/tamil" className="text-gray-800 hover:text-red-500 transition-colors">
                Tamil
              </Link>
                   <Link to="/spanish" className="text-gray-800 hover:text-red-500 transition-colors">
                Sinhala
              </Link>
            </div>
          </div>
        </div>
      )}



      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <div className="flex items-center bg-gray-100 rounded-md px-4 py-2">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent border-none outline-none w-full text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search size={20} className="text-gray-400" />
            </div>
            <Link
              to="/"
              className="text-gray-800 py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="text-gray-800 py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/signup"
              className="text-gray-800 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
            <div className="flex items-center justify-around pt-4">
              <Link to="/wishlist" className="text-gray-800" onClick={() => setIsMenuOpen(false)}>
                <Heart size={24} />
              </Link>
              <Link to="/cart" className="text-gray-800 relative" onClick={() => setIsMenuOpen(false)}>
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </Link>
              <Link to="/account" className="text-gray-800" onClick={() => setIsMenuOpen(false)}>
                <User size={24} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;