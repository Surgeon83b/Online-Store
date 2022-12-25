import { ProductItem } from '../types';
import data from '../Assets/products.json';

export const getCategoryCount = (data: ProductItem[], category: string): number => {
  return data.reduce((result, i) => {
    if (i.category === category) return result++;
    else return result;
  }, 0);
};

export const getBrandCount = (data: ProductItem[], brand: string): number => {
  return data.reduce((result, i) => {
    if (i.brand === brand) return result++;
    else return result;
  }, 0);
};

export const getMin = (data: ProductItem[], property: string): number => {
  let result = 0;
  return data.reduce((min, prod) => {
    result = prod[property as keyof ProductItem] as number;
    if (result < min) return result;
    return min;
  }, 0);
};

export const getMax = (data: ProductItem[], property: string): number => {
  let result = 0;
  return data.reduce((max, prod) => {
    result = prod[property as keyof ProductItem] as number;
    if (result > max) return result;
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
