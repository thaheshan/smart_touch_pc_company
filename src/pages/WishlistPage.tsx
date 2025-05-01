import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, X } from 'lucide-react';

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  inStock: boolean;
}

const initialWishlistItems: WishlistItem[] = [
  {
    id: 1,
    name: 'Havic HV G-92 Gamepad',
    price: 192.00,
    originalPrice: 240.00,
    image: 'https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=600',
    inStock: true,
  },
  {
    id: 2,
    name: 'AK-900 Wired Keyboard',
    price: 960.00,
    originalPrice: 1160.00,
    image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=600',
    inStock: true,
  },
  {
    id: 3,
    name: 'IPS LCD Gaming Monitor',
    price: 370.00,
    originalPrice: 400.00,
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600',
    inStock: false,
  },
  {
    id: 4,
    name: 'RGB liquid CPU Cooler',
    price: 160.00,
    originalPrice: 170.00,
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
    inStock: true,
  },
];

const WishlistPage: React.FC = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(initialWishlistItems);
  
  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-medium">Wishlist</span>
      </div>
      
      <h1 className="text-2xl font-bold mb-8">My Wishlist</h1>
      
      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="relative bg-white rounded-lg shadow-sm p-4 border border-gray-200 transition-all hover:shadow-md group">
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="absolute top-3 right-3 p-1 text-gray-400 hover:text-red-500 z-10"
              >
                <X size={20} />
              </button>
              
              <div className="relative bg-gray-100 rounded-lg overflow-hidden pt-[100%] mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-contain p-4"
                />
                
                {!item.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white font-medium">Out of Stock</span>
                  </div>
                )}
                
                {item.inStock && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white py-2 translate-y-full opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <button className="w-full flex items-center justify-center">
                      <ShoppingCart size={16} className="mr-2" />
                      <span className="text-sm font-medium">Add to Cart</span>
                    </button>
                  </div>
                )}
              </div>
              
              <Link to={`/product/${item.id}`} className="block">
                <h3 className="font-medium text-gray-900 mb-2 hover:text-red-500 transition-colors">
                  {item.name}
                </h3>
              </Link>
              
              <div className="flex items-center space-x-2">
                <span className="text-red-500 font-semibold">${item.price.toFixed(2)}</span>
                {item.originalPrice && (
                  <span className="text-gray-400 line-through text-sm">${item.originalPrice.toFixed(2)}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
          <p className="mb-8 text-gray-600">Add items that you like to your wishlist. Review them anytime and easily move them to the cart.</p>
          <Link
            to="/"
            className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors inline-block"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;