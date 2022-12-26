import React from 'react';
import { Bar, IBarProps } from './bar/leftBar';
import { Products } from './products/products';
import Data from '../../Assets/products.json';
export function Store(props: IBarProps) {
  return (
    <main className="comtainer">
      <Bar category={props.category} brand={props.brand} />
      <Products products={Data.products} />
    </main>
  );
}
