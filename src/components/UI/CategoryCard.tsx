import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  id: number;
  name: string;
  icon: React.ReactNode;
  url: string;
  description?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({  name, icon, url, description }) => {
  return (
    <Link to={url} className="block">
      <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg border border-gray-200 hover:border-red-500 transition-all duration-300 h-[180px] group">
        <div className="mb-4 text-gray-600 group-hover:text-red-500 transition-colors">
          {icon}
        </div>
        <h3 className="text-lg font-medium text-center mb-2">{name}</h3>
        {description && (
          <p className="text-sm text-gray-500 text-center line-clamp-2">{description}</p>
        )}
      </div>
    </Link>
  );
};

export default CategoryCard;