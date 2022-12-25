import { Tag } from '../../types';

export default class Component {
  parent: Component | undefined | null;
  children: Component[] | undefined;
  tag: Tag | undefined;
  constructor(parent: Component | null, children: Component[], tag: Tag) {
    this.parent = parent;
    this.children = children;
    this.tag = tag;
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  render(): string {
    return '';
  }
}

import { Tag, Range } from '../../types';

export default class LeftBar {
  categories: string[];
  brands: string[];
  price: Range;
  stock: Range;
  constructor(tag: Tag, categories: string[], brands: string[], price: Range, stock: Range) {
    this.categories = categories;
    this.brands = brands;
    this.price = price;
    this.stock = stock;
  }
  render(): string {
    return (
      `<aside class="container column">
      <fieldset class="category"><legend>Category</legend>` +
      this.categories
        .map(
          (x) =>
            `<div class="form-check">
        <input class="form-check-input" type = "checkbox" value = "" id = "flexCheckDefault">
        <label class="form-check-label" for= "flexCheckDefault">
           ${x}</label></div>`
        )
        .reduce((total, y) => total + y, '') +
      `</fieldset>` +
      `<fieldset class="brand"><legend>Brand</legend>` +
      this.brands
        .map(
          (x) =>
            `<div class="form-check">
        <input class="form-check-input" type = "checkbox" value = "" id = "flexCheckDefault">
        <label class="form-check-label" for= "flexCheckDefault">
           ${x}</label></div>`
        )
        .reduce((total, y) => total + y, '') +
      `</fieldset>` +
      `</aside>`
    );
  }
}
