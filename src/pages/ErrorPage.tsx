import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-red-500">404</h1>
        <h2 className="text-4xl font-bold text-gray-800 mt-8 mb-4">Oops! Page not found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Link 
          to="/home"
          className="inline-block bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition-colors"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;