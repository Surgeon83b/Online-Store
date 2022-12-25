import './global.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import data from '../Assets/products.json';
import {
  ProductItem,
  Range,
  Options,
  CountInCategories,
  CountInBrands,
  CountInFilters,
  Borders,
  MinOrMax,
  DataForRender,
} from '../types';
import { getBrandCount, getCategoryCount, getMax, getMin, isInputInProduct } from '../utils/utils';

//const main = new Component(null, [], 'main');

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
  options: Options = {} as Options;
  filteredOptions: Options = {} as Options;

  constructor(data: ProductItem[]) {
    this.data = data;
    this.setPriceBorders();
    this.setStockBorders();
    this.setOptions();
    this.setFilteredData(this.options);
    this.setCountInFilters();
  }

  setOptions(): void {
    const products = this.data;

    const cats: string[] = products.reduce((res: string[], x) => {
      if (res.indexOf(x.category) === -1) res.push(x.category);
      return res;
    }, [] as string[]);
    const brands: string[] = products.reduce((res: string[], x) => {
      if (res.indexOf(x.brand) === -1) res.push(x.brand);
      return res;
    }, [] as string[]);
    this.options = {
      categories: cats,
      brands: brands,
      price: [this.priceBorders.total[0], this.priceBorders.total[1]],
      stock: [this.stockBorders.total[0], this.stockBorders.total[1]],
    };
    this.filteredOptions = {
      categories: cats,
      brands: brands,
      price: [this.priceBorders.actual[0], this.priceBorders.actual[1]],
      stock: [this.stockBorders.actual[0], this.stockBorders.actual[1]],
    };
  }

  setFilteredOptions(options: Options): void {
    this.filteredOptions = {
      categories: options.categories,
      brands: options.brands,
      price: options.price,
      stock: options.stock,
    };
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
    this.setCountInFilters();
    this.setPriceBorders();
    this.setStockBorders();
  }
  getFilteredData(): ProductItem[] {
    return this.filteredData;
  }
  setCountInCategories(): void {
    this.countInCategories = this.options.categories.reduce((res, cat) => {
      res.push({
        category: cat,
        count: [getCategoryCount(this.filteredData, cat), getCategoryCount(this.data, cat)],
      });
      return res;
    }, [] as CountInCategories);
  }
  setCountInFilters(): void {
    this.countInFilters = {
      categories: this.options.categories.reduce((res, cat) => {
        res.push({
          category: cat,
          count: [getCategoryCount(this.filteredData, cat), getCategoryCount(this.data, cat)],
        });
        return res;
      }, [] as CountInCategories),
      brands: this.options.brands.reduce((res, brand) => {
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
  changeCategories(category: string) {
    const index = this.filteredOptions.categories.indexOf(category);
    if (index !== -1) {
      this.filteredOptions.categories.splice(index, 1);
    } else {
      this.filteredOptions.categories.push(category);
    }
    this.setFilteredData(this.filteredOptions);
  }
  changeBrands(brand: string) {
    const index = this.filteredOptions.brands.indexOf(brand);
    if (index !== -1) {
      this.filteredOptions.brands.splice(index, 1);
    } else {
      this.filteredOptions.brands.push(brand);
    }
    this.setFilteredData(this.filteredOptions);
  }
  changePriceBorders(type: MinOrMax, value: number): void {
    switch (type) {
      case 'min': {
        this.priceBorders.actual = [value, this.priceBorders.actual[1]];
        break;
      }
      case 'max': {
        this.priceBorders.actual = [this.priceBorders.actual[0], value];
      }
    }
    this.setFilteredOptions({ ...this.filteredOptions, price: this.priceBorders.actual });
    this.setFilteredData(this.filteredOptions);
  }
  changeStockBorders(type: MinOrMax, value: number): void {
    switch (type) {
      case 'min': {
        this.stockBorders.actual = [value, this.stockBorders.actual[1]];
        break;
      }
      case 'max': {
        this.stockBorders.actual = [this.stockBorders.actual[0], value];
      }
    }
    this.setFilteredOptions({ ...this.filteredOptions, stock: this.stockBorders.actual });
    this.setFilteredData(this.filteredOptions);
  }
  getDataWithInput(input: string) {
    return this.filteredData.filter((data) => isInputInProduct(input, data));
  }
  getAllDataForRender(input: string): DataForRender {
    return {
      ...this.countInFilters,
      products: this.getDataWithInput(input),
      // categories: this.countInFilters.categories,
      // brands: this.countInFilters.brands,
      price: this.priceBorders.actual,
      stock: this.stockBorders.actual,
    };
  }
}

const allData = new Products(data.products);
// eslint-disable-next-line @typescript-eslint/no-unused-vars, prefer-const
allData.filter(allData.filteredOptions);
console.log(allData);
