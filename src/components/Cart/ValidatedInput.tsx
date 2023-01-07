import React, { useState } from 'react';
import { FOnBlur, FOnChange } from 'types';

interface IValidatedInput {
  initValue: string;
  value: string;
  name: string;
  class: string;
  placeholder: string;
  nameError: string;
  onChange: FOnChange;
  onBlur: FOnBlur;
  pattern: RegExp;
}

const ValidatedInput: React.FC<IValidatedInput> = (props: IValidatedInput) => {
  const [state, setState] = useState(props.initValue);
  const [stateEdited, setStateEdited] = useState(false);
  const [stateError, setStateError] = useState('error');
  return (
    <>
      <input
        value={state}
        onChange={props.onChange}
        onBlur={props.onBlur}
        type="text"
        name={props.name}
        className={props.class}
        placeholder={props.placeholder}
      />
      {stateEdited && stateError && <span style={{ color: 'red', display: 'inline-block' }}>{props.nameError}</span>}
    </>
  );
};

export default ValidatedInput;
