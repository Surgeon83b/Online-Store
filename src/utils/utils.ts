import { ProductItem } from '../types';
import data from '../Assets/products.json';

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

export const DataCategory = data.products.reduce((res: string[], x) => {
  if (res.indexOf(x.category) === -1) res.push(x.category);
  return res;
}, [] as string[]);
export const DataBrands = data.products.reduce((res: string[], x) => {
  if (res.indexOf(x.brand) === -1) res.push(x.brand);
  return res;
}, [] as string[]);
