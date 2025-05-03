import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Sliders, ChevronDown } from 'lucide-react';
import ProductCard from '../components/UI/ProductCard';
import { products } from '../data/products';
import { categories } from '../data/categories';

const sortOptions = [
  { label: 'Latest', value: 'latest' },
  { label: 'Price: Low to High', value: 'price_asc' },
  { label: 'Price: High to Low', value: 'price_desc' },
  { label: 'Most Popular', value: 'popular' },
];

const priceRanges = [
  { label: 'All', value: 'all' },
  { label: 'Under $100', value: '0-100' },
  { label: '$100 - $500', value: '100-500' },
  { label: '$500 - $1000', value: '500-1000' },
  { label: 'Over $1000', value: '1000-above' },
];

const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  
  const currentCategory = searchParams.get('category') || 'all';
  const currentSort = searchParams.get('sort') || 'latest';
  const currentPriceRange = searchParams.get('price') || 'all';

  const filterProducts = () => {
    let filtered = [...products];

    // Category filter
    if (currentCategory !== 'all') {
      filtered = filtered.filter(product => product.category === currentCategory);
    }

    // Price range filter
    if (currentPriceRange !== 'all') {
      const [min, max] = currentPriceRange.split('-').map(Number);
      filtered = filtered.filter(product => {
        if (max === undefined) {
          return product.price >= min;
        }
        return product.price >= min && product.price <= max;
      });
    }

    // Sort
    switch (currentSort) {
      case 'price_asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'popular':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default:
        // Latest - no need to sort as products are already in latest order
        break;
    }

    return filtered;
  };

  const filteredProducts = filterProducts();

  const updateFilters = (key: string, value: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(key, value);
    setSearchParams(newSearchParams);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-medium">Products</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">All Products</h1>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden flex items-center text-gray-600"
        >
          <Sliders size={20} className="mr-2" />
          Filters
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters - Sidebar */}
        <div className={`md:w-64 ${showFilters ? 'block' : 'hidden md:block'}`}>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="font-bold mb-4">Categories</h2>
            <div className="space-y-2">
              <button
                className={`block w-full text-left px-2 py-1 rounded ${
                  currentCategory === 'all' ? 'bg-red-500 text-white' : 'hover:bg-gray-100'
                }`}
                onClick={() => updateFilters('category', 'all')}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`block w-full text-left px-2 py-1 rounded ${
                    currentCategory === category.url.split('/')[2]
                      ? 'bg-red-500 text-white'
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => updateFilters('category', category.url.split('/')[2])}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <hr className="my-6" />

            <h2 className="font-bold mb-4">Price Range</h2>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <button
                  key={range.value}
                  className={`block w-full text-left px-2 py-1 rounded ${
                    currentPriceRange === range.value ? 'bg-red-500 text-white' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => updateFilters('price', range.value)}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Sort Dropdown */}
          <div className="flex justify-end mb-6">
            <div className="relative">
              <select
                value={currentSort}
                onChange={(e) => updateFilters('sort', e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={20}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
          </div>

          {/* Products */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  discountPercentage={
                    product.originalPrice
                      ? Math.round(
                          ((product.originalPrice - product.price) / product.originalPrice) * 100
                        )
                      : undefined
                  }
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;