import React from 'react';
import { StoreMain } from '../Pages/StorePage';
import { DescriptionPage } from '../Pages/DescriptionPage';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/about/:id" element={<DescriptionPage />} />
      <Route path="/" element={<StoreMain />} />
    </Routes>
  );
};
