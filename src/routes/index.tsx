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
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import FaqPage from '../pages/FaqPage';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';
import TermsPage from '../pages/TermsPage';
import ErrorPage from '../pages/ErrorPage';
import ProductsPage from '../pages/ProductsPage';
import CategoryPage from '../pages/CategoryPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'category/:categoryId',
        element: <CategoryPage />,
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
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'faq',
        element: <FaqPage />,
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicyPage />,
      },
      {
        path: 'terms',
        element: <TermsPage />,
      },
    ],
  },
]);

const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;