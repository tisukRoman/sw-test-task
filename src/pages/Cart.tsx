import { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { theme } from '../theme';
import { CartItem } from '../components/CartItem';
import { CartState } from '../store/cartReducer';
import { Line } from '../components/Line';
import { ProductInCart } from '../types';
import { TextLabel } from '../components/TextLabel';

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

type CartProps = {
  products: ProductInCart[];
};

class Cart extends Component<CartProps> {
  render() {
    const { products } = this.props;
    console.log(this.props);

    return (
      <>
        <CartTitle>CART</CartTitle>
        <Line />
        <ItemsList>
          {products?.length ? (
            products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))
          ) : (
            <TextLabel>Empty...</TextLabel>
          )}
        </ItemsList>
      </>
    );
  }
}

const mapStateToProps = (state: {cart: CartState}) => ({
  products: state.cart.products
});

export default connect(mapStateToProps, {})(Cart);
