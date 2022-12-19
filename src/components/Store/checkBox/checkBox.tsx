import React from 'react';
export interface ICheckBoxProps {
  lable: string;
  onChange: (checked: boolean) => void;
}

export function CheckBox(props: ICheckBoxProps) {
  return (
    <div>
      <input type="checkbox" className="btn-check" id={props.lable} autoComplete="off" />
      <label className="btn btn-outline-primary" htmlFor={props.lable}>
        {props.lable}
      </label>
    </div>
  );
}
