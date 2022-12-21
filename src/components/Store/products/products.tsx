import React from 'react';
import { ProductItem } from 'types';
import { FormControl, InputLabel, Select, SelectChangeEvent } from '@mui/material';
import { Button } from '../../button/button';
import { styles } from '../../styles';

export interface Products {
  produrcts: ProductItem[];
}
//! TODO add the state settings to the Select component!
//!ADD Number value!
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Products() {
  const [state, setState] = React.useState<{ name: string }>({
    name: '',
  });
  const handleChange = (event: SelectChangeEvent) => {
    const name = event.target.value as keyof typeof state;
    console.log(name);
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <section className="container w70" style={styles.preductsContainer}>
      <div className="products-header w100 p-1" style={styles.productsHeader}>
        <FormControl className="ranking-form">
          <InputLabel htmlFor="age-native-simple">{state.name}</InputLabel>
          <Select
            //style={{ height: '5px' }}
            native
            value={state.name}
            onChange={handleChange}
            inputProps={{
              name: '',
              id: 'ranking-selekt',
            }}
          >
            <option aria-label="None" value="" />
            <option value={'второй'}>ranking1</option>
            <option value={'первый'}>ranking</option>
            <option value={'второй'}>ranking1</option>
          </Select>
        </FormControl>
        <p>Find NUMBER</p>
        <div>
          <Button onclick={() => console.log('colum')} text="Colum" />
          <Button onclick={() => console.log('row')} text="Row" />
        </div>
      </div>
    </section>
  );
}
