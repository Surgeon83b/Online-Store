import React, { useState } from 'react';
import { ICountChangerProps, ProductItem } from 'types';

export default function CountChanger({ product, count, number }: ICountChangerProps) {
  // const [state, setState] = useState({ count: count, stock: product.stock, total: count * product.price });
  // console.log('state: ', state);
  return (
    <>
      <div className="item-stock">Stock: {product.stock}</div>
      <div className="item-quantity">
        <div className="item-number number-down">-</div>
        <div className="item-howmany">{count}</div>
        <div className="item-number number-up">+</div>
      </div>
      <div className="item-stock">${count * product.price}</div>
    </>
  );
}
