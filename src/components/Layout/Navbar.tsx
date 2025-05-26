import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Heart, User, Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../Images/smart touch pc logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [cartCount] = useState(3);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation for cart icon when count changes
  useEffect(() => {
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
      cartIcon.classList.add('animate-bounce');
      setTimeout(() => {
        cartIcon.classList.remove('animate-bounce');
      }, 1000);
    }
  }, [cartCount]);

  return (
    <>
      {/* Announcement Bar with sliding animation */}
      <div className="bg-white text-black overflow-hidden">
        <div className="py-2 px-2 animate-marquee">
          <p className="text-sm flex items-center justify-center">
            <span className="inline-block">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
            <Link 
              to="/products" 
              className="font-bold cursor-pointer mx-2 text-black hover:text-red-500 transition-all duration-300 inline-block hover:scale-110"
            >
              ShopNow
            </Link>

            {/* Improved Language Dropdown */}
            <div className="relative group ml-4 inline-block">
              <span className="cursor-pointer text-sm flex items-center group-hover:text-red-500 transition-all duration-300">
                ENGLISH
                <ChevronDown size={16} className="ml-1 transform group-hover:rotate-180 transition-transform duration-300" />
              </span>
              <div className="absolute right-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-md hidden group-hover:block opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100 origin-top z-50">
                <Link
                  to="/english"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-red-500 transition-colors"
                >
                  English
                </Link>
                <Link
                  to="/tamil"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-red-500 transition-colors"
                >
                  Tamil
                </Link>
                <Link
                  to="/sinhala"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-red-500 transition-colors"
                >
                  Sinhala
                </Link>
              </div>
            </div>
          </p>
        </div>
      </div>

      {/* Main Navbar with scroll effect */}
      <nav 
        className={`border-b border-gray-200 py-4 bg-black sticky top-0 z-40 transition-all duration-500 ${
          scrolled ? 'shadow-lg bg-black/95 backdrop-blur-sm' : ''
        }`}
      >
        <div className="container mx-auto px-1 flex items-center justify-between">
          {/* Logo with hover effect */}
          <Link to="/" className="text-S font-bold text-black-800 transition-transform duration-300 hover:scale-105">
            <img
              src={logo}
              alt="SMART TOUCH PC LOGO"
              className="rounded-lg object-cover w-full h-[60px] md:h-[70px]"
            />
          </Link>

          {/* Desktop Navigation with underline animation */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'Contact', 'About', 'SignUp'].map((item) => (
              <Link 
                key={item} 
                to={`/${item.toLowerCase().replace(' ', '-')}`} 
                className="text-white hover:text-red-500 relative group transition-colors duration-300"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Enhanced Search bar */}
          <div 
            className={`hidden md:flex items-center rounded-md px-4 py-2 w-[300px] transition-all duration-300 ${
              searchFocused ? 'bg-white ring-2 ring-red-500' : 'bg-gray-100'
            }`}
          >
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent border-none outline-none w-full text-sm transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            <Search 
              size={20} 
              className={`cursor-pointer transition-colors duration-300 ${
                searchFocused ? 'text-red-500' : 'text-gray-400'
              }`} 
            />
          </div>

          {/* Action icons with animations */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/wishlist" className="text-white hover:text-red-500 transition-all duration-300 hover:scale-110">
              <Heart size={24} className="hover:animate-pulse" />
            </Link>
            <Link to="/cart" className="text-white hover:text-red-500 transition-all duration-300 hover:scale-110 relative">
              <ShoppingCart size={24} className="cart-icon" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                {cartCount}
              </span>
            </Link>
            <Link to="/account" className="text-white hover:text-red-500 transition-all duration-300 hover:scale-110">
              <User size={24} />
            </Link>
          </div>

          {/* Mobile menu button with animation */}
          <button
            className="md:hidden text-white p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="transform rotate-0 transition-transform duration-300" />
            ) : (
              <Menu size={24} className="transform rotate-0 transition-transform duration-300" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu with slide animation */}
      <div 
        className={`md:hidden fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="p-4">
            <div className="flex items-center bg-gray-100 rounded-md px-4 py-2 mb-6 focus-within:ring-2 focus-within:ring-red-500 transition-all duration-300">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent border-none outline-none w-full text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search size={20} className="text-gray-400" />
            </div>
            
            <div className="space-y-1">
              {['Home', 'Contact', 'About', 'Sign Up'].map((item, index) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="block w-full py-3 px-4 text-gray-800 hover:bg-gray-50 hover:text-red-500 rounded-md transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="mt-auto p-4 border-t border-gray-200">
            <div className="flex items-center justify-around">
              <Link 
                to="/wishlist" 
                className="text-gray-800 hover:text-red-500 p-3 transition-all duration-300 hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart size={24} />
              </Link>
              <Link 
                to="/cart" 
                className="text-gray-800 hover:text-red-500 p-3 relative transition-all duration-300 hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCart size={24} />
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              </Link>
              <Link 
                to="/account" 
                className="text-gray-800 hover:text-red-500 p-3 transition-all duration-300 hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      {/* Notification Bar that slides in when needed */}
      {scrolled && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-full shadow-lg z-50 animate-slideUp">
          <p className="flex items-center text-sm">
            <span className="mr-2">🔥</span>
            Limited time offer: Free shipping on orders over $50!
          </p>
        </div>
      )}
    </>
  );
};

export default Navbar;