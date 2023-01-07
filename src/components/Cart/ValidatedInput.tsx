import React, { isValidElement, useState } from 'react';
import { FOnBlur, FOnChange } from 'types';

interface IValidatedInput {
  name: string;
  class: string;
  placeholder: string;
  nameError: string;
  onChange: FOnChange;
  pattern: RegExp;
  isValid: (x: boolean) => void;
}

const ValidatedInput: React.FC<IValidatedInput> = (props: IValidatedInput) => {
  const [state, setState] = useState('');
  const [stateEdited, setStateEdited] = useState(false);
  const [stateError, setStateError] = useState('error');

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
    if (!props.pattern.test(String(e.target.value).toUpperCase())) {
      setStateError(`invalid ${props.name}`);
      props.isValid(false);
    } else {
      setStateError('');
      props.isValid(true);
    }
  };
  const blurInput = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setStateEdited(true);
  };
  return (
    <>
      <input
        value={state}
        onChange={(e) => inputHandler(e)}
        onBlur={(e) => blurInput(e)}
        type="text"
        name={props.name}
        className={props.class}
        placeholder={props.placeholder}
      />
      {stateEdited && stateError && <span style={{ color: 'red', display: 'inline-block' }}>{stateError}</span>}
    </>
  );
};

export default ValidatedInput;
