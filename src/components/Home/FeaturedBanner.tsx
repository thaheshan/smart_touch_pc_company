import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedBanner: React.FC = () => {
  return (
    <div className="bg-black py-12 md:py-16 my-8">
      <div className="container mx-auto px-4">
        <div className="bg-[url('https://images.pexels.com/photos/230743/pexels-photo-230743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center rounded-xl overflow-hidden">
          <div className="bg-black bg-opacity-60 px-6 py-12 md:py-16 lg:py-20">
            <div className="max-w-xl mx-auto md:mx-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Enhance Your Music Experience
              </h2>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-full px-4 py-2 text-white flex items-center justify-center">
                  <span className="text-2xl font-bold mr-1">$150</span>
                  <span className="text-sm">Starting at</span>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-full px-4 py-2 text-white flex items-center justify-center">
                  <span className="text-sm mr-1">Free shipping</span>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-full px-4 py-2 text-white flex items-center justify-center">
                  <span className="text-sm mr-1">24/7 Support</span>
                </div>
              </div>
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
    </div>
  );
};

export default FeaturedBanner;