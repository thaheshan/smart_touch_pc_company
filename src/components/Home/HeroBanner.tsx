import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroBanner: React.FC = () => {
  return (
    <div className="bg-[#0A0A0A] text-white">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              The Next Generation <br />
              <span className="text-red-500">Tech Experience</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-md">
              Discover the latest in electronics, gaming accessories, and cutting-edge tech gadgets.
            </p>
            <div className="pt-4">
              <Link 
                to="/products" 
                className="inline-flex items-center text-white bg-red-500 hover:bg-red-600 transition-colors px-6 py-3 rounded-md font-medium"
              >
                Shop Now <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1474234/pexels-photo-1474234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Latest Gaming Laptop"
              className="rounded-lg object-cover w-full h-[400px] md:h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;