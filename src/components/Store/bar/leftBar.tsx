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
  const Category = props.category.map((c) => {
    return (
      <div key={c}>
        <input onClick={() => console.log(c)} type="checkbox" className="btn-check" id={c} autoComplete="off" />
        <label className="btn btn-outline-primary" htmlFor={c}>
          {c}
        </label>
      </div>
    );
  });
  const Brend = props.brand.map((c) => {
    return (
      <div key={c}>
        <input onClick={() => console.log(c)} type="checkbox" className="btn-check" id={c} autoComplete="off" />
        <label className="btn btn-outline-primary" htmlFor={c}>
          {c}
        </label>
      </div>
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
      <Form.Group className="mb-3" controlId="Category" style={styles.checkboxConteiner}>
        {Category}
      </Form.Group>
      <Form.Group className="mb-3" controlId="Brend" style={styles.checkboxConteiner}>
        {Brend}
      </Form.Group>
      {/*<Box>
        <Slider
          getAriaLabel={() => 'Minimum distance'}
          value={100}
          onChange={() => console.log('cc')}
          valueLabelDisplay="auto"
          getAriaValueText={}
          disableSwap
        />
      </Box>*/}
    </aside>
  );
}
