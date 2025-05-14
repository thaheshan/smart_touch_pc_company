import React from 'react';
import { Link } from 'react-router-dom';
import featuredbanner from '../../Images/music experince banner 1.png';

const FeaturedBanner: React.FC = () => {
  return (
    <div className="bg-black py-12 md:py-16 my-8">
      <div className="container mx-auto px-4">
        <div
          className="relative bg-cover bg-center rounded-xl overflow-hidden px-12 py-56"
          style={{ backgroundImage: `url(${featuredbanner})` }}
        >
          {/* Button Positioned Bottom Left */}
          <div className="absolute bottom-6 left-60">
            <Link 
              to="/category/audio" 
              className="inline-block px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBanner;
