import Form from 'react-bootstrap/Form';
import React from 'react';
import { Button } from '../../button/button';
import { styles } from '../../styles';
import RangeSlider from './dualSlides';
import { State, CheckBox } from '../Store';
import { DataBrands, DataCategory, getCategoryCount, getBrandCount } from '../../../utils/utils';
import Data from '../../../Assets/products.json';
//import { ProductItem } from 'types';
interface BarProps {
  options: State;
  drop: () => void;
  checkBox: CheckBox;
  setCheckBox: React.Dispatch<React.SetStateAction<CheckBox>>;
  setState: React.Dispatch<React.SetStateAction<State>>;
}
//const addQyery = (key: string, _valye: string) => {
//const baseUrl = [location.protocol, '//', location.host, location.pathname].join('');
//};
export function Bar(props: BarProps) {
  //const currentOptions = props.options;
  type P = keyof CheckBox;
  const checkBar = (categorys: string[], counter: typeof getCategoryCount, name: P) => {
    return categorys.map((category: string) => {
      const totaQuantity = counter(Data.products, category);
      const courentQuantity = counter(props.options.ProductItem, category);
      return (
        <Form key={category}>
          <Form.Check
            onChange={() => window.history.replaceState({}, '', window.location.href + category)}
            inline
            label={`${category} (${totaQuantity}/${courentQuantity})`}
            name="category"
            type="checkbox"
            id={`inline-checkbox-${category}`}
          />
        </Form>
      );
    });
  };
  return (
    <aside className="left-bar w-25 container">
      <Form.Group className="my-3" controlId="SerchForm">
        <Form.Control type="text" placeholder="Serch" value={''} />
        <Form.Text className="text-muted">Enter keywords to search in the catalog</Form.Text>
      </Form.Group>
      <div className="mb-4">
        <Button text="Resrt filters" onclick={() => props.drop()} />
        <Button text="Copy link" onclick={() => console.log(window.location.href)} />
      </div>
      <h4>Categorys</h4>
      <Form.Group className="mb-3" controlId="Category" style={styles.checkboxConteiner}>
        {checkBar(DataCategory, getCategoryCount, 'checkCategories')}
      </Form.Group>
      <h4>Brends</h4>
      <Form.Group className="mb-3" controlId="Brend" style={styles.checkboxConteiner}>
        {checkBar(DataBrands, getBrandCount, 'checkBrands')}
      </Form.Group>
      <h4>Price</h4>
      <RangeSlider valueLable="$" min={props.options.price.min} max={props.options.price.max} />
      <h4>Stock</h4>
      <RangeSlider valueLable="" min={props.options.price.min} max={props.options.price.max} />
    </aside>
  );
}
