import React, { useEffect, useState } from 'react';

export default function BuyNow() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [nameEdited, setNameEdited] = useState(false);
  const [phoneEdited, setPhoneEdited] = useState(false);
  const [nameError, setNameError] = useState('error');
  const [phoneError, setPhoneError] = useState('error');
  const [formValid, setFormValid] = useState(false);
  const validName = /^[A-Za-zА-Яа-яЁё]{3,}\s[A-Za-zА-Яа-яЁё]{3,}$/;
  const validPhone = /^\+[0-9]{9,}$/;

  useEffect(() => {
    if (nameError || phoneError) setFormValid(false);
    else setFormValid(true);
  }, [nameError, phoneError]);

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

  const blurInput = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    switch (e.target!.name) {
      case 'name':
        setNameEdited(true);
        break;
      case 'phone':
        setPhoneEdited(true);
        break;
    }
  };
  return (
    <form className="buy-now">
      <h5 className="fw-bolder">Personal details</h5>
      <input
        value={name}
        onChange={(e) => nameHandler(e)}
        onBlur={(e) => blurInput(e)}
        type="text"
        name="name"
        className="name"
        placeholder="Name"
      />
      {nameEdited && nameError && <span style={{ color: 'red' }}>{nameError}</span>}
      <input
        value={phone}
        onChange={(e) => phoneHandler(e)}
        onBlur={(e) => blurInput(e)}
        type="text"
        name="phone"
        className="phone"
        placeholder="Phone Number"
      />
      {phoneEdited && phoneError && <span style={{ color: 'red' }}>{phoneError}</span>}
      <button disabled={!formValid} type="button" className="btn btn-success">
        CONFIRM
      </button>
    </form>
  );
}
