import Component from './component';
import { Tag, Range } from '../../types';

export default class LeftBar extends Component {
  categories: string[];
  brands: string[];
  price: Range;
  stock: Range;
  constructor(
    parent: Component,
    children: Component[],
    tag: Tag,
    categories: string[],
    brands: string[],
    price: Range,
    stock: Range
  ) {
    super(parent, children, tag);
    this.categories = categories;
    this.brands = brands;
    this.price = price;
    this.stock = stock;
  }
  render(): string {
    return (
      `<aside class="container column"><fieldset><legend>Category</legend>` +
      this.categories
        .map(
          (x) =>
            `<div class="form-check">
        <input class="form-check-input" type = "checkbox" value = "" id = "flexCheckDefault">
        <label class="form-check-label" for= "flexCheckDefault">
           ${x}</label></div>`
        )
        .reduce((total, y) => total + y, '') +
      `</fieldset></aside>`
    );
  }
}
