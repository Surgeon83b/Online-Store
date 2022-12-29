import React from 'react';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value}`;
}
export interface SliderProps {
  valueLable: string;
  max: number;
  min: number;
  setRangeValue: React.Dispatch<
    React.SetStateAction<{
      price: number[] | number;
      stock: number[] | number;
    }>
  >;
  rangeValue: {
    [key: string]: number[] | number;
  };
}
export default function RangeSlider(props: SliderProps) {
  const handleChange = (event: Event, newValue: number[] | number) => {
    const newRange = { price: props.rangeValue.price, stock: props.rangeValue.stock };
    if (props.valueLable === '$') {
      newRange.price = newValue;
    } else newRange.stock = newValue;
    props.setRangeValue(newRange);
  };
  const getValueLabelFormat = (value: number) => `${valuetext(value)}${props.valueLable}`;
  const value = props.valueLable === '$' ? props.rangeValue.price : props.rangeValue.stock;
  return (
    <Slider
      style={{ width: '80%' }}
      value={value}
      min={props.min}
      max={props.max}
      onChange={handleChange}
      valueLabelDisplay="auto"
      valueLabelFormat={getValueLabelFormat}
      getAriaValueText={valuetext}
      disableSwap
    />
  );
}
