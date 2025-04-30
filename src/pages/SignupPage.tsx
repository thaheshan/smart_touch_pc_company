import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';

const SignupPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic
    console.log('Signup with:', name, email, password);
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row-reverse md:items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img 
            src="https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Sign Up" 
            className="w-full h-auto md:h-[600px] object-cover rounded-lg"
          />
        </div>
        
        <div className="md:w-1/2 md:pr-12">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-8">Create an Account</h1>
            <p className="text-gray-600 mb-8">Enter your details below</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-red-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
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
              
              <div className="pt-4">
                <Button type="submit" fullWidth>
                  Create Account
                </Button>
              </div>
              
              <div className="flex items-center justify-center space-x-4 pt-2">
                <button type="button" className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                    alt="Google" 
                    className="w-5 h-5 mr-2"
                  />
                  Sign up with Google
                </button>
              </div>
            </form>
            
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-red-500 hover:underline">
                  Log In
                </Link>
              </p>
            </div>
            
            <div className="text-center mt-4 text-sm text-gray-500">
              <p>
                By signing up, you agree to our <a href="#" className="text-red-500 hover:underline">Terms of Service</a> and <a href="#" className="text-red-500 hover:underline">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;