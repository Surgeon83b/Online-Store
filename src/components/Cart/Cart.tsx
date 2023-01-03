import React, { useState, useEffect } from 'react';
import { ItemForCart } from 'types';
import CartItem from './CartItem';
import Data from '../../Assets/products.json';
import { getProductsForPage } from '../Store/helper';

export default function Cart() {
  const obj = [
    { id: 2, count: 3 },
    { id: 5, count: 2 },
    { id: 8, count: 4 },
    { id: 1, count: 1 },
    { id: 12, count: 3 },
    { id: 7, count: 2 },
  ];
  let items = [] as ItemForCart[];
  const cartItems = localStorage.getItem('cart');
  if (cartItems !== null) {
    items = JSON.parse(cartItems);
  }
  console.log(items);

  const [state, setState] = useState(items);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [products, setProducts] = useState(getProductsForPage(items, page, limit));
  const [totalPages, setTotalPages] = useState(Math.round(state.length / limit));

  const decreasePage = () => {
    if (page > 1) setPage(page - 1);
  };

  const increasePage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  useEffect(() => {
    setProducts(getProductsForPage(state, page, limit));
    setTotalPages(state.length / limit);
  }, [page, limit]);

  return (
    <>
      <div className="cart-caption">
        <span className="fw-bolder">Products In Cart</span>

        <div className="page-leafer">
          <div className="limit fw-bolder">
            LIMIT:
            <input
              type="number"
              step="1"
              value={limit}
              min="1"
              onChange={(e) => setLimit((e.target.value as unknown) as number)}
            />
          </div>
          <div className="page-number fw-bolder">
            <button type="button" className="btn btn-primary" onClick={() => decreasePage()}>
              {' '}
              {'<'}{' '}
            </button>
            <label htmlFor="page-leafer">{page}</label>
            <button type="button" className="btn btn-primary" onClick={() => increasePage()}>
              {' '}
              {'>'}{' '}
            </button>
          </div>
        </div>
      </div>
      <div className="cart-main">
        <div className="cart-items">
          {products.map((item, i) => (
            <CartItem key={i} product={item.product} count={item.count} number={item.number} />
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
