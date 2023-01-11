import React from 'react';
import { cardLogoObject } from './utils';

interface CardType<T> {
  cardType: T;
}
const CardLogo: React.FC<CardType<string>> = ({ cardType }) => {
  const cardIndex = (Number(cardType) > 2 && Number(cardType) < 6 ? cardType : '0') as string;
  return (
    <div className="card-logo" style={{ backgroundImage: `url(${cardLogoObject[cardIndex as keyof object]})` }}></div>
  );
};
export default CardLogo;
