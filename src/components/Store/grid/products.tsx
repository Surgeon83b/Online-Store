import React, { useEffect, useState } from 'react';
import { ProductItem } from 'types';
import { FormControl, InputLabel, Select, SelectChangeEvent } from '@mui/material';
import { Button } from '../../button/button';
import { styles } from '../../styles';
import { getRankingProducts, addToCart, getProductsDirection, isInCart, removeAllFromCart, SHADOW } from '../helper';
import { Link } from 'react-router-dom';

export interface Products {
  products: ProductItem[];
  rank: string;
  setRank: (valye: string) => void;
  direction: string;
  setDirection: (valye: string) => void;
}

export function ProdGrid(props: Products) {
  const imgSize = props.direction === 'row' ? '40%' : '90%';
  const direction = getProductsDirection(props.direction);
  const products = getRankingProducts(props.products, props.rank);
  const handleChange = (event: SelectChangeEvent) => {
    props.setRank(event.target.value);
  };
  const ProductsGird = products.map((product: ProductItem) => {
    const img = product.thumbnail;
    const [whatToDo, setWhatToDo] = useState(isInCart(product.id) ? 'Drop From Cart' : 'Add To Cart');
    const [shadow, setShadow] = useState(isInCart(product.id) ? SHADOW : '');
    const [inCart, setInCart] = useState(isInCart(product.id));

    const ToDo = (id: number): void => {
      inCart ? removeAllFromCart(id) : addToCart(id);
      setInCart(!inCart);
    };

    useEffect(() => {
      inCart ? setShadow(SHADOW) : setShadow('');
      inCart ? setWhatToDo('Drop From Cart') : setWhatToDo('Add To Cart');
    }, [inCart]);

    return (
      <div key={(product.id as unknown) as string} style={{ ...direction.card, boxShadow: `${shadow}` }}>
        <div
          style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '160px',
            width: imgSize,
          }}
        ></div>
        <div>
          <p style={styles.cardText} className="bolder">
            {product.title} <br />
            {product.brand} <br />
            {product.price}$ <br />
            Raiting: {product.rating}
          </p>
        </div>
        <div style={direction.button}>
          <p>
            <Button
              text={whatToDo}
              onclick={() => {
                ToDo(product.id);
              }}
            />
          </p>
          <Link to={`/about/${product.id}`} style={{ display: 'inline-block' }}>
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
  });

  return (
    <section className="container w70" style={styles.preductsContainer}>
      <div className="products-header w100 p-1" style={styles.productsHeader}>
        <FormControl className="ranking-form" style={{ width: '30%', padding: '5px' }}>
          <InputLabel htmlFor="">Sort by</InputLabel>
          <Select
            native
            value={props.rank}
            onChange={handleChange}
            inputProps={{
              name: '',
              id: 'ranking-selekt',
            }}
          >
            <option aria-label="None" value="" />
            <option value={'raiting ASC'}>raiting ASC</option>
            <option value={'raiting DESC'}>raiting DESC</option>
            <option value={'price ASC'}>price ASC</option>
            <option value={'price DESC'}>price DESC</option>
          </Select>
        </FormControl>
        <p>Find {props.products.length}</p>
        <div style={{ display: 'flex', gap: '5px' }}>
          <Button onclick={() => props.setDirection('column')} text="Colum" />
          <Button onclick={() => props.setDirection('row')} text="Row" />
        </div>
      </div>
      <div style={direction.container}>{ProductsGird}</div>
    </section>
  );
}
