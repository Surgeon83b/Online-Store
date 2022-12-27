import { Header } from '../header/header';
import React from 'react';
import { Store } from '../Store/Store';
import { Footer } from '../footer/footer';
//import Data from '../../Assets/products.json';

export const App = () => {
  return (
    <>
      <Header count={10} price={1000} />
      <Store />
      <Footer />
    </>
  );
};
