import { Component, MouseEvent } from 'react';
import { connect } from 'react-redux';
import { ActionCreatorWithPayload, compose } from '@reduxjs/toolkit';
import { v4 as uid } from 'uuid';
import { Currency } from '../../types';
import styled from 'styled-components';
import { theme } from '../../theme';
import arrow from '../../assets/vector.png';
import { withCurrencyList } from '../../api/withCurrencyList';
import { setCurrency } from '../../store/currencyReducer';

const StyledCurrencySwitcher = styled.div`
  width: 3em;
  height: 100%;
  line-height: 2.7em;
  font-family: ${theme.fonts.main};
  cursor: pointer;
  transition: 0.2s;
  z-index: 5;
`;

const ArrowIcon = styled.img<SwitcherState>`
  width: 10px;
  height: 6px;
  margin-left: 6px;
  transition: 0.5s;
  transform: ${({ isActive }) => isActive && 'rotate(180deg)'};
`;

const OptionsList = styled.div`
  width: 5em;
  box-shadow: 0px 0px 5px 5px rgba(159, 159, 159, 0.1);
  background-color: #fff;
`;

const CurrencyOption = styled.div`
  font-family: ${theme.fonts.main};
  font-weight: 500;
  line-height: 2.5em;
  text-align: left;
  padding-left: 0.7em;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

type SwitcherProps = {
  data: {
    loading: boolean;
    error: any;
    currencies: Currency[];
  };
  currency: Currency;
  setCurrency: ActionCreatorWithPayload<Currency, string>;
};

type SwitcherState = {
  isActive: boolean;
};

class CurrencySwitcher extends Component<SwitcherProps, SwitcherState> {
  state = {
    isActive: false,
  };

  appRoot = document.getElementById('root');

  componentDidMount() {
    this.appRoot?.addEventListener('click', this.closeSwitcher);
  }

  componentWillUnmount() {
    this.appRoot?.removeEventListener('click', this.closeSwitcher);
  }

  closeSwitcher = (e: any) => {
    if (e.target.attributes[0].nodeValue !== 'switcher') {
      this.setState({ isActive: false });
    }
  };

  toggleSwitcher = () => {
    this.setState((s) => ({ isActive: !s.isActive }));
  };

  setCurrentCurrency = ({ label, symbol }: Currency) => {
    this.props.setCurrency({ label, symbol });
  };

  render() {
    const { loading, error, currencies } = this.props.data;

    if (loading) return <div>Loading...</div>;
    if (error) return <h1>Error</h1>;

    return (
      <StyledCurrencySwitcher
        onClick={this.toggleSwitcher}
        data-name='switcher'
      >
        <>
          {this.props.currency.symbol}{' '}
          <ArrowIcon
            src={arrow}
            alt='currency switcher'
            isActive={this.state.isActive}
          />
        </>
        {this.state.isActive && (
          <OptionsList>
            {currencies.map((currency) => (
              <CurrencyOption
                key={uid()}
                onClick={() => this.setCurrentCurrency(currency)}
              >
                {currency.symbol} {currency.label}
              </CurrencyOption>
            ))}
          </OptionsList>
        )}
      </StyledCurrencySwitcher>
    );
  }
}

const mapStateToProps = (state: { currency: Currency }) => ({
  currency: state.currency,
});

const mapDispatchToProps = {
  setCurrency,
};

export const CurrencySwitcherWrapped = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withCurrencyList
)(CurrencySwitcher);
