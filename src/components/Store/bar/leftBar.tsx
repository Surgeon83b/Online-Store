import Form from 'react-bootstrap/Form';
import React from 'react';
import { Button } from '../../button/button';
import { styles } from '../../styles';
import RangeSlider from './dualSlides';
//import { State } from '../Store';
import { DataBrands, DataCategory, getCheckCount, getBrandCount } from '../../../utils/utils';
import Data from '../../../Assets/products.json';
import { ProductItem } from 'types';

export function Bar(props: { items: ProductItem[] }) {
  const checkBar = (categorys: string[], counter: typeof getCheckCount) => {
    return categorys.map((category: string) => {
      const totaQuantity = counter(Data.products, category);
      const courentQuantity = counter(props.items, category);
      console.log(totaQuantity);
      return (
        <Form key={category}>
          <Form.Check
            onChange={() => console.log(category)}
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
        <Form.Control type="text" placeholder="Serch" />
        <Form.Text className="text-muted">Enter keywords to search in the catalog</Form.Text>
      </Form.Group>
      <div className="mb-4">
        <Button text="Resrt filters" onclick={() => console.log('сброс')} />
        <Button text="Copy link" onclick={() => console.log('скопировать ссылку')} />
      </div>
      <h4>Categorys</h4>
      <Form.Group className="mb-3" controlId="Category" style={styles.checkboxConteiner}>
        {checkBar(DataCategory, getCheckCount)}
      </Form.Group>
      <h4>Brends</h4>
      <Form.Group className="mb-3" controlId="Brend" style={styles.checkboxConteiner}>
        {checkBar(DataBrands, getBrandCount)}
      </Form.Group>
      <h4>Price</h4>
      <RangeSlider valueLable="$" min={0} max={1000} />
      <h4>Stock</h4>
      <RangeSlider valueLable="" min={0} max={1000} />
    </aside>
  );
}
