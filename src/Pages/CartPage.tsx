import Cart from '../components/Cart/Cart';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';

import React, { useState } from 'react';
import { IHeaderProps } from 'types';

function CartPage(total: IHeaderProps) {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  return (
    <>
      <Header count={total.count} price={total.price} />
      <Cart get={total.get} />
      <Footer />
    </>
  );
}

export default CartPage;
