import React from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { StoreMain } from '../components/Store/Store';

export const StorePage = () => {
  return (
    <>
      <Header />
      <StoreMain />
      <Footer />
    </>
  );
};
export { StoreMain };
