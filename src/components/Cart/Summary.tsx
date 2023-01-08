import React, { useState } from 'react';
import { ItemForCart } from '../../types/index';
import Data from '../../Assets/products.json';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export const Semmery = (props: {
  totalProducts: number;
  state: ItemForCart[];
  setPopUP: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [promo, setPromo] = useState(false);
  const [promoKey, setPromoKey] = useState('');
  const checkPromo = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    if (event.currentTarget.value === 'RSS') {
      setPromoKey('RSS -10%');
      setPromo(true);
    } else {
      setPromo(false);
    }
  };
  const [activKeys, setActivKeys] = useState({ keys: [] as string[] });

  const keysBar = activKeys.keys.map((key, index) => (
    <Button
      color="warning"
      key={index}
      onClick={() => {
        const currentKeys = activKeys.keys;
        currentKeys.pop();
        setActivKeys({ ...activKeys, keys: currentKeys });
      }}
    >
      {key}
    </Button>
  ));
  const shoPromo = promo ? 'block' : 'none';
  const ShoVVkeysBar = activKeys.keys.length > 0 ? 'block' : 'none';
  return (
    <div className="summary">
      <span className="fw-bolder">Summary</span>
      <div>Products: {props.totalProducts}</div>
      <div>
        Total:{' '}
        {props.state.reduce(
          (sum, item) => sum + item.count * Data.products.filter((prod) => prod.id === item.id)[0].price,
          0
        )}
      </div>
      <div
        style={{
          display: ShoVVkeysBar,
        }}
      >
        Total:{' '}
        {Math.ceil(
          props.state.reduce(
            (sum, item) => sum + item.count * Data.products.filter((prod) => prod.id === item.id)[0].price,
            0
          ) *
            (1 - 0.1 * activKeys.keys.length)
        )}
        <div>{keysBar}</div>
      </div>
      <input onChange={(e) => checkPromo(e)} type="text" className="promocode" placeholder="Enter promo code - 'RSS'" />
      <div
        style={{
          display: shoPromo,
        }}
      >
        <Button
          onClick={() => {
            const key = activKeys.keys;
            key.push(promoKey);
            setActivKeys({ ...activKeys, keys: key });
          }}
        >
          {' '}
          add promo key {promoKey}
        </Button>
      </div>
      <Link to="/cart/#buy">
        <button type="button" className="btn btn-success" onClick={() => props.setPopUP(true)}>
          BUY NOW
        </button>
      </Link>
    </div>
  );
};
