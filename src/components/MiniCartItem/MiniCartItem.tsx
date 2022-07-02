import { Component } from 'react';
import { connect } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import styled from 'styled-components';
import { theme } from '../../theme';
import { ProductInCart } from '../../types';
import { ProductAttribute } from '../ProductAttribute';
import { CountPicker } from '../CountPicker';
import { Picture } from '../Picture';
import {
  removeProduct,
  increaseProductCount,
  decreaseProductCount,
} from '../../store/cartReducer';
import { Price } from '../Price';
import { TextLabel } from '../TextLabel';

const CartItemWrapper = styled.div`
  margin: 2em 0;
  min-height: 12em;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: ${theme.fonts.main};
`;

const CountAndImage = styled.div`
  width: 45%;
  height: 12em;
  display: flex;
  justify-content: space-between;
`;

const PictureWrapper = styled.div`
  margin-left: 1em;
  width: 8em;
  height: 12em;
  position: relative;
`;

type MiniCartItemProps = {
  product: ProductInCart;
  removeProduct: ActionCreatorWithPayload<ProductInCart, string>;
  increaseProductCount: ActionCreatorWithPayload<ProductInCart, string>;
  decreaseProductCount: ActionCreatorWithPayload<ProductInCart, string>;
};

class MiniCartItem extends Component<MiniCartItemProps> {
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
            <TextLabel variant='thin' margin='0 0 0.5em 0'>
              {name}
            </TextLabel>
            <TextLabel variant='thin'>{brand}</TextLabel>
            <Price prices={prices} margin='1em 0 0 0' size='small' />
            {attributes.map((attr) => (
              <ProductAttribute
                {...attr}
                key={attr.id}
                disabled
                variant='small'
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
              variant='small'
            />
            <PictureWrapper>
              <Picture src={gallery[0]} alt='selected product picture' />
            </PictureWrapper>
          </CountAndImage>
        </CartItemWrapper>
      </>
    );
  }
}

const mapDispatchToProps = {
  removeProduct,
  increaseProductCount,
  decreaseProductCount,
};

const MiniCartItemWithConnect = connect(null, mapDispatchToProps)(MiniCartItem);
export { MiniCartItemWithConnect };
