import './global.scss';
import LeftBar from '../components/Store/leftBar';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import data from '../Assets/products.json';
import Component from '../components/kostya/component';
import { ProductItem, Range, Options, CountInCategories, CountInBrands, CountInFilters, Borders } from '../types';
import { getBrandCount, getCategoryCount, getMax, getMin } from '../utils/utils';

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

/*const aside = new LeftBar(main, [], 'aside', cats, brands, price, stock);
const asideHtml = document.querySelector('aside');
asideHtml!.innerHTML = aside.render();*/

class Products {
  data: ProductItem[];
  private filteredData: ProductItem[] = [];
  public countInCategories: CountInCategories = [];
  public countInBrands: CountInBrands = [];
  private countInFilters: CountInFilters = {} as CountInFilters;
  priceBorders: Borders<Range> = {} as Borders<Range>;
  stockBorders: Borders<Range> = {} as Borders<Range>;

  constructor(data: ProductItem[]) {
    this.data = data;
    this.setPriceBorders();
    this.setStockBorders();
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
  setCountInFilters(): void {
    this.countInFilters = {
      categories: cats.reduce((res, cat) => {
        res.push({
          category: cat,
          count: [getCategoryCount(this.filteredData, cat), getCategoryCount(this.data, cat)],
        });
        return res;
      }, [] as CountInCategories),
      brands: brands.reduce((res, brand) => {
        res.push({
          brand: brand,
          count: [getBrandCount(this.filteredData, brand), getBrandCount(this.data, brand)],
        });
        return res;
      }, [] as CountInBrands),
    };
  }
  setPriceBorders(): void {
    this.priceBorders = {
      actual: [getMin(this.filteredData, 'price'), getMax(this.filteredData, 'price')],
      total: [getMin(this.data, 'price'), getMax(this.data, 'price')],
    };
  }
  setStockBorders(): void {
    this.stockBorders = {
      actual: [getMin(this.filteredData, 'stock'), getMax(this.filteredData, 'stock')],
      total: [getMin(this.data, 'stock'), getMax(this.data, 'stock')],
    };
  }
}

const allData = new Products(products);
// eslint-disable-next-line @typescript-eslint/no-unused-vars, prefer-const
let options = {
  categories: cats,
  brands: brands,
  price: [allData.priceBorders.total[0], allData.priceBorders.total[1]],
  stock: [allData.stockBorders.total[0], allData.stockBorders.total[1]],
};
