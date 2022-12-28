import React, { useState } from 'react';
import { Bar } from './bar/leftBar';
import { ProdGrid } from './grid/products';
import Data from '../../Assets/products.json';
import { ProductItem } from 'types';

export interface CheckBox {
  checkBrands: Set<string>;
  checkCategories: Set<string>;
}
export interface State {
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
  const [checkBox, setCheckBox] = useState({ checkBrands: new Set(), checkCategories: new Set() } as CheckBox);
  //const [query, setQuery] = useState(getFilters());
  const [state, setState] = useState({
    search: 'mmmmmm',
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
  console.log(checkBox);
  return (
    <main className="comtainer">
      {/*<div style={{ height: '300px', width: '300px' }}>
        {checkBox.checkBrands.size}
        {state.search}
      </div>*/}
      <Bar
        setCheckBox={setCheckBox}
        checkBox={checkBox}
        options={state}
        setState={setState}
        drop={() => {
          setState({
            search: 'сброшено',
            price: {
              max: 1000,
              min: 0,
            },
            stock: {
              max: 10,
              min: 0,
            },
            ProductItem: Data.products,
          });
        }}
      />
      <ProdGrid products={state.ProductItem} />
    </main>
  );
}
