import { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../theme';
import { Price as PriceType } from '../../types';
import styles from './Card.module.css';
import cartIcon from '../../assets/white_cart.png';
import { Picture } from '../Picture';
import { Price } from '../Price';

const CardWrapper = styled.div<{ inStock: boolean }>`
  margin-top: 5em;
  width: 22em;
  height: 27em;
  ${({ inStock }) =>
    inStock
      ? `
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 8px 8px rgba(66, 65, 65, 0.1);
  } `
      : `
    opacity: 0.5;
  `}
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

const Icon = styled.div<{ inStock: boolean }>`
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

const OutOfStockTitle = styled.div<{ inStock: boolean }>`
  ${({ inStock }) => inStock && 'display: none'};
  font-family: ${theme.fonts.main};
  font-weight: 400;
  position: absolute;
  font-size: 1.5rem;
  cursor: default;
`;

type CardProps = {
  id: string;
  name: string;
  brand: string;
  inStock: boolean;
  imgSrc: string;
  prices: PriceType[];
};

class Card extends Component<CardProps> {
  render() {
    const { id, imgSrc, name, brand, inStock, prices } = this.props;
    return (
      <Link to={`/product/${id}`} className={styles.link}>
        <CardWrapper inStock={inStock}>
          <Media>
            <Icon inStock={inStock}>
              <IconImage src={cartIcon} alt='cart icon' />
            </Icon>
            <PictureWrapper>
              <OutOfStockTitle inStock={inStock}>OUT OF STOCK</OutOfStockTitle>
              <Picture src={imgSrc} alt='dress alt' />
            </PictureWrapper>
            <CardTitle>
              {name} {brand}
            </CardTitle>
            <Price prices={prices} />
          </Media>
        </CardWrapper>
      </Link>
    );
  }
}

export { Card };
