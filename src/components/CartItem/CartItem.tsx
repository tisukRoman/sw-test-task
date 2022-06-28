import { Component } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import { CountPicker } from '../CountPicker';
import { Picture } from '../Picture';
import { Line } from '../Line';
import { ProductInCart } from '../../types';
import { ProductAttribute } from '../ProductAttribute';

const CartItemWrapper = styled.div`
  padding: 1.5em;
  height: 18em;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  width: 18em;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: ${theme.fonts.main};
`;

const InfoTitle = styled.h2`
  margin: 0;
  font-weight: 600;
`;

const InfoSubTitle = styled.h2`
  margin: 0;
  font-weight: 400;
`;

const Price = styled.div`
  font-weight: bold;
  font-family: ${theme.fonts.main};
  margin: 1em 0;
  font-size: 1.2rem;
`;

const CountAndImage = styled.div`
  width: 18em;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const PictureWrapper = styled.div`
  width: 12.5em;
  height: 100%;
`;

type CartItemProps = {
  product: ProductInCart;
};

class CartItem extends Component<CartItemProps> {
  render() {
    const { product } = this.props;
    const { prices, attributes, name, brand, selectedAttributes, count } = product;

    return (
      <>
        <CartItemWrapper>
          <Info>
            <InfoTitle>{name}</InfoTitle>
            <InfoSubTitle>{brand}</InfoSubTitle>
            <Price>
              {prices[0].currency.symbol}
              {prices[0].amount}
            </Price>
            {product.attributes.map((attr) => (
              <ProductAttribute
                onSelect={() => console.log('Select')}
                key={attr.id}
                activeValue={
                  selectedAttributes ? selectedAttributes[attr.name] : null
                }
                {...attr}
              />
            ))}
          </Info>
          <CountAndImage>
            <CountPicker
              count={count}
              onDecrease={() => console.log('Count down')}
              onIncrease={() => console.log('Count up')}
            />
            <PictureWrapper>
              <Picture
                src='https://cdn.shopify.com/s/files/1/0281/3837/3173/files/WhatsApp_Image_2022-06-01_at_12.54.28_AM.jpg?v=1654098193'
                alt='Cart Item Picture'
              />
            </PictureWrapper>
          </CountAndImage>
        </CartItemWrapper>
        <Line />
      </>
    );
  }
}

export { CartItem };
