import React from 'react';
import ProductCard from '../UI/ProductCard';

const products = [
  {
    id: 5,
    name: 'Samsung Galaxy S22 Ultra',
    price: 999,
    originalPrice: 1199,
    image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.8,
    reviewCount: 120,
  },
  {
    id: 6,
    name: 'MacBook Pro M2',
    price: 1899,
    originalPrice: 1999,
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.9,
    reviewCount: 95,
  },
  {
    id: 7,
    name: 'Sony WH-1000XM5 Headphones',
    price: 349,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.7,
    reviewCount: 87,
  },
  {
    id: 8,
    name: 'DJI Mini 3 Pro Drone',
    price: 759,
    originalPrice: 799,
    image: 'https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.6,
    reviewCount: 72,
  },
];

const products_2 = [
  {
    id: 5,
    name: 'Samsung Galaxy S22 Ultra',
    price: 999,
    originalPrice: 1199,
    image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.8,
    reviewCount: 120,
  },
  {
    id: 6,
    name: 'MacBook Pro M2',
    price: 1899,
    originalPrice: 1999,
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.9,
    reviewCount: 95,
  },
  {
    id: 7,
    name: 'Sony WH-1000XM5 Headphones',
    price: 349,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.7,
    reviewCount: 87,
  },
  {
    id: 8,
    name: 'DJI Mini 3 Pro Drone',
    price: 759,
    originalPrice: 799,
    image: 'https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.6,
    reviewCount: 72,
  },
];

const OurProducts: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <div className="h-10 w-5 bg-red-500 rounded mr-3"></div>
          <h2 className="text-2xl font-bold">Explore Our Products</h2>
        </div>
            <div className="flex justify-center mt-8">
        <button className="mr-5 px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
          View All Products
        </button>
      </div>
   
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            originalPrice={product.originalPrice}
            image={product.image}
            rating={product.rating}
            reviewCount={product.reviewCount}
          />
        ))}
         {products_2.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            originalPrice={product.originalPrice}
            image={product.image}
            rating={product.rating}
            reviewCount={product.reviewCount}
          />
        ))}
      </div>
      
  
    </div>
  );
};

export default OurProducts;