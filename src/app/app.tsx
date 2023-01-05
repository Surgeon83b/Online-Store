import React from 'react';
import { StorePage } from '../Pages/StorePage';
import { DescriptionPage } from '../Pages/DescriptionPage';
import { Route, Routes } from 'react-router-dom';
import CartPage from '../Pages/CartPage';

export const App = () => {
  return (
    <Routes>
      <Route path="Online-Store/about/:id" element={<DescriptionPage />} />
      <Route path="Online-Store/" element={<StorePage />} />
      <Route path="Online-Store/cart" element={<CartPage />} />
    </Routes>
  );
};
