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
export type Hendler = (e: React.MouseEvent<HTMLInputElement>) => void;
export function Store() {
  const [category, setCategory] = useState(new Set() as Set<string>);
  const [brands, setBrands] = useState(new Set() as Set<string>);
  const [serch, setSerch] = useState('');
  const [ProductItems, setProductItem] = useState(Data.products as ProductItem[]);
  const [range, setRange] = useState({ price: [0, 100], stock: [0, 990] });
  const [rangeValue, setRangeValue] = useState({
    price: [0, 100],
    stock: [0, 990],
  } as { price: number[] | number; stock: number[] | number });
  return (
    <main className="comtainer">
      <div style={{ height: '300px', width: '300px' }}>
        {brands}
        <p>---</p>
        {category}
        <p>---</p>
        {serch}
        <p>----</p>
        {range.price}
        <p>-----</p>
        {rangeValue.price}
        <p>====</p>
        {rangeValue.stock}
      </div>
      <Bar
        rangeValue={rangeValue}
        setRangeValue={setRangeValue}
        range={range}
        serch={serch}
        setSerch={setSerch}
        switchCategory={(e: React.MouseEvent<HTMLInputElement>) => {
          if (category.has(e.currentTarget.id)) {
            category.delete(e.currentTarget.id);
            setCategory(new Set(category));
          } else {
            category.add(e.currentTarget.id);
            setCategory(new Set(category));
          }
        }}
        brands={brands}
        category={category}
        switchBrands={(e: React.MouseEvent<HTMLInputElement>) => {
          if (brands.has(e.currentTarget.id)) {
            brands.delete(e.currentTarget.id);
            setBrands(new Set(brands));
          } else {
            brands.add(e.currentTarget.id);
            setBrands(new Set(brands));
          }
        }}
        ProductItems={ProductItems}
        //drop={() => {
        //  setState({
        //    search: 'сброшено',
        //    price: {
        //      max: 1000,
        //      min: 0,
        //    },
        //    stock: {
        //      max: 10,
        //      min: 0,
        //    },
        //    ProductItem: Data.products,
        //  });
        //}}
      />
      <ProdGrid products={ProductItems} />
    </main>
  );
}
