import React from 'react';
import HeroBanner from '../components/Home/HeroBanner';
import FeaturedCategories from '../components/Home/FeaturedCategories';
import FlashSale from '../components/Home/FlashSale';
import BestSelling from '../components/Home/BestSelling';
import NewArrivals from '../components/Home/NewArrivals';
import FeaturedBanner from '../components/Home/FeaturedBanner';
import OurProducts from '../components/Home/OurProducts';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroBanner />
     
      <FlashSale />
       <FeaturedCategories />
      <BestSelling />
      <FeaturedBanner />
      <OurProducts />

      <NewArrivals />
    </div>
  );
};

export default HomePage;