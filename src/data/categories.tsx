import { Monitor, Laptop, Headphones, GamepadIcon, Smartphone, Camera, Speaker, Watch } from 'lucide-react';

export interface Category {
  id: number;
  name: string;
  icon: JSX.Element;
  url: string;
  featured?: boolean;
  description?: string;
}

export const categories = [
  { 
    id: 1, 
    name: 'Laptops', 
    icon: <Laptop size={32} />, 
    url: '/category/laptops', 
    featured: true,
    description: 'High-performance laptops for work and gaming'
  },
  { 
    id: 2, 
    name: 'Monitors', 
    icon: <Monitor size={32} />, 
    url: '/category/monitors', 
    featured: true,
    description: 'Professional and gaming monitors'
  },
  { 
    id: 3, 
    name: 'Headphones', 
    icon: <Headphones size={32} />, 
    url: '/category/headphones', 
    featured: true,
    description: 'Premium audio experience'
  },
  { 
    id: 4, 
    name: 'Gaming', 
    icon: <GamepadIcon size={32} />, 
    url: '/category/gaming', 
    featured: true,
    description: 'Gaming accessories and consoles'
  },
  { 
    id: 5, 
    name: 'Smartphones', 
    icon: <Smartphone size={32} />, 
    url: '/category/smartphones', 
    featured: true,
    description: 'Latest smartphones and accessories'
  },
  { 
    id: 6, 
    name: 'Cameras', 
    icon: <Camera size={32} />, 
    url: '/category/cameras', 
    featured: true,
    description: 'Digital cameras and photography gear'
  },
  { 
    id: 7, 
    name: 'Speakers', 
    icon: <Speaker size={32} />, 
    url: '/category/speakers', 
    featured: true,
    description: 'Home audio and portable speakers'
  },
  { 
    id: 8, 
    name: 'Smartwatches', 
    icon: <Watch size={32} />, 
    url: '/category/smartwatches', 
    featured: true,
    description: 'Smart wearables and fitness trackers'
  },
];

export default categories;