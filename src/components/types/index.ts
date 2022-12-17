export type Tag = 'div' | 'section' | 'aside' | 'header' | 'footer' | 'main';
export type Categories = string[];
export type Range = [number, number];
export type ProductItem = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};
