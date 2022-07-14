import { Component, MouseEvent } from 'react';
import { connect } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Attribute, Price as PriceType, ProductInCart } from '../../types';
import { toAttributesState } from '../../utils';
import { addProduct } from '../../store/cartReducer';
import styled from 'styled-components';
import { theme } from '../../theme';
import cartIcon from '../../assets/white_cart.png';
import { OutOfStock } from '../OutOfStock';
import { Picture } from '../Picture';
import { Price } from '../Price';
import history from '../../utils/history';

const CardWrapper = styled.div`
  margin-top: 5em;
  width: 22em;
  height: 27em;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 8px 8px rgba(66, 65, 65, 0.1);
  }
`;

const Media = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
`;

const PictureWrapper = styled.div`
  width: 100%;
  height: 21em;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  display: none;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background-color: ${theme.colors.active};
  position: absolute;
  bottom: 3.8em;
  right: 2em;
  text-align: center;
  line-height: 4em;
  transition: 0.2s;
  &:hover {
    transform: scale(1.2);
  };
  ${CardWrapper}:hover & {
    display: block;
  }
`;

const IconImage = styled.img`
  height: 45%;
  width: 45%;
`;

const CardTitle = styled.div`
  line-height: 2.5em;
  font-family: ${theme.fonts.main};
  font-weight: 400;
`;

type CardProps = {
  id: string;
  name: string;
  brand: string;
  inStock: boolean;
  gallery: string[];
  prices: PriceType[];
  attributes: Attribute[];
  addProduct: ActionCreatorWithPayload<ProductInCart, string>;
};

class Card extends Component<CardProps> {
  redirectToPDP = () => {
    history.push(`/product/${this.props.id}`);
  };

  addToCart = (event: MouseEvent) => {
    event.stopPropagation();
    const productToAdd: ProductInCart = {
      ...this.props,
      count: 1,
      selectedAttributes: toAttributesState(this.props.attributes),
    };
    this.props.addProduct(productToAdd);
  };

  render() {
    const { gallery, name, brand, inStock, prices } = this.props;
    return (
      <CardWrapper onClick={this.redirectToPDP}>
        <Media>
          {inStock && (
            <Icon onClick={this.addToCart}>
              <IconImage src={cartIcon} alt='cart icon' />
            </Icon>
          )}
          <PictureWrapper>
            <OutOfStock inStock={inStock}>
              <Picture src={gallery[0]} alt='dress alt' />
            </OutOfStock>
          </PictureWrapper>
          <CardTitle>
            {brand} {name}
          </CardTitle>
          <Price prices={prices} />
        </Media>
      </CardWrapper>
    );
  }
}

const CardConnected = connect(null, { addProduct })(Card);

export { CardConnected };
