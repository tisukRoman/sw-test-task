import { Component } from 'react';
import { v4 as uid } from 'uuid';
import styled from 'styled-components';
import { theme } from '../theme';
import { CartItem } from '../components/CartItem';
import { Line } from '../components/Line';

const CartTitle = styled.h2`
  margin-top: 2em;
  text-align: left;
  font-family: ${theme.fonts.main};
  font-size: 2rem;
  font-weight: 600;
`;

const ItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
`;

class Cart extends Component {
  render() {
    return (
      <>
        <CartTitle>CART</CartTitle>
        <Line />
        <ItemsList>
          {[0, 0, 0, 0].map((item) => (
            <CartItem key={uid()} />
          ))}
        </ItemsList>
      </>
    );
  }
}

export { Cart };
