import { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store/store';
import styled from 'styled-components';
import { theme } from '../theme';
import { Currency, ProductInCart } from '../types';
import { getActivePrice, setToLocalStorage } from '../utils';
import { TextLabel } from '../components/TextLabel';
import { CartItem } from '../components/CartItem';
import { Line } from '../components/Line';
import { Button } from '../components/Button';

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

const TotalInfo = styled.div`
  height: 4.5em;
  width: 10em;
  display: flex;
  justify-content: flex-start;
  gap: 0.5em;
  text-align: left;
`;

const InfoFields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  width: 15em;
  margin-top: 1em;
`;

type CartProps = {
  products: ProductInCart[];
  currency: Currency;
};

class Cart extends Component<CartProps> {
  render() {
    const {
      products,
      currency: { symbol, label },
    } = this.props;

    const totalCount = products.reduce((t, p) => t + p.count, 0);

    const totalSum = products.reduce((sum, product) => {
      const price = getActivePrice(product.prices, label);
      return price ? sum + price.amount * product.count : sum;
    }, 0);

    const taxPrice = (totalSum * 21) / 100;

    const totalPrice = totalSum + taxPrice;

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
        <TotalInfo>
          <InfoFields>
            <TextLabel variant='thin'>Tax 21%:</TextLabel>
            <TextLabel variant='thin'>Quantity:</TextLabel>
            <TextLabel>Total:</TextLabel>
          </InfoFields>
          <InfoFields>
            <TextLabel>
              {symbol}
              {taxPrice.toFixed(2)}
            </TextLabel>
            <TextLabel>{totalCount}</TextLabel>
            <TextLabel>
              {symbol}
              {totalPrice.toFixed(2)}
            </TextLabel>
          </InfoFields>
        </TotalInfo>
        <ButtonWrapper>
          <Button
            height='3em'
            fontSize='0.8rem'
            onClick={() => console.log('Make Order')}
          >
            ORDER
          </Button>
        </ButtonWrapper>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  products: state.cart.products,
  currency: state.currency,
});

export default connect(mapStateToProps, {})(Cart);
