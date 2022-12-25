import Form from 'react-bootstrap/Form';
import React from 'react';
import { Button } from 'components/button/button';

export interface IBarProps {
  category: string[];
  brand: string[];
}
export function Bar(props: IBarProps) {
  const Category = props.category.map((c) => {
    return (
      <div onClick={() => console.log(c)}>
        <input type="checkbox" className="btn-check" id={c} autoComplete="off" />
        <label className="btn btn-outline-primary" htmlFor={c}>
          {c}
        </label>
      </div>
    );
  });
  const Brend = props.brand.map((c) => {
    return (
      <div onClick={() => console.log(c)}>
        <input type="checkbox" className="btn-check" id={c} autoComplete="off" />
        <label className="btn btn-outline-primary" htmlFor={c}>
          {c}
        </label>
      </div>
    );
  });
  return (
    <aside className="left-bar">
      <Form.Group className="mb-3" controlId="SerchForm">
        <Form.Control type="text" placeholder="Serch" />
        <Form.Text className="text-muted">Enter keywords to search in the catalog</Form.Text>
      </Form.Group>
      <div>
        <Button text="Resrt filters" onclick={() => console.log('сброс')} />
        <Button text="Copy link" onclick={() => console.log('скопировать ссылку')} />
      </div>
      <Form.Group className="mb-3" controlId="Category">
        {Category}
      </Form.Group>
      <Form.Group className="mb-3" controlId="Brend">
        {Brend}
      </Form.Group>
    </aside>
  );
}
