import { Header } from './components/header/header';
import React from 'react';
import './global.scss';
import { createRoot } from 'react-dom/client';
import { Store } from './components/Store/Srore';
import { DataBrands, DataCategory } from './utils/utils';
import { Footer } from './components/footer/footer';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(
  <>
    <Header count={10} price={1000} />
    <Store category={DataCategory} brand={DataBrands} />
    <Footer />
  </>
);
