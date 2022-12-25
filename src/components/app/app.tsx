import { Header } from '../header/header';
import React from 'react';
import { Store } from '../Store/Srore';
import { DataBrands, DataCategory } from '../../utils/utils';
import { Footer } from '../footer/footer';

export const App = () => {
  return (
    <>
      <Header count={10} price={1000} />
      <Store category={DataCategory} brand={DataBrands} />
      <Footer />
    </>
  );
};
