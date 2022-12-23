import Form from 'react-bootstrap/Form';
import React from 'react';
import { Button } from '../../button/button';
import { styles } from '../../styles';
//import Box from '@mui/material/Box';
//import Slider from '@mui/material/Slider';
export interface IBarProps {
  category: string[];
  brand: string[];
}
export function Bar(props: IBarProps) {
  const Category = props.category.map((category) => {
    return (
      <Form key={category}>
        <Form.Check
          onChange={() => console.log(category)}
          inline
          label={category}
          name="category"
          type="checkbox"
          id={`inline-checkbox-${category}`}
        />
      </Form>
    );
  });
  const Brend = props.brand.map((brand) => {
    return (
      <Form key={brand}>
        <Form.Check
          onChange={() => console.log(brand)}
          inline
          label={brand}
          name="bread"
          type="checkbox"
          id={`inline-checkbox-${brand}`}
        />
      </Form>
    );
  });
  return (
    <aside className="left-bar w-25">
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
        {Category}
      </Form.Group>
      <h4>Brends</h4>
      <Form.Group className="mb-3" controlId="Brend" style={styles.checkboxConteiner}>
        {Brend}
      </Form.Group>
      <h4>Cost</h4>
    </aside>
  );
}
