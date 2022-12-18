import Component from './component';
import { Tag } from '../../types';

export class Header extends Component {
  constructor(parent: Component, children: Component[], tag: Tag) {
    super(parent, children, tag);
  }
}