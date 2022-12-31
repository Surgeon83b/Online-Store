import React from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { About } from '../components/About/About';
import { useSearchParams } from 'react-router-dom';

export const DescriptionPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = (searchParams.get('id') as unknown) as number;
  return (
    <>
      <Header />
      <About item={id} />
      <Footer />
    </>
  );
};
