import React from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { About } from '../components/About/About';
import { useParams, useSearchParams } from 'react-router-dom';

export const DescriptionPage = () => {
  const { id } = useParams();
  const pID = (id as unknown) as number;
  return (
    <>
      <Header />
      <About item={pID} />
      <Footer />
    </>
  );
};
