import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  id: number;
  name: string;
  icon: React.ReactNode;
  url: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, icon, url }) => {
  return (
    <Link to={url} className="block">
      <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-gray-200 hover:border-red-500 transition-all duration-300 h-[140px]">
        <div className="mb-3 text-gray-600">
          {icon}
        </div>
        <h3 className="text-sm font-medium text-center">{name}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;