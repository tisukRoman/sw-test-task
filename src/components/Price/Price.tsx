import { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { theme } from '../../theme';
import { Currency, Price as PriceType } from '../../types';

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
    const activePrice = this.props.prices.find(
      (p) => p.currency.label === this.props.activeCurrencyLabel
    );
    return `${activePrice?.currency.symbol}${activePrice?.amount}`;
  };

  render() {
    return (
      <PriceWrapper {...this.props}>
        {this.renderActivePrice()}
      </PriceWrapper>
    );
  }
}

const mapStateToProps = (state: { currency: Currency }) => ({
  activeCurrencyLabel: state.currency.label,
});

export const PriceWrapped = connect(mapStateToProps)(Price);
