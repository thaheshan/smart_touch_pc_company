import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronRight, MinusIcon, PlusIcon, Heart, ShoppingCart, ShieldCheck, Truck } from 'lucide-react';
import Button from '../components/UI/Button';

// Mock product data
const product = {
  id: 1,
  name: 'Havic HV G-92 Gamepad',
  price: 192.00,
  description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
  rating: 4.5,
  reviewCount: 150,
  inStock: true,
  colors: ['white', 'red'],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  images: [
    'https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/4195324/pexels-photo-4195324.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=600',
  ],
};

// Mock related products
const relatedProducts = [
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

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <span className="hover:text-red-500 transition-colors cursor-pointer">Account</span>
        <ChevronRight size={16} className="mx-2" />
        <span className="hover:text-red-500 transition-colors cursor-pointer">Gaming</span>
        <ChevronRight size={16} className="mx-2" />
        <span className="text-gray-800 font-medium">{product.name}</span>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square flex items-center justify-center">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name} 
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <div 
                key={index} 
                className={`aspect-square bg-gray-100 rounded overflow-hidden cursor-pointer border-2 ${selectedImage === index ? 'border-red-500' : 'border-transparent'}`}
                onClick={() => setSelectedImage(index)}
              >
                <img 
                  src={image} 
                  alt={`${product.name} - View ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          
          {/* Ratings */}
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-500">({product.reviewCount} Reviews)</span>
            <span className="text-green-500 ml-4">
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
          
          {/* Price */}
          <div className="text-2xl font-bold">${product.price.toFixed(2)}</div>
          
          {/* Description */}
          <p className="text-gray-600">{product.description}</p>
          
          <div className="border-t border-gray-200 pt-6">
            {/* Colors */}
            <div className="mb-6">
              <h3 className="text-gray-800 font-medium mb-2">Colours:</h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full ${
                      color === 'white' ? 'bg-white' : 'bg-red-500'
                    } ${
                      selectedColor === color
                        ? 'ring-2 ring-offset-1 ring-gray-400'
                        : ''
                    }`}
                    onClick={() => setSelectedColor(color)}
                  ></button>
                ))}
              </div>
            </div>
            
            {/* Sizes */}
            <div className="mb-6">
              <h3 className="text-gray-800 font-medium mb-2">Size:</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`w-10 h-8 flex items-center justify-center border ${
                      selectedSize === size
                        ? 'bg-red-500 text-white border-red-500'
                        : 'border-gray-300 text-gray-800'
                    } rounded hover:border-red-500 transition-colors`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity and Actions */}
            <div className="flex items-center space-x-4 mt-6">
              <div className="flex border border-gray-300 rounded-md">
                <button
                  className="px-3 py-2 text-gray-600 hover:text-red-500 transition-colors"
                  onClick={decreaseQuantity}
                >
                  <MinusIcon size={18} />
                </button>
                <div className="w-12 flex items-center justify-center border-l border-r border-gray-300">
                  {quantity}
                </div>
                <button
                  className="px-3 py-2 text-gray-600 hover:text-red-500 transition-colors"
                  onClick={increaseQuantity}
                >
                  <PlusIcon size={18} />
                </button>
              </div>
              
              <Button className="px-6">Buy Now</Button>
              
              <button className="w-12 h-12 border border-gray-300 rounded-md flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-colors">
                <Heart size={20} />
              </button>
            </div>
          </div>
          
          {/* Delivery Info */}
          <div className="border border-gray-200 rounded-lg p-4 mt-8">
            <div className="flex items-start space-x-3 mb-4">
              <div className="pt-1">
                <Truck size={20} className="text-gray-600" />
              </div>
              <div>
                <h4 className="font-medium">Free Delivery</h4>
                <p className="text-sm text-gray-500">Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="pt-1">
                <ShieldCheck size={20} className="text-gray-600" />
              </div>
              <div>
                <h4 className="font-medium">Return Delivery</h4>
                <p className="text-sm text-gray-500">Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;