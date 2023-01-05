import { Button } from '../../button/button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isInCart, SHADOW, removeAllFromCart, addToCart, getProductsDirection } from '../helper';
import { ProductItem } from '../../../types/index';
import { styles } from '../../styles';

export const Product = (props: { product: ProductItem; imgSize: string; direction: string }) => {
  const direction = getProductsDirection(props.direction);
  const img = props.product.thumbnail;
  const [whatToDo, setWhatToDo] = useState(isInCart(props.product.id) ? 'Drop From Cart' : 'Add To Cart');
  const [shadow, setShadow] = useState(isInCart(props.product.id) ? SHADOW : '');
  const [inCart, setInCart] = useState(isInCart(props.product.id));
  const ToDo = (id: number): void => {
    inCart ? removeAllFromCart(id) : addToCart(id);
    setInCart(!inCart);
  };
  useEffect(() => {
    inCart ? setShadow(SHADOW) : setShadow('');
    inCart ? setWhatToDo('Drop From Cart') : setWhatToDo('Add To Cart');
  }, [inCart]);

  return (
    <div key={(props.product.id as unknown) as string} style={{ ...direction.card, boxShadow: `${shadow}` }}>
      <div
        style={{
          backgroundImage: `url('${img}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '160px',
          width: props.imgSize,
        }}
      ></div>
      <div>
        <p style={styles.cardText} className="bolder">
          {props.product.title} <br />
          {props.product.brand} <br />
          {props.product.price}$ <br />
          Raiting: {props.product.rating}
        </p>
      </div>
      <div style={direction.button}>
        <p>
          <Button
            text={whatToDo}
            onclick={() => {
              ToDo(props.product.id);
            }}
          />
        </p>
        <Link to={`/about/${props.product.id}`} style={{ display: 'inline-block' }}>
          <Button
            text="Details"
            onclick={function (): void {
              1 + 1;
            }}
          />
        </Link>
      </div>
    </div>
  );
};
