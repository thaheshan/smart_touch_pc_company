import React from 'react';
import { ChevronLeft, ChevronRight, Monitor, Laptop, Headphones, GamepadIcon, Smartphone, Camera, Speaker, Watch } from 'lucide-react';
import CategoryCard from '../UI/CategoryCard';

const categories = [
  { id: 1, name: 'Laptops', icon: <Laptop size={32} />, url: '/category/laptops' },
  { id: 2, name: 'Monitors', icon: <Monitor size={32} />, url: '/category/monitors' },
  { id: 3, name: 'Headphones', icon: <Headphones size={32} />, url: '/category/headphones' },
  { id: 4, name: 'Gaming', icon: <GamepadIcon size={32} />, url: '/category/gaming' },
  { id: 5, name: 'Smartphones', icon: <Smartphone size={32} />, url: '/category/smartphones' },
  { id: 6, name: 'Cameras', icon: <Camera size={32} />, url: '/category/cameras' },
  { id: 7, name: 'Speakers', icon: <Speaker size={32} />, url: '/category/speakers' },
  { id: 8, name: 'Smartwatches', icon: <Watch size={32} />, url: '/category/smartwatches' },
];

const FeaturedCategories: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold">Browse By Category</h2>
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
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            name={category.name}
            icon={category.icon}
            url={category.url}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;