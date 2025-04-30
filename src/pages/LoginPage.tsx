import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
    console.log('Login with:', email, password);
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img 
            src="https://images.pexels.com/photos/230743/pexels-photo-230743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Login" 
            className="w-full h-auto md:h-[600px] object-cover rounded-lg"
          />
        </div>
        
        <div className="md:w-1/2 md:pl-12">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-8">Log in to Exclusive</h1>
            <p className="text-gray-600 mb-8">Enter your details below</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  placeholder="Email or Phone Number"
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-red-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-red-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className="flex justify-between items-center">
                <Button type="submit">
                  Log In
                </Button>
                
                <Link to="/forgot-password" className="text-red-500 hover:underline">
                  Forget Password?
                </Link>
              </div>
            </form>
            
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link to="/signup" className="text-red-500 hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;