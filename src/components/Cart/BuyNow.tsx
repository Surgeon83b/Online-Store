import { styles } from '../styles';
import React, { useEffect, useState } from 'react';
import { IsInputValid } from 'types';
import CardLogo from './CardLogo';
import ValidatedInput from './ValidatedInput';

export default function BuyNow(props: { popUP: boolean; setPopUP: () => void }) {
  const CARD_LENGTH = 16;
  const CVV_LENGTH = 3;

  const [nameError, setNameError] = useState('error');
  const [phoneError, setPhoneError] = useState('error');
  const [addressError, setAddressError] = useState('error');
  const [emailError, setEmailError] = useState('error');
  const [cardError, setCardError] = useState('error');
  const [cvvError, setCvvError] = useState('error');
  const [validThruError, setValidThruError] = useState('error');
  const [formValid, setFormValid] = useState(false);

  const [cardType, setCardType] = useState('');

  function isValid(x: IsInputValid, t?: string): void {
    console.log(Object.entries(x));
    switch (Object.entries(x)[0][0]) {
      case 'name':
        setNameError(Object.entries(x)[0][1]);
        break;
      case 'phone':
        setPhoneError(Object.entries(x)[0][1]);
        break;
      case 'address':
        setAddressError(Object.entries(x)[0][1]);
        break;
      case 'email':
        setEmailError(Object.entries(x)[0][1]);
        break;
      case 'card':
        setCardError(Object.entries(x)[0][1]);
        break;
      case 'cvv':
        setCvvError(Object.entries(x)[0][1]);
        break;
      case 'valid':
        setValidThruError(Object.entries(x)[0][1]);
        break;
    }
    if (t !== undefined) setCardType(t);
  }

  const submitData = () => {
    alert('The order is accepted');
    setTimeout(() => {
      window.location.href = '/';
    }, 4000);
  };

  useEffect(() => {
    if (nameError || phoneError || addressError || emailError || cardError || cvvError || validThruError)
      setFormValid(false);
    else setFormValid(true);
  }, [nameError, phoneError, addressError, emailError, cardError, cvvError, validThruError]);
  const displey = props.popUP ? 'block' : 'none';
  return (
    <div style={{ ...styles.popUPbackground, display: displey }}>
      <div
        onClick={props.setPopUP}
        style={{ position: 'fixed', left: '0', top: '0', width: '100%', height: '100%' }}
      ></div>
      <form className="buy-now">
        <div className="personal">
          <h5 className="fw-bolder">Personal details</h5>
          <ValidatedInput
            name="name"
            class="validated"
            placeholder="Name"
            pattern={/^([A-Za-zА-Яа-яЁё]{3,}[\s\r\n]*){2,}$/}
            isValid={isValid}
          />
          <ValidatedInput
            name="phone"
            class="validated"
            placeholder="Phone number"
            pattern={/^\+[0-9]{9,}$/}
            isValid={isValid}
          />
          <ValidatedInput
            name="address"
            class="validated"
            placeholder="Delivery address"
            pattern={/^([A-Za-zА-Яа-яЁё0-9]{5,}[\s\r\n]*){3,}$/}
            isValid={isValid}
          />
          <ValidatedInput
            name="email"
            class="validated"
            placeholder="E-mail"
            pattern={
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            }
            isValid={isValid}
          />
        </div>

        <h5 className="fw-bolder">Credit card details</h5>
        <div className="card-number">
          <CardLogo cardType={cardType} />
          <ValidatedInput
            name="card"
            class="validated"
            placeholder="Card number"
            pattern={RegExp('^[0-9]{' + CARD_LENGTH + '}$')}
            isValid={isValid}
            length={CARD_LENGTH}
            isCardType
          />
        </div>
        <div className="card-info">
          <ValidatedInput
            name="valid"
            class="validated card-valid"
            placeholder="Valid Thru"
            // eslint-disable-next-line prettier/prettier, no-useless-escape
          pattern={RegExp('^[01][0-9]\/[0-9]{2}$')}
            isValid={isValid}
            length={CARD_LENGTH}
            label="VALID:"
            type="validThru"
          />
          <ValidatedInput
            name="cvv"
            class="validated card-cvv"
            placeholder="Code"
            pattern={RegExp('^[0-9]{' + CVV_LENGTH + '}$')}
            isValid={isValid}
            length={CVV_LENGTH}
            label="CVV:"
          />
        </div>

        <button disabled={!formValid} type="button" className="btn btn-success confirm" onClick={submitData}>
          CONFIRM
        </button>
      </form>
    </div>
  );
}
