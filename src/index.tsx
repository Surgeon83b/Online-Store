import { Header } from './components/header/header';
import React from 'react';
import './global.scss';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<Header count={10} price={1000} />);
