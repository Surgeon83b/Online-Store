import React from 'react';
export interface ICheckBoxProps {
  lable: string;
  onChange: (checked: boolean) => void;
}

export function CheckBox(props: ICheckBoxProps) {
  return (
    <div>
      <input type="checkbox" id={props.lable} autoComplete="off" />
      <label htmlFor={props.lable}>{props.lable}</label>
    </div>
  );
}
