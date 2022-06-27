import { Component } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import { CountPicker } from '../CountPicker';
import { TextLabel } from '../TextLabel';
import { Picture } from '../Picture';
import { Line } from '../Line';

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

class CartItem extends Component {
  render() {
    return (
      <>
        <CartItemWrapper>
          <Info>
            <InfoTitle>Apollo</InfoTitle>
            <InfoSubTitle>Running Short</InfoSubTitle>
            <Price>$50.00</Price>
            <TextLabel margin='0.5em 0 0.5em 0'>SIZE:</TextLabel>
            <TextLabel margin='2em 0 0.5em 0'>COLOR:</TextLabel>
          </Info>
          <CountAndImage>
            <CountPicker />
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
