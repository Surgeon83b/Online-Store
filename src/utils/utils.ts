import { ProductItem } from '../types';

export const getCategoryCount = (data: ProductItem[], category: string): number => {
  return data.reduce((res, i) => {
    if (i.category === category) return res++;
    else return res;
  }, 0);
};

export const getBrandCount = (data: ProductItem[], brand: string): number => {
  return data.reduce((res, i) => {
    if (i.brand === brand) return res++;
    else return res;
  }, 0);
};

export const getMin = (data: ProductItem[], property: string): number => {
  let res = 0;
  return data.reduce((min, prod) => {
    res = prod[property as keyof ProductItem] as number;
    if (res < min) return res;
    return min;
  }, 0);
};

export const getMax = (data: ProductItem[], property: string): number => {
  let res = 0;
  return data.reduce((max, prod) => {
    res = prod[property as keyof ProductItem] as number;
    if (res > max) return res;
    return max;
  }, 0);
};

export const isInputInProduct = (input: string, product: ProductItem) => {
  return (
    product.title.includes(input) ||
    product.description.includes(input) ||
    product.brand.includes(input) ||
    product.category.includes(input)
  );
};
