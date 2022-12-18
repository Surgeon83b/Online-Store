import ItemDescription from '../sections/description/description';
import './global.scss';
import LeftBar from '../sections/leftBar';
//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
//import * as bootstrap from 'bootstrap';
import data from '../../products.json';
import Component from '../sections/component';
import { ProductItem, Range, Options, CountInCategories, CountInBrands, CountInFilters } from '../types';
import { getCategoryCount } from '../utils/utils';

const main = new Component(null, [], 'main');

const products = data.products;

const cats: string[] = products.reduce((res: string[], x) => {
  if (res.indexOf(x.category) === -1) res.push(x.category);
  return res;
}, [] as string[]);

console.log(cats);

const brands: string[] = products.reduce((res: string[], x) => {
  if (res.indexOf(x.brand) === -1) res.push(x.brand);
  return res;
}, [] as string[]);

const price: Range = [1, 100];
const stock: Range = [0, 0];

const aside = new LeftBar(main, [], 'aside', cats, brands, price, stock);
const asideHtml = document.querySelector('aside');
asideHtml!.innerHTML = aside.render();

const x = new ItemDescription(main, [], 'div', 1);
console.log(x.render());

class Products {
  data: ProductItem[];
  private filteredData: ProductItem[] = [];
  public countInCategories: CountInCategories = [];
  public countInBrands: CountInBrands = [];
  private countInFilters: CountInFilters = {} as CountInFilters;
  constructor(data: ProductItem[]) {
    this.data = data;
  }

  filter(options: Options): ProductItem[] {
    return this.data.filter(
      (item) =>
        options.categories.indexOf(item.category) !== -1 &&
        options.brands.indexOf(item.brand) !== -1 &&
        options.price[0] <= item.price &&
        item.price <= options.price[1] &&
        options.stock[0] <= item.stock &&
        item.stock <= options.stock[1]
    );
  }

  setFilteredData(options: Options): void {
    this.filteredData = this.filter(options);
  }
  getFilteredData(): ProductItem[] {
    return this.filteredData;
  }
  setCountInCategories(): void {
    this.countInCategories = cats.reduce((res, cat) => {
      res.push({
        category: cat,
        count: [getCategoryCount(this.filteredData, cat), getCategoryCount(this.data, cat)],
      });
      return res;
    }, [] as CountInCategories);
  }
}

const allData = new Products(products);
