export type Tag = 'div' | 'section' | 'aside' | 'header' | 'footer' | 'main';
export type Categories = string[];
export type Brands = string[];
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
export type Options = {
  categories: Categories;
  brands: Brands;
  price: Range;
  stock: Range;
};
export type FilteredNumbers = {
  categories: Range[];
  brands: Range[];
};

export type CountInCategories = {
  category: string;
  count: Range;
}[];

export type CountInBrands = {
  brand: string;
  count: Range;
}[];

export type CountInFilters = {
  categories: CountInCategories;
  brands: CountInBrands;
};

export type Borders<T> = {
  actual: T;
  total: T;
};

export type MinOrMax = 'min' | 'max';

export type DataForRender = {
  products: ProductItem[];
  categories: CountInCategories;
  brands: CountInBrands;
  price: Range;
  stock: Range;
};
