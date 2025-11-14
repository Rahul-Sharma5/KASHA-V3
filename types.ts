
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
  title: React.ReactNode;
  subtitle: string;
  imageUrl: string;
}
