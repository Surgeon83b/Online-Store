import ItemDescription from './components/description/description';
import './global.scss';
import LeftBar from './components/Store/leftBar';
//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
//import * as bootstrap from 'bootstrap';
import data from './products.json';
import Component from './components/Store/component';
import { Range } from './types';

const main = new Component(null, [], 'main');

const products = data.products;

const cats = products.reduce((res: string[], x) => {
  if (res.indexOf(x.category) === -1) res.push(x.category);
  return res;
}, [] as string[]);

console.log(cats);

const brands: string[] = [];
const price: Range = [1, 100];
const stock: Range = [0, 0];

const aside = new LeftBar(main, [], 'aside', cats, brands, price, stock);
const asideHtml = document.querySelector('aside');
asideHtml!.innerHTML = aside.render();

const x = new ItemDescription(main, [], 'div', 1);
console.log(x.render());
