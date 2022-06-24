import { Component } from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { Picture } from '../components/Picture';
import { SizePicker } from '../components/SizePicker';
import { theme } from '../theme';

const ProductPage = styled.div`
  margin-top: 4.5em;
  display: flex;
`;

const PictureList = styled.div`
  width: 10em;
`;

const PictureListWrapper = styled.div`
  margin-bottom: 2em;
  width: 5em;
  height: 5em;
`;

const PictureWrapper = styled.div`
  width: 38em;
  height: 32em;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  margin-left: 6em;
  width: 16em;
  height: 32em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: ${theme.fonts.main};
  border: 1px solid black;
`;

const InfoTitle = styled.h2`
  margin: 0;
  font-weight: 600;
`;

const InfoSubTitle = styled.h2`
  margin-top: 0em;
  font-weight: 400;
`;

const InfoLabel = styled.div`
  font-weight: bold;
  font-family: ${theme.fonts.main};
  margin: 1em 0 0.5em 0;
`;

const Price = styled.div`
  font-weight: bold;
  font-family: ${theme.fonts.main};
  margin-bottom: 1em;
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
          <PictureListWrapper>
            <Picture
              src='https://cdn.shopify.com/s/files/1/0281/3837/3173/files/WhatsApp_Image_2022-06-01_at_12.54.28_AM.jpg?v=1654098193'
              alt='dress picture'
            />
          </PictureListWrapper>
          <PictureListWrapper>
            <Picture
              src='https://asset1.marksandspencer.com/is/image/mands/SD_01_T69_1261_ZZ_X_EC_2'
              alt='dress picture'
            />
          </PictureListWrapper>
          <PictureListWrapper>
            <Picture
              src='https://asset1.marksandspencer.com/is/image/mands/SD_01_T69_1261_ZZ_X_EC_2'
              alt='dress picture'
            />
          </PictureListWrapper>
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
          <InfoLabel>SIZE:</InfoLabel>
          <SizePicker />
          <InfoLabel>COLOR:</InfoLabel>
          <div>Color Picker</div>
          <InfoLabel>Price:</InfoLabel>
          <Price>$50.00</Price>
          <Button variant='filled'>ADD TO CART</Button>
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

export { Product };
