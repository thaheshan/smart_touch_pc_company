import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../UI/ProductCard';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'HAVIT HV-G92 Gamepad',
    price: 120,
    originalPrice: 160,
    image: 'https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.8,
    reviewCount: 88,
    discountPercentage: 25,
  },
  {
    id: 2,
    name: 'AK-900 Wired Keyboard',
    price: 960,
    originalPrice: 1160,
    image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.7,
    reviewCount: 75,
    discountPercentage: 35,
  },
  {
    id: 3,
    name: 'IPS LCD Gaming Monitor',
    price: 370,
    originalPrice: 400,
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.9,
    reviewCount: 99,
    discountPercentage: 30,
  },
  {
    id: 4,
    name: 'RGB liquid CPU Cooler',
    price: 160,
    originalPrice: 170,
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.5,
    reviewCount: 65,
    discountPercentage: 40,
  },
];

const FlashSale: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endTime = new Date();
    endTime.setDate(endTime.getDate() + 2); // 2 days from now

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <div className="h-10 w-5 bg-red-500 rounded mr-3"></div>
          <h2 className="text-2xl font-bold">Today's Flash Sales</h2>
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

      {/* Countdown Timer */}
      <div className="flex items-center space-x-6 mb-8">
        <div className="flex items-end">
          <div className="text-sm text-gray-500 mr-2">Days</div>
          <div className="text-xl md:text-2xl font-bold">{String(timeLeft.days).padStart(2, '0')}</div>
        </div>
        <div className="text-xl md:text-2xl font-bold">:</div>
        <div className="flex items-end">
          <div className="text-sm text-gray-500 mr-2">Hours</div>
          <div className="text-xl md:text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
        </div>
        <div className="text-xl md:text-2xl font-bold">:</div>
        <div className="flex items-end">
          <div className="text-sm text-gray-500 mr-2">Minutes</div>
          <div className="text-xl md:text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
        </div>
        <div className="text-xl md:text-2xl font-bold">:</div>
        <div className="flex items-end">
          <div className="text-sm text-gray-500 mr-2">Seconds</div>
          <div className="text-xl md:text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductCard
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              rating={product.rating}
              reviewCount={product.reviewCount}
              discountPercentage={product.discountPercentage}
            />
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FlashSale;
