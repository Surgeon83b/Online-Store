import React from 'react';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value}`;
}
export interface SliderProps {
  valueLable: string;
  max: number;
  min: number;
}
export default function RangeSlider(props: SliderProps) {
  const [value, setValue] = React.useState<number[]>([props.min, props.max]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  const getValueLabelFormat = (value: number) => `${valuetext(value)}${props.valueLable}`;
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
