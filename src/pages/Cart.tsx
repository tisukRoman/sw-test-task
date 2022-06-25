import { Component } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { ColorPicker } from '../components/ColorPicker';
import { SizePicker } from '../components/SizePicker';
import { TextLabel } from '../components/TextLabel';
import { CountPicker } from '../components/CountPicker';

const CartTitle = styled.h2`
  margin-top: 2em;
  text-align: left;
  font-family: ${theme.fonts.main};
  font-size: 2rem;
  font-weight: 600;
`;

const Line = styled.hr`
  background-color: #e5e5e5;
`;

const ItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
`;

const CartItem = styled.div`
  padding: 1em;
  width: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  max-width: 18em;
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

class Cart extends Component {
  render() {
    return (
      <div>
        <CartTitle>CART</CartTitle>
        <Line />
        <ItemsList>
          <CartItem>
            <Info>
              <InfoTitle>Apollo</InfoTitle>
              <InfoSubTitle>Running Short</InfoSubTitle>
              <Price>$50.00</Price>
              <TextLabel margin='0.5em 0 0.5em 0'>SIZE:</TextLabel>
              <SizePicker />
              <TextLabel margin='2em 0 0.5em 0'>COLOR:</TextLabel>
              <ColorPicker />
            </Info>
            <Info>
              <CountPicker />
            </Info>
          </CartItem>
          <Line />
        </ItemsList>
      </div>
    );
  }
}

export { Cart };
