import { Component } from 'react';
import { connect } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import styled from 'styled-components';
import { theme } from '../../theme';
import { ProductInCart } from '../../types';
import { GalleryNavigation } from '../GalleryNavigation';
import { ProductAttribute } from '../ProductAttribute';
import { CountPicker } from '../CountPicker';
import { Picture } from '../Picture';
import { Line } from '../Line';
import {
  removeProduct,
  increaseProductCount,
  decreaseProductCount,
} from '../../store/cartReducer';
import { Price } from '../Price';

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

const PictureWrapper = styled.div`
  width: 12.5em;
  height: 100%;
  position: relative;
`;

type CartItemProps = {
  product: ProductInCart;
  removeProduct: ActionCreatorWithPayload<ProductInCart, string>;
  increaseProductCount: ActionCreatorWithPayload<ProductInCart, string>;
  decreaseProductCount: ActionCreatorWithPayload<ProductInCart, string>;
};

type CartItemState = {
  selectedPicture: string;
};

class CartItem extends Component<CartItemProps, CartItemState> {
  state = {
    selectedPicture: '',
  };

  componentDidMount() {
    this.setState({
      selectedPicture: this.props.product.gallery[0],
    });
  }

  increaseCount = () => {
    this.props.increaseProductCount(this.props.product);
  };

  decreaseCount = () => {
    this.props.product.count > 1
      ? this.props.decreaseProductCount(this.props.product)
      : this.props.removeProduct(this.props.product);
  };

  scrollPicture = (direction: 'left' | 'right') => {
    const { gallery } = this.props.product;
    const { selectedPicture } = this.state;

    const i = gallery.indexOf(selectedPicture);

    if (direction === 'left' && gallery[i - 1]) {
      this.setState({ selectedPicture: gallery[i - 1] });
    }
    if (direction === 'right' && gallery[i + 1]) {
      this.setState({ selectedPicture: gallery[i + 1] });
    }
  };

  render() {
    const { prices, name, brand, attributes, count, selectedAttributes } =
      this.props.product;

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
            <PictureWrapper>
              <Picture
                src={this.state.selectedPicture}
                alt='selected product picture'
              />
              <GalleryNavigation
                onNext={this.scrollPicture}
                onPrevious={this.scrollPicture}
              />
            </PictureWrapper>
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
