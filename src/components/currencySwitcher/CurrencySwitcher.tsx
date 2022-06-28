import { Component } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import { Currency, withCurrencyList } from '../../api/withCurrencyList';
import arrow from '../../assets/vector.png';
import { v4 as uid } from 'uuid';

const StyledCurrencySwitcher = styled.div`
  width: 3em;
  height: 100%;
  line-height: 2.7em;
  font-family: ${theme.fonts.main};
  cursor: pointer;
  transition: 0.2s;
  border: none;
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

type SwitcherProps = {
  data: {
    loading: boolean;
    error: any;
    currencies: Currency[];
  };
};

type SwitcherState = {
  isActive: boolean;
};

class CurrencySwitcher extends Component<SwitcherProps, SwitcherState> {
  constructor(props: SwitcherProps) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  toggleSwitcher = () => {
    this.setState((prev) => ({ isActive: !prev.isActive }));
  };

  render() {
    const { loading, error, currencies } = this.props.data;

    if (loading) return <div>Loading...</div>;
    if (error) return <h1>Error</h1>;

    return (
      <StyledCurrencySwitcher onClick={this.toggleSwitcher}>
        <div>
          <>
            {'$'}{' '}
            <ArrowIcon
              src={arrow}
              alt='currency switcher'
              isActive={this.state.isActive}
            />
          </>
        </div>
        {this.state.isActive && (
          <OptionsList>
            {currencies.map(({ label, symbol }) => (
              <CurrencyOption key={uid()}>
                {symbol} {label}
              </CurrencyOption>
            ))}
          </OptionsList>
        )}
      </StyledCurrencySwitcher>
    );
  }
}

export const CurrencySwitcherWithFetch = withCurrencyList(CurrencySwitcher);
