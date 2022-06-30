import { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { theme } from '../../theme';
import { Currency, Price as PriceType } from '../../types';
import { getActivePrice } from './../../utils/getActivePrice';

const PriceWrapper = styled.div<PriceProps>`
  font-weight: ${({ size }) => (size === 'big' ? 'bold' : '500')};
  font-size: ${({ size }) => (size === 'big' ? '1.2rem' : '1rem')};
  font-family: ${theme.fonts.main};
  margin: ${({ margin }) => (margin ? margin : '0')};
`;

type PriceProps = {
  margin?: string;
  size?: 'small' | 'big';
  prices: PriceType[];
  activeCurrencyLabel: string;
};

class Price extends Component<PriceProps> {
  renderActivePrice = () => {
    const { prices, activeCurrencyLabel } = this.props;
    const activePrice = getActivePrice(prices, activeCurrencyLabel);
    return `${activePrice?.currency.symbol}${activePrice?.amount.toFixed(2)}`;
  };

  render() {
    return (
      <PriceWrapper {...this.props}>{this.renderActivePrice()}</PriceWrapper>
    );
  }
}

const mapStateToProps = (state: { currency: Currency }) => ({
  activeCurrencyLabel: state.currency.label,
});

export const PriceWrapped = connect(mapStateToProps)(Price);
