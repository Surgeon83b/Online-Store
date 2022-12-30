import React from 'react';
import { IButtonProps } from '../../types/index';

export function Button(props: IButtonProps) {
  return (
    <button type="button" onClick={props.onclick} style={{ margin: '0 3px' }} className="btn btn-primary btn-block">
      {props.text}
    </button>
  );
}
