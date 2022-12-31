import React from 'react';
import { StoreMain } from '../Pages/StorePage';
import { DescriptionPage } from '../Pages/DescriptionPage';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StoreMain />} />
      <Route path="/about" element={<DescriptionPage />} />
    </Routes>
  );
};
