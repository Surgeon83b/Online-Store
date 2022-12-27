import React, { useState } from 'react';
import { Bar } from './bar/leftBar';
import { ProdGrid } from './grid/products';
import Data from '../../Assets/products.json';
import { ProductItem } from 'types';
export interface State {
  checkBrands: string[];
  checkCategories: string[];
  search: string;
  price: {
    max: number;
    min: number;
  };
  stock: {
    max: number;
    min: number;
  };
  ProductItem: ProductItem[];
}
export function Store() {
  const [state, setState] = useState({
    checkBrands: [],
    checkCategories: [],
    search: '',
    price: {
      max: 1000,
      min: 0,
    },
    stock: {
      max: 1000,
      min: 0,
    },
    ProductItem: Data.products,
  });
  console.log(state.ProductItem);
  return (
    <main className="comtainer">
      <Bar items={state.ProductItem} />
      <ProdGrid products={state.ProductItem} />
    </main>
  );
}
