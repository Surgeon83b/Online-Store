import React, { useEffect, useState } from 'react';
import CardLogo from './CardLogo';
import ValidatedInput from './ValidatedInput';

export default function BuyNow() {
  const CARD_LENGTH = 5;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [nameEdited, setNameEdited] = useState(false);
  const [phoneEdited, setPhoneEdited] = useState(false);
  const [addressEdited, setAddressEdited] = useState(false);
  const [emailEdited, setEmailEdited] = useState(false);
  const [cardEdited, setCardEdited] = useState(false);
  const [nameError, setNameError] = useState('error');
  const [phoneError, setPhoneError] = useState('error');
  const [addressError, setAddressError] = useState('error');
  const [emailError, setEmailError] = useState('error');
  const [cardError, setCardError] = useState('error');
  const [formValid, setFormValid] = useState(false);

  const [cardType, setCardType] = useState('');
  const validName = /^(\b[A-Za-zА-Яа-яЁё]{3,}\b[\s\r\n]*){2,}$/;
  const validPhone = /^\+[0-9]{9,}$/;
  const validAddress = /^(\b[A-Za-zА-Яа-яЁё]{5,}\b[\s\r\n]*){3,}$/;
  const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validCard = new RegExp('^[0-9]{' + CARD_LENGTH + '}$');

  function isValid(x: boolean): void {
    x ? setFormValid(true) : setFormValid(false);
  }

  useEffect(() => {
    if (nameError || phoneError || addressError || emailError) setFormValid(false);
    else setFormValid(true);
  }, [nameError, phoneError, addressError, emailError, cardError]);

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (!validName.test(String(e.target.value).toUpperCase())) setNameError('invalid name');
    else setNameError('');
  };

  const phoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    if (!validPhone.test(String(e.target.value).toUpperCase())) setPhoneError('invalid phone');
    else setPhoneError('');
  };

  const addressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
    if (!validAddress.test(String(e.target.value).toUpperCase())) setAddressError('invalid address');
    else setAddressError('');
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!validEmail.test(String(e.target.value).toUpperCase())) setEmailError('invalid email');
    else setEmailError('');
  };

  const cardNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let num = e.target.value;
    if (num.length > CARD_LENGTH) {
      setCardNumber(num.slice(0, CARD_LENGTH));
      num = num.slice(0, CARD_LENGTH);
    } else setCardNumber(num);
    console.log(num.length, cardNumber.length);
    if (!validCard.test(num)) setCardError('invalid card number');
    else setCardError('');
  };

  const blurInput = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    switch (e.target!.name) {
      case 'name':
        setNameEdited(true);
        break;
      case 'phone':
        setPhoneEdited(true);
        break;
      case 'address':
        setAddressEdited(true);
        break;
      case 'email':
        setEmailEdited(true);
        break;
      case 'card':
        setCardEdited(true);
        break;
    }
  };

  useEffect(() => {
    setCardType(cardNumber[0]);
  }, [cardNumber]);

  return (
    <form className="buy-now">
      <div className="personal">
        <h5 className="fw-bolder">Personal details</h5>
        <ValidatedInput
          name="name"
          class="validated"
          placeholder="Name"
          nameError="invalid name"
          pattern={/^(\b[A-Za-zА-Яа-яЁё]{3,}\b[\s\r\n]*){2,}$/}
          onChange={nameHandler}
          isValid={isValid}
        />
        {/* <input
          value={name}
          onChange={(e) => nameHandler(e)}
          onBlur={(e) => blurInput(e)}
          type="text"
          name="name"
          className="validated"
          placeholder="Name"
        />
        {nameEdited && nameError && <span style={{ color: 'red', display: 'inline-block' }}>{nameError}</span>}
  */}
        <input
          value={phone}
          onChange={(e) => phoneHandler(e)}
          onBlur={(e) => blurInput(e)}
          type="text"
          name="phone"
          className="validated"
          placeholder="Phone Number"
        />
        {phoneEdited && phoneError && <span style={{ color: 'red' }}>{phoneError}</span>}
        <input
          value={address}
          onChange={(e) => addressHandler(e)}
          onBlur={(e) => blurInput(e)}
          type="text"
          name="address"
          className="validated"
          placeholder="Delivery address"
        />
        {addressEdited && addressError && <span style={{ color: 'red' }}>{addressError}</span>}
        <input
          value={email}
          onChange={(e) => emailHandler(e)}
          onBlur={(e) => blurInput(e)}
          type="text"
          name="email"
          className="validated"
          placeholder="E-mail"
        />
        {emailEdited && emailError && <span style={{ color: 'red' }}>{emailError}</span>}
      </div>

      <h5 className="fw-bolder">Credit card details</h5>
      <div className="card-number">
        <CardLogo cardType={cardType} />
        <input
          value={cardNumber}
          onChange={(e) => cardNumberHandler(e)}
          onBlur={(e) => blurInput(e)}
          type="text"
          name="card"
          className="validated"
          placeholder="Card number"
        />
        {cardEdited && cardError && <span style={{ color: 'red' }}>{cardError}</span>}
      </div>
      <div className="card-info">
        <div className="card-valid">
          <label htmlFor="">VALID:</label>
          <input type="text" id="card-valid" />
        </div>
        <div className="card-cvv">
          <label htmlFor="">CVV:</label>
          <input type="text" id="card-cvv" />
        </div>
      </div>

      <button disabled={!formValid} type="button" className="btn btn-success confirm">
        CONFIRM
      </button>
    </form>
  );
}
