import { Component } from 'react';
import styled from 'styled-components';
import arrow from '../../assets/vector.png';
import { theme } from '../../theme';

const StyledCurrencySwitcher = styled.div`
  width: 3em;
  height: 100%;
  line-height: 2.7em;
  font-family: ${theme.fonts.main};
  cursor: pointer;
  transition: 0.2s;
  border: none;
`;

const ArrowIcon = styled.img<CurrencySwitcherState>`
  width: 10px;
  height: 6px;
  margin-left: 6px;
  transition: 0.5s;
  transform: ${({ isActive }) => isActive && 'rotate(180deg)'};
`;

const OptionsList = styled.div`
  width: 5em;
  box-shadow: 0px 0px 5px 5px rgba(159, 159, 159, 0.1);
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
    background-color: #eeeeee;
  }
`;

type CurrencySwitcherState = {
  isActive: boolean;
};

class CurrencySwitcher extends Component<{}, CurrencySwitcherState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  toggleSwitcher = () => {
    this.setState((prev) => ({ isActive: !prev.isActive }));
  };

  render() {
    return (
      <StyledCurrencySwitcher onClick={this.toggleSwitcher}>
        <div>
          ${' '}
          <ArrowIcon
            src={arrow}
            alt='currency switcher'
            isActive={this.state.isActive}
          />
        </div>
        {this.state.isActive && (
          <OptionsList>
            <CurrencyOption>$ USD</CurrencyOption>
            <CurrencyOption>€ EUR</CurrencyOption>
            <CurrencyOption>¥ JPY</CurrencyOption>
          </OptionsList>
        )}
      </StyledCurrencySwitcher>
    );
  }
}

export { CurrencySwitcher };
