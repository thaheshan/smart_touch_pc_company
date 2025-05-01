// Mock product data for the application
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  rating: number;
  reviewCount: number;
  discountPercentage?: number;
  isNew?: boolean;
  category: string;
  description: string;
  inStock: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'HAVIT HV-G92 Gamepad',
    price: 120,
    originalPrice: 160,
    image: 'https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/4195324/pexels-photo-4195324.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    rating: 4.8,
    reviewCount: 88,
    discountPercentage: 25,
    category: 'gaming',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: 'AK-900 Wired Keyboard',
    price: 960,
    originalPrice: 1160,
    image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/4792733/pexels-photo-4792733.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    rating: 4.7,
    reviewCount: 75,
    discountPercentage: 35,
    category: 'gaming',
    description: 'Mechanical gaming keyboard with RGB backlight, N-key rollover, and programmable keys. Perfect for gamers and professional typists.',
    inStock: true,
  },
  {
    id: 3,
    name: 'IPS LCD Gaming Monitor',
    price: 370,
    originalPrice: 400,
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/135940/pexels-photo-135940.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/258173/pexels-photo-258173.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    rating: 4.9,
    reviewCount: 99,
    discountPercentage: 30,
    category: 'monitors',
    description: '27-inch IPS LCD Gaming Monitor with 144Hz refresh rate, 1ms response time, and HDR support. Perfect for competitive gaming and content creation.',
    inStock: true,
    featured: true,
  },
  {
    id: 4,
    name: 'RGB liquid CPU Cooler',
    price: 160,
    originalPrice: 170,
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3520494/pexels-photo-3520494.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    rating: 4.5,
    reviewCount: 65,
    discountPercentage: 40,
    category: 'accessories',
    description: 'High-performance liquid CPU cooler with RGB lighting, efficient heat dissipation, and quiet operation. Compatible with most modern Intel and AMD sockets.',
    inStock: true,
  },
  {
    id: 5,
    name: 'Samsung Galaxy S22 Ultra',
    price: 999,
    originalPrice: 1199,
    image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    rating: 4.8,
    reviewCount: 120,
    discountPercentage: 15,
    category: 'smartphones',
    description: 'Samsung Galaxy S22 Ultra with 108MP camera, Dynamic AMOLED 2X display, and S Pen support. The ultimate smartphone experience.',
    inStock: true,
    isNew: true,
  },
  {
    id: 6,
    name: 'MacBook Pro M2',
    price: 1899,
    originalPrice: 1999,
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/5699956/pexels-photo-5699956.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    rating: 4.9,
    reviewCount: 95,
    discountPercentage: 5,
    category: 'laptops',
    description: 'Apple MacBook Pro with M2 chip, 16-inch Liquid Retina XDR display, up to 32GB unified memory, and up to 24 hours of battery life.',
    inStock: true,
    featured: true,
  },
  {
    id: 7,
    name: 'Sony WH-1000XM5 Headphones',
    price: 349,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    rating: 4.7,
    reviewCount: 87,
    discountPercentage: 12,
    category: 'audio',
    description: 'Sony WH-1000XM5 wireless noise-canceling headphones with industry-leading noise cancellation, exceptional sound quality, and up to 30 hours of battery life.',
    inStock: true,
  },
  {
    id: 8,
    name: 'DJI Mini 3 Pro Drone',
    price: 759,
    originalPrice: 799,
    image: 'https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1440403/pexels-photo-1440403.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    rating: 4.6,
    reviewCount: 72,
    discountPercentage: 5,
    category: 'cameras',
    description: 'DJI Mini 3 Pro drone with 4K/60fps video, 48MP photos, 34-minute flight time, and intelligent features in a compact, sub-249g design.',
    inStock: true,
    isNew: true,
  },
  {
    id: 9,
    name: 'Apple Watch Series 8',
    price: 399,
    originalPrice: 429,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    rating: 4.8,
    reviewCount: 110,
    discountPercentage: 7,
    category: 'smartwatches',
    description: 'Apple Watch Series 8 with Always-On Retina display, advanced health sensors, crash detection, and water resistance up to 50 meters.',
    inStock: true,
  },
  {
    id: 10,
    name: 'PlayStation 5 Console',
    price: 499,
    originalPrice: 549,
    image: 'https://images.pexels.com/photos/10887048/pexels-photo-10887048.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/10887048/pexels-photo-10887048.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/207924/pexels-photo-207924.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    rating: 4.9,
    reviewCount: 250,
    discountPercentage: 9,
    category: 'gaming',
    description: 'PlayStation 5 console with ultra-high-speed SSD, haptic feedback, adaptive triggers, and ray tracing for an immersive gaming experience.',
    inStock: false,
    featured: true,
  },
];

export default products;