import { Component } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const CardWrapper = styled.div`
  margin-top: 5em;
  width: 21em;
  height: 25em;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.1);
  }
`;

const Media = styled.div`
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const PictureWrapper = styled.div`
  width: 100%;
  height: 20em;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Picture = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const CardTitle = styled.div`
  line-height: 2.5em;
  font-family: ${theme.fonts.main};
  font-weight: 400;
`;

const CardPrice = styled.div`
  font-family: ${theme.fonts.main};
  font-weight: 500;
`;

class Card extends Component {
  render() {
    return (
      <CardWrapper>
        <Media>
          <PictureWrapper>
            <Picture
              src='https://cdn.shopify.com/s/files/1/1055/6168/products/image5_2_cf023ed8-7f49-4342-9085-7451d91fbb31_2048x.jpg?v=1596583227'
              alt='dress alt'
            />
          </PictureWrapper>
          <CardTitle>Name of the clothe</CardTitle>
          <CardPrice>$50.00</CardPrice>
        </Media>
      </CardWrapper>
    );
  }
}

export { Card };
