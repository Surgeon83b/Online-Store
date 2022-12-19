import { ProductItem } from '../types';
import data from '../Assets/products.json';

export const DataCategory = data.products.reduce(
  (res: string[], x) => {
    if (res.indexOf(x.category) === -1) res.push(x.category);
    return res;
  },
  [data.products[0].category] as string[]
);
export const DataBrands = data.products.reduce(
  (res: string[], x) => {
    if (res.indexOf(x.brand) === -1) res.push(x.brand);
    return res;
  },
  [data.products[0].brand]
);
