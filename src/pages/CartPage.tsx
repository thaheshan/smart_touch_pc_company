import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import Button from '../components/UI/Button';

// Mock cart items
const initialCartItems = [
  {
    id: 1,
    name: 'LCD Monitor',
    price: 650,
    quantity: 1,
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    name: 'HI Gamepad',
    price: 550,
    quantity: 2,
    image: 'https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState('');

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const shipping = 0; // Free shipping
  const subtotal = calculateSubtotal();
  const total = subtotal + shipping;

  const applyCoupon = () => {
    // Logic to apply coupon would go here
    alert(`Coupon ${couponCode} applied`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-medium">Cart</span>
      </div>
      
      <h1 className="sr-only">Shopping Cart</h1>
      
      {cartItems.length > 0 ? (
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-8">
            <div className="border-b border-gray-200 py-4 hidden md:grid md:grid-cols-12 font-medium text-gray-600">
              <div className="md:col-span-6">Product</div>
              <div className="md:col-span-2 text-center">Price</div>
              <div className="md:col-span-2 text-center">Quantity</div>
              <div className="md:col-span-2 text-center">Subtotal</div>
            </div>
            
            {cartItems.map((item) => (
              <div key={item.id} className="py-6 border-b border-gray-200">
                <div className="md:grid md:grid-cols-12 md:gap-2 items-center">
                  {/* Product (image and name) */}
                  <div className="md:col-span-6 flex items-center">
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="mr-4 text-gray-400 hover:text-red-500 md:block"
                    >
                      <X size={20} />
                    </button>
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 mr-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-contain object-center"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-medium text-gray-800">{item.name}</span>
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="md:col-span-2 text-center mt-4 md:mt-0">
                    <span className="md:hidden font-medium text-gray-600 mr-2">Price:</span>
                    <span>${item.price.toFixed(2)}</span>
                  </div>
                  
                  {/* Quantity */}
                  <div className="md:col-span-2 flex justify-center mt-4 md:mt-0">
                    <div className="flex items-center border border-gray-300 rounded w-28">
                      <input
                        type="text"
                        className="w-full text-center py-1 border-none focus:outline-none focus:ring-0"
                        value={item.quantity}
                        readOnly
                      />
                      <div className="flex flex-col border-l border-gray-300">
                        <button
                          className="py-0.5 px-1 hover:bg-gray-100"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <ChevronUp size={16} />
                        </button>
                        <button
                          className="py-0.5 px-1 hover:bg-gray-100 border-t border-gray-300"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <ChevronDown size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtotal */}
                  <div className="md:col-span-2 text-center font-medium mt-4 md:mt-0">
                    <span className="md:hidden font-medium text-gray-600 mr-2">Subtotal:</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Return to shop / Update cart */}
            <div className="flex flex-wrap justify-between mt-6 gap-4">
              <Link 
                to="/" 
                className="px-6 py-3 border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Return To Shop
              </Link>
              <Button variant="outline">
                Update Cart
              </Button>
            </div>
          </div>
          
          {/* Cart Totals */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="p-6">
                <h2 className="text-lg font-bold mb-6">Cart Total</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span>Subtotal:</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span>Shipping:</span>
                    <span className="font-medium">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button className="w-full mt-6">
                  Process to checkout
                </Button>
              </div>
            </div>
            
            {/* Coupon Code */}
            <div className="mt-6">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="w-full border border-gray-300 rounded-l-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600 transition-colors"
                  onClick={applyCoupon}
                >
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="mb-8 text-gray-600">Looks like you haven't added anything to your cart yet.</p>
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

export default CartPage;