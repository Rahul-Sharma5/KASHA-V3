
export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  showcaseImages: string[];
  originalPrice: number;
  discountedPrice: number;
}

export interface PortfolioItem {
  id: number;
  category: 'Weddings' | 'Corporate' | 'Concerts' | 'Sports' | 'Activations';
  imageUrl: string;
  title: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  event: string;
}

export interface HeroSlide {
  // Fix: Changed title from React.ReactNode to string to resolve the "Cannot find namespace 'React'" error.
  // This aligns with the data structure in `constants.ts` where titles are strings with special formatting,
  // which is handled by a custom rendering function in `Home.tsx`.
  title: string;
  subtitle: string;
  imageUrl: string;
}