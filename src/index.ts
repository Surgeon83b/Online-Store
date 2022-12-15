import './global.scss';
import LeftBar from './components/sections/leftBar';
//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
//import * as bootstrap from 'bootstrap';
import data from './products.json';
import Component from './components/sections/component';

let main = new Component(null, [], 'main');
 
let products = data.products;
let cats = products.reduce((res: string[], x) => {
  if (!(x.category in res)) res.push(x.category);
  return res;
}, []);


let aside = new LeftBar(main, [], 'aside', cats, brands, price, stock);
