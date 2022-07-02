import { Component } from 'react';
import styled from 'styled-components';
import cart from '../../assets/cart.png';
import { theme } from '../../theme';

const CartButtonWrapper = styled.div`
  width: 3em;
  height: 100%;
  text-align: center;
  line-height: 3em;
  font-family: ${theme.fonts.main};
  transition: 0.2s;
  cursor: pointer;
  position: relative;
`;

const CartItemsCount = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  background-color: #000;
  height: 1.5em;
  width: 1.5em;
  border-radius: 50%;
  line-height: 1.4em;
  font-size: 0.9em;
  font-family: ${theme.fonts.main};
  font-weight: bold;
  text-align: center;
`;

type CartButtonProps = {
  itemsCount: number;
  onClick: () => void;
};

class CartButton extends Component<CartButtonProps> {
  render() {
    return (
      <CartButtonWrapper onClick={this.props.onClick}>
        <CartItemsCount>{this.props.itemsCount}</CartItemsCount>
        <img src={cart} alt='cart icon' />
      </CartButtonWrapper>
    );
  }
}

export { CartButton };
