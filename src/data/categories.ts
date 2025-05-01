import { Monitor, Laptop, Headphones, GamepadIcon, Smartphone, Camera, Speaker, Watch } from 'lucide-react';

export interface Category {
  id: number;
  name: string;
  icon: JSX.Element;
  url: string;
  featured?: boolean;
}

export const categories = [
  { id: 1, name: 'Laptops', icon: <Laptop size={32} />, url: '/category/laptops', featured: true },
  { id: 2, name: 'Monitors', icon: <Monitor size={32} />, url: '/category/monitors', featured: true },
  { id: 3, name: 'Headphones', icon: <Headphones size={32} />, url: '/category/headphones', featured: true },
  { id: 4, name: 'Gaming', icon: <GamepadIcon size={32} />, url: '/category/gaming', featured: true },
  { id: 5, name: 'Smartphones', icon: <Smartphone size={32} />, url: '/category/smartphones', featured: true },
  { id: 6, name: 'Cameras', icon: <Camera size={32} />, url: '/category/cameras', featured: true },
  { id: 7, name: 'Speakers', icon: <Speaker size={32} />, url: '/category/speakers', featured: true },
  { id: 8, name: 'Smartwatches', icon: <Watch size={32} />, url: '/category/smartwatches', featured: true },
];

export default categories;