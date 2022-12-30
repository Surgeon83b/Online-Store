import { ProductItem } from '../../types/index';
import data from '../../Assets/products.json';

export const getMax = (data: ProductItem[], property: string): number => {
  return data.reduce((max: number, item: ProductItem) => {
    const current = item[property] as number;
    if (current > max) max = current;
    return max;
  }, 0);
};

export const getCategoryCount = (data: ProductItem[], category: string): number => {
  return data.reduce((result, item) => {
    if (item.category === category) result++;
    return result;
  }, 0 as number);
};

export const getBrandCount = (data: ProductItem[], brand: string): number => {
  return data.reduce((result, item: ProductItem) => {
    if (item.brand === brand) result++;
    return result;
  }, 0);
};
export const getMin = (data: ProductItem[], property: string): number => {
  return data.reduce((min: number, item: ProductItem) => {
    const current = (item as ProductItem)[property as keyof ProductItem] as number;
    if (current < min) min = current;
    return min;
  }, 1999);
};

export const DataCategory = data.products.reduce(
  (result: string[], x) => {
    if (result.indexOf(x.category) === -1) result.push(x.category);
    return result;
  },
  [data.products[0].category]
);

export const DataBrands = data.products.reduce(
  (result: string[], x) => {
    if (result.indexOf(x.brand) === -1) result.push(x.brand);
    return result;
  },
  [data.products[0].brand]
);