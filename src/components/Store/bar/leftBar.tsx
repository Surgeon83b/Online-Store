import Form from 'react-bootstrap/Form';
import React from 'react';
import { Button } from '../../button/button';
import { styles } from '../../styles';
import RangeSlider from './dualSlides';
import { DataBrands, DataCategory, getCategoryCount, getBrandCount } from '../helper';
import Data from '../../../Assets/products.json';
import { BarProps, Hendler, } from '../../../types/index';

export function Bar(props: BarProps) {
  const checkBar = (categorys: string[], counter: typeof getCategoryCount, switcher: Hendler) => {
    return categorys.map((category: string) => {
      const totaQuantity = counter(Data.products, category);
      const courentQuantity = counter(props.ProductItems, category);
      const disabled = courentQuantity === 0;
      return (
        <Form key={category}>
          <Form.Check
            disabled={disabled}
            inline
            onClick={(e) => switcher(e)}
            label={`${category} (${courentQuantity}/${totaQuantity})`}
            name="category"
            type="checkbox"
            id={category}
          />
        </Form>
      );
    });
  };
  return (
    <aside className="left-bar w-25 container">
      <Form.Group className="my-3" controlId="SerchForm">
        <Form.Control type="text" placeholder="Serch" value={props.serch} onChange={props.setSerch} />
        <Form.Text className="text-muted">Enter keywords to search in the catalog</Form.Text>
      </Form.Group>
      <div className="mb-4">
        <Button text="Resrt filters" onclick={() => console.log('сброс')} />
        <Button text="Copy link" onclick={() => console.log(window.location.href)} />
      </div>
      <h4>Categorys</h4>
      <Form.Group className="mb-3" controlId="Category" style={styles.checkboxConteiner}>
        {checkBar(DataCategory, getCategoryCount, props.switchCategory)}
      </Form.Group>
      <h4>Brends</h4>
      <Form.Group className="mb-3" controlId="Brend" style={styles.checkboxConteiner}>
        {checkBar(DataBrands, getBrandCount, props.switchBrands)}
      </Form.Group>
      <h4>Price</h4>
      <RangeSlider
        valueLable="$"
        rangeValue={props.rangeValue}
        setRangeValue={props.setRangeValue}
        min={props.range.price[0]}
        max={props.range.price[1]}
      />
      <h4>Stock</h4>
      <RangeSlider
        valueLable=""
        rangeValue={props.rangeValue}
        setRangeValue={props.setRangeValue}
        min={props.range.stock[0]}
        max={props.range.stock[1]}
      />
    </aside>
  );
}
