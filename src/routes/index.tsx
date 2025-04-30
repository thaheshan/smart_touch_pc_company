import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../components/Layout/MainLayout';
import HomePage from '../pages/HomePage';
import ProductDetailPage from '../pages/ProductDetailPage';
import CartPage from '../pages/CartPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import AccountPage from '../pages/AccountPage';
import WishlistPage from '../pages/WishlistPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'product/:id',
        element: <ProductDetailPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
      {
        path: 'account',
        element: <AccountPage />,
      },
      {
        path: 'wishlist',
        element: <WishlistPage />,
      },
    ],
  },
]);

const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;