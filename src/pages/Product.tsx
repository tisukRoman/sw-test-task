import { Component } from 'react';
import { v4 as uid } from 'uuid';
import styled from 'styled-components';
import { theme } from '../theme';
import { Button } from '../components/Button';
import { Picture } from '../components/Picture';
import { SizePicker } from '../components/SizePicker';
import { TextLabel } from '../components/TextLabel';
import { ColorPicker } from '../components/ColorPicker';

const ProductPage = styled.div`
  margin-top: 4.5em;
  display: flex;
  flex-wrap: wrap;
`;

const PictureList = styled.div`
  width: 10em;
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

class Product extends Component {
  render() {
    return (
      <ProductPage>
        <PictureList>
          {[0, 0, 0].map((picture) => (
            <PictureListWrapper key={uid()}>
              <Picture
                src='https://cdn.shopify.com/s/files/1/0281/3837/3173/files/WhatsApp_Image_2022-06-01_at_12.54.28_AM.jpg?v=1654098193'
                alt='dress picture'
              />
            </PictureListWrapper>
          ))}
        </PictureList>
        <PictureWrapper>
          <Picture
            src='https://cdn.shopify.com/s/files/1/0281/3837/3173/files/WhatsApp_Image_2022-06-01_at_12.54.28_AM.jpg?v=1654098193'
            alt='dress picture'
          />
        </PictureWrapper>
        <Info>
          <InfoTitle>Apollo</InfoTitle>
          <InfoSubTitle>Running Short</InfoSubTitle>
          <TextLabel margin='0.5em 0 0.5em 0'>SIZE:</TextLabel>
          <SizePicker />
          <TextLabel margin='2em 0 0.5em 0'>COLOR:</TextLabel>
          <ColorPicker />
          <TextLabel margin='1.5em 0 0.8em 0'>PRICE:</TextLabel>
          <Price>$50.00</Price>
          <Button variant='filled' disabled>
            ADD TO CART
          </Button>
          <Description>
            Find stunning women's cocktail dresses and party dresses. Stand out
            in lace and metallic cocktail dresses and party dresses from all
            your favorite brands.
          </Description>
        </Info>
      </ProductPage>
    );
  }
}

export default Product;
