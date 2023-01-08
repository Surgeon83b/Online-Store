import React from 'react';
import AE from '../../Assets/AmericanExpress-dark.svg';
import MC from '../../Assets/MasterCard-dark.svg';
import VC from '../../Assets/Visa-card-dark.svg';

interface CardType {
  cardType: string;
}
const CardLogo: React.FC<CardType> = ({ cardType }) => {
  let path = '';
  switch (cardType) {
    case '3':
      path =
        'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Credit%20Card/AmericanExpress/AmericanExpress-dark.svg';
      break;
    case '4':
      path =
        'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Credit%20Card/Visa/Visa-card-dark.svg';
      break;
    case '5':
      path =
        'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Credit%20Card/MasterCard/MasterCard-dark.svg';
      break;
    default:
      path =
        'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Payment/Amazon/Amazon-card-dark.svg';
  }
  return <div className="card-logo" style={{ backgroundImage: `url(${path})` }}></div>;
};
export default CardLogo;
