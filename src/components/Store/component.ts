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
