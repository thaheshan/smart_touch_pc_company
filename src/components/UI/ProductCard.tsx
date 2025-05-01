import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  discountPercentage?: number;
  isNew?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  discountPercentage,
  isNew,
}) => {
  return (
    <div className="group relative bg-white rounded-lg p-4 transition-all duration-300 hover:shadow-lg">
      {/* Product image with overlay */}
      <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square mb-4">
        {discountPercentage && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-md z-10">
            -{discountPercentage}%
          </span>
        )}
        {isNew && (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-md z-10">
            NEW
          </span>
        )}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Action buttons overlay */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md transition-all hover:bg-red-500 hover:text-white">
            <Heart size={16} />
          </button>
          <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md transition-all hover:bg-red-500 hover:text-white">
            <Eye size={16} />
          </button>
        </div>
        
        {/* Add to cart button */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white py-2 translate-y-full opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer">
          <ShoppingCart size={16} className="mr-2" />
          <span className="text-sm font-medium">Add to Cart</span>
        </div>
      </div>

      {/* Product details */}
      <Link to={`/product/${id}`} className="block">
        <h3 className="font-medium text-gray-900 mb-1 line-clamp-1 hover:text-red-500 transition-colors">
          {name}
        </h3>
      </Link>

      <div className="flex items-center space-x-2">
        <span className="text-red-500 font-semibold">${price.toFixed(2)}</span>
        {originalPrice && (
          <span className="text-gray-400 line-through text-sm">${originalPrice.toFixed(2)}</span>
        )}
      </div>

      {/* Ratings */}
      <div className="flex items-center mt-1">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-gray-500 text-xs ml-1">({reviewCount})</span>
      </div>
    </div>
  );
};

export default ProductCard;