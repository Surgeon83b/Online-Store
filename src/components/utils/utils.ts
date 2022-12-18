import { ProductItem } from '../types';

export const getCategoryCount = (data: ProductItem[], category: string): number => {
  return data.reduce((res, i) => {
    if (i.category === category) return res++;
    else return res;
  }, 0);
};
