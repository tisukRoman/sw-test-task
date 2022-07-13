import { Component } from 'react';
import { connect } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import styled from 'styled-components';
import { theme } from '../../theme';
import { ProductInCart } from '../../types';
import {
  removeProduct,
  increaseProductCount,
  decreaseProductCount,
} from '../../store/cartReducer';
import { ProductAttribute } from '../ProductAttribute';
import { GalleryCarousel } from '../GalleryCarousel';
import { CountPicker } from '../CountPicker';
import { Price } from '../Price';
import { Line } from '../Line';

const CartItemWrapper = styled.div`
  min-height: 16em;
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

const CountAndImage = styled.div`
  width: 18em;
  min-height: 16em;
  display: flex;
  justify-content: space-between;
`;

type CartItemProps = {
  product: ProductInCart;
  removeProduct: ActionCreatorWithPayload<ProductInCart, string>;
  increaseProductCount: ActionCreatorWithPayload<ProductInCart, string>;
  decreaseProductCount: ActionCreatorWithPayload<ProductInCart, string>;
};

class CartItem extends Component<CartItemProps> {
  increaseCount = () => {
    this.props.increaseProductCount(this.props.product);
  };

  decreaseCount = () => {
    this.props.product.count > 1
      ? this.props.decreaseProductCount(this.props.product)
      : this.props.removeProduct(this.props.product);
  };

  render() {
    const {
      prices,
      name,
      brand,
      attributes,
      count,
      selectedAttributes,
      gallery,
    } = this.props.product;

    return (
      <>
        <CartItemWrapper>
          <Info>
            <InfoTitle>{name}</InfoTitle>
            <InfoSubTitle>{brand}</InfoSubTitle>
            <Price prices={prices} margin='1em 0 0 0' size='big' />
            {attributes.map((attr) => (
              <ProductAttribute
                {...attr}
                disabled
                key={attr.id}
                activeValue={
                  selectedAttributes && selectedAttributes[attr.name]
                }
              />
            ))}
          </Info>
          <CountAndImage>
            <CountPicker
              count={count}
              onIncrease={this.increaseCount}
              onDecrease={this.decreaseCount}
            />
            <GalleryCarousel gallery={gallery} />
          </CountAndImage>
        </CartItemWrapper>
        <Line />
      </>
    );
  }
}

const mapDispatchToProps = {
  removeProduct,
  increaseProductCount,
  decreaseProductCount,
};

const CartItemWithConnect = connect(null, mapDispatchToProps)(CartItem);
export { CartItemWithConnect };
