import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test } from '@jest/globals';
import CardLogo from '../components/Cart/CardLogo';

describe('CardLogo component', () => {
  test('CardLogo component consists of 1 element', () => {
    const { container } = render(<CardLogo cardType={'3'} />);
    expect(container.getElementsByClassName('card-logo').length).toBe(1);
  });
  test('CardLogo component consists of 1 element', () => {
    const { container } = render(<CardLogo cardType={'3'} />);
    expect(container.querySelector('.card-logo')).toHaveStyle({
      backgroundImage: `url('https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Credit%20Card/AmericanExpress/AmericanExpress-dark.svg')`,
    });
  });
});
