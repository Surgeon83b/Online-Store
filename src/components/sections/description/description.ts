import { ProductItem, Tag } from '../../types';
import Component from '../component';
import data from '../../../products.json';
export default class ItemDescription extends Component {
  item: ProductItem;

  constructor(parent: Component, children: Component[], tag: Tag, id: number) {
    super(parent, children, tag);
    this.item = data.products.filter((e) => e.id === id)[0];
  }
  render(): string {
    return `${this.item.description}`;
  }
}
