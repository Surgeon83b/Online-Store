import React from 'react';
import { Bar, IBarProps } from './bar/leftBar';
import { ProdGrid } from './grid/products';
import Data from '../../Assets/products.json';
export function Store(props: IBarProps) {
  return (
    <main className="comtainer">
      <Bar category={props.category} brand={props.brand} />
      <ProdGrid produrcts={Data.products} />
    </main>
  );
}
