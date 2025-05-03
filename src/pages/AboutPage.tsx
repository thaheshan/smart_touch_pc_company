import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-medium">About Us</span>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Exclusive</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <img 
              src="https://images.pexels.com/photos/7679725/pexels-photo-7679725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Our Store" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Our Story</h2>
            <p className="text-gray-600">
              Founded in 2022, Exclusive has grown from a small startup to one of the leading
              electronics retailers in the region. Our mission is to provide customers with
              the latest technology at competitive prices while delivering exceptional service.
            </p>
            <p className="text-gray-600">
              We carefully curate our product selection to ensure we offer only the highest
              quality items from trusted brands. Our team of experts stays up-to-date with
              the latest tech trends to bring you innovative products that enhance your life.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide accessible, cutting-edge technology solutions that empower our
              customers to achieve more in their daily lives.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become the most trusted destination for technology products and create
              lasting relationships with our customers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Our Values</h3>
            <p className="text-gray-600">
              Quality, Innovation, Customer Service, Integrity, and Continuous Improvement
              guide everything we do.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">10K+</div>
              <div className="text-gray-600">Products Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">100+</div>
              <div className="text-gray-600">Brands</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Shop?</h2>
          <Link 
            to="/products" 
            className="inline-block bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition-colors"
          >
            Browse Our Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;