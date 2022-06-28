import { Component } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import { CountPicker } from '../CountPicker';
import { Picture } from '../Picture';
import { Line } from '../Line';
import { ProductInCart } from '../../types';
import { ProductAttribute } from '../ProductAttribute';
import { GalleryNavigation } from '../GalleryNavigation';

const CartItemWrapper = styled.div`
  padding: 1.5em 0 2em 0;
  height: 16em;
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
  margin: 1em 0 0 0;
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
  position: relative;
`;

type CartItemProps = {
  product: ProductInCart;
};

type CartItemState = {
  selectedPicture: string;
  attributes: {
    [name: string]: string;
  } | null;
  count: number;
};

class CartItem extends Component<CartItemProps, CartItemState> {
  state = {
    selectedPicture: '',
    attributes: null,
    count: 1,
  };

  componentDidMount() {
    const { selectedAttributes, gallery } = this.props.product;
    this.setState({
      attributes: selectedAttributes,
      selectedPicture: gallery[0],
      count: 1,
    });
  }

  selectAttributeValue = (name: string, value: string) => {
    this.setState((prev) => {
      const updatedAttributes = { ...prev.attributes };
      updatedAttributes[name] = value;
      return { attributes: updatedAttributes };
    });
  };

  increaseCount = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  decreaseCount = () => {
    if (this.state.count > 1) {
      this.setState((prev) => ({ count: prev.count - 1 }));
    }
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
    const { prices, name, brand, attributes } = this.props.product;
    const { selectedPicture, attributes: ActiveAttrs } = this.state;

    console.log(this.state);

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
            {attributes.map((attr) => (
              <ProductAttribute
                {...attr}
                key={attr.id}
                onSelect={this.selectAttributeValue}
                activeValue={ActiveAttrs ? ActiveAttrs[attr.name] : null}
              />
            ))}
          </Info>
          <CountAndImage>
            <CountPicker
              count={this.state.count}
              onIncrease={this.increaseCount}
              onDecrease={this.decreaseCount}
            />
            <PictureWrapper>
              <Picture src={selectedPicture} alt='selected product picture' />
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

export { CartItem };
