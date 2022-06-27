import { Component } from 'react';
import { v4 as uid } from 'uuid';
import styled from 'styled-components';
import { theme } from '../theme';
import { Button } from '../components/Button';
import { Picture } from '../components/Picture';
import { SizePicker } from '../components/SizePicker';
import { TextLabel } from '../components/TextLabel';
import { ColorPicker } from '../components/ColorPicker';
import { ProductDetails, withProductDetails } from '../api/withProductDetails';

const ProductPage = styled.div`
  margin-top: 4.5em;
  display: flex;
  flex-wrap: wrap;
`;

const PictureList = styled.div`
  width: 10em;
  height: 32em;
  overflow: scroll;
  overflow-x: hidden;
  text-align: center;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const PictureListWrapper = styled.div`
  margin-bottom: 2em;
  max-width: 5em;
  min-height: 5em;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;

const PictureWrapper = styled.div`
  max-width: 38em;
  height: 32em;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  margin-left: 6em;
  max-width: 18em;
  min-height: 32em;
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
  margin-top: 0em;
  font-weight: 400;
`;

const Price = styled.div`
  font-weight: bold;
  font-family: ${theme.fonts.main};
  margin-bottom: 2em;
`;

const Description = styled.p`
  margin-top: 2em;
  text-align: left;
  font-family: ${theme.fonts.main};
  font-weight: 400;
`;

type ProductProps = {
  data: {
    product: ProductDetails;
    loading: boolean;
    error: any;
  };
};

class Product extends Component<ProductProps> {
  render() {
    console.log(this.props.data);

    const { loading, error, product } = this.props.data;

    if (loading) return <div>Loading...</div>;
    if (error) return <h1>Error</h1>;

    return (
      <ProductPage>
        <PictureList>
          {product.gallery.map((src) => (
            <PictureListWrapper key={uid()}>
              <Picture src={src} alt='product picture' />
            </PictureListWrapper>
          ))}
        </PictureList>
        <PictureWrapper>
          <Picture src={product.gallery[0]} alt='product selected picture' />
        </PictureWrapper>
        <Info>
          <InfoTitle>{product.name}</InfoTitle>
          <InfoSubTitle>{product.brand}</InfoSubTitle>
          <TextLabel margin='0.5em 0 0.5em 0'>SIZE:</TextLabel>
          <SizePicker />
          <TextLabel margin='2em 0 0.5em 0'>COLOR:</TextLabel>
          <ColorPicker />
          <TextLabel margin='1.5em 0 0.8em 0'>PRICE:</TextLabel>
          <Price>
            {product.prices[0].currency.symbol}
            {product.prices[0].amount}
          </Price>
          <Button variant='filled' disabled>
            ADD TO CART
          </Button>
          <Description>{product.description}</Description>
        </Info>
      </ProductPage>
    );
  }
}

export default withProductDetails(Product);
