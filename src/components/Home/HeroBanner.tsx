import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import advertisingbanner from '../../Images/home page advertising banner-2.png';

const HeroBanner: React.FC = () => {
  return (
    <div className="relative bg-[#0A0A0A] text-white h-[500px] md:h-[600px] lg:h-[700px]">
      {/* Background Image */}
      <img
        src={advertisingbanner}
        alt="Latest Gaming Laptop"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />

    {/* Content */}
<div className="relative z-20 container mx-auto px-4 py-12 md:py-16 lg:py-20 h-full flex items-center justify-end">
  <div className="space-y-6 md:space-y-8 max-w-2xl text-right">
    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight py-4">
      The Next Generation <br />
      <span className="text-red-500">Tech Experience</span>
    </h1>
    <p className="text-lg text-gray-300 max-w-md ml-auto">
      Discover the latest in electronics, gaming accessories, and cutting-edge tech gadgets.
    </p>
 
  </div>
{/* Shop Now Button at Bottom Center */}
 <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2"> 
 <Link to="/products" className="inline-flex items-center text-white bg-red-500 hover:bg-red-600 transition-colors px-6 py-3 rounded-md font-medium" >
  Shop Now <ArrowRight size={20} className="ml-2" /> </Link> </div>

</div>



    </div>
  );
};

export default HeroBanner;