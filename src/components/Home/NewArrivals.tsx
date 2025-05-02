import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewArrivals: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <div className="h-10 w-5 bg-red-500 rounded mr-3"></div>
          <h2 className="text-2xl font-bold">New Arrivals</h2>
        </div>
        <div className="flex space-x-2">
          <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:border-red-500 hover:text-red-500 transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:border-red-500 hover:text-red-500 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* PS5 Console */}
        <div className="col-span-1 lg:col-span-2 lg:row-span-2 relative group bg-[#0A0A0A] rounded-lg overflow-hidden h-[400px] lg:h-auto">
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="https://images.pexels.com/photos/10887048/pexels-photo-10887048.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="PlayStation 5"
              className="w-3/4 h-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-bold mb-3">PlayStation 5</h3>
            <p className="text-gray-300 mb-4">Experience lightning-fast loading with an ultra-high speed SSD</p>
            <Link to="/product/ps5" className="text-white underline hover:text-red-500 transition-colors">
              Shop Now
            </Link>
          </div>
        </div>
        
        {/* RTX Graphics Card */}
        <div className="col-span-1 lg:col-span-2 relative group bg-[#0A0A0A] rounded-lg overflow-hidden h-[200px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="https://images.pexels.com/photos/243223/pexels-photo-243223.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="RTX Graphics Card"
              className="w-3/4 h-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-lg font-bold mb-2">RTX GEFORCE Graphics Card</h3>
            <Link to="/product/rtx" className="text-white underline hover:text-red-500 transition-colors">
              Shop Now
            </Link>
          </div>
        </div>
        
        {/* Wireless Earbuds */}
        <div className="col-span-1 relative group bg-[#0A0A0A] rounded-lg overflow-hidden h-[200px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="https://images.pexels.com/photos/2521499/pexels-photo-2521499.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Wireless Earbuds"
              className="w-3/4 h-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-lg font-bold mb-2">AirPods Pro</h3>
            <Link to="/product/airpods" className="text-white underline hover:text-red-500 transition-colors">
              Shop Now
            </Link>
          </div>
        </div>
        
        {/* Smartwatch */}
        <div className="col-span-1 relative group bg-[#0A0A0A] rounded-lg overflow-hidden h-[200px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Smartwatch"
              className="w-3/4 h-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-lg font-bold mb-2">Apple Watch Series 8</h3>
            <Link to="/product/watch" className="text-white underline hover:text-red-500 transition-colors">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;