import React, { useState } from 'react';
import { ItemForCart } from 'types';
import CartItem from './CartItem';
import Data from '../../Assets/products.json';

export default function Cart() {
  const obj = [
    { id: 2, count: 3 },
    { id: 5, count: 2 },
    { id: 8, count: 4 },
  ];
  localStorage.setItem('cart', JSON.stringify(obj));
  let items = [] as ItemForCart[];
  const cartItems = localStorage.getItem('cart');
  if (cartItems !== null) {
    items = JSON.parse(cartItems);
  }
  console.log(items);

  const [state, setState] = useState(items);

  return (
    <>
      <div className="cart-caption">
        <span className="fw-bolder">Products In Cart</span>

        <div className="page-leafer">
          <div className="limit fw-bolder">
            LIMIT:
            <input type="number" value={3} min="1" />
          </div>
          <div className="page-number fw-bolder">
            <button type="button" className="btn btn-primary">
              {' '}
              {'<'}{' '}
            </button>
            <label htmlFor="page-leafer">1</label>
            <button type="button" className="btn btn-primary">
              {' '}
              {'>'}{' '}
            </button>
          </div>
        </div>
      </div>
      <div className="cart-main">
        <div className="cart-items">
          {state.map((item, i) => (
            <CartItem id={item.id} count={item.count} number={i + 1} />
          ))}
        </div>
        <div className="summary">
          <span className="fw-bolder">Summary</span>
          <div>Products: {state.reduce((sum, item) => sum + item.count, 0)}</div>
          <div>
            Total:{' '}
            {state.reduce(
              (sum, item) => sum + item.count * Data.products.filter((prod) => prod.id === item.id)[0].price,
              0
            )}
          </div>
          <input type="text" className="promocode" placeholder="Enter promo code" />
          <button type="button" className="btn btn-success">
            BUY NOW
          </button>
        </div>
      </div>
    </>
  );
}
