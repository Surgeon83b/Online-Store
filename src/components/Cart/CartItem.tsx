import React from 'react';
import { ItemForCart } from 'types';
import Data from '../../Assets/products.json';

export default function CartItem(props: ItemForCart) {
  const product = Data.products.filter((prod) => prod.id === props.id)[0];
  return (
    <div className="cart-item">
      <div className="item-number">{props.number}</div>
      <div className="item-info">
        <div className="item-image" style={{ backgroundImage: `url(${product.thumbnail})` }}></div>
        <div className="item-description">
          <h5 className="item-name fw-bolder">{product.title}</h5>
          <div className="item-name">{product.description}</div>
          <div className="item-params">
            <div>Rating: {product.rating}</div>
            <div>Discount: {product.discountPercentage}</div>
          </div>
        </div>
        <div className="item-count">
          <div className="item-stock">Stock: {product.stock}</div>
          <div className="item-quantity">
            <div className="item-number">+</div>
            <div className="item-howmany">{props.count}</div>
            <div className="item-number">-</div>
          </div>
          <div className="item-stock">${product.price * props.count}</div>
        </div>
      </div>
    </div>
  );
}
