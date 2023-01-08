import Cart from '../components/Cart/Cart';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';

import React from 'react';

function CartPage() {
  return (
    <>
      <div className="darkness">
        <Header />
        <Cart />
        <Footer />
      </div>
    </>
  );
}

export default CartPage;
