import { Component } from 'react';
import styled from 'styled-components';
import arrow from '../../assets/vector.png';
import { theme } from '../../theme';

const StyledCurrencyButton = styled.header`
  width: 3em;
  height: 100%;
  line-height: 2.7em;
  font-family: ${theme.fonts.main};
  cursor: pointer;
  transition: 0.2s;
`;

const ArrowIcon = styled.img<{ isActive: boolean }>`
  transform: rotate(${({ isActive }) => (isActive ? '180deg' : '0deg')});
  margin-left: 0.5em;
`;

class CurrencyButton extends Component<{}, { isActive: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  render() {
    return (
      <StyledCurrencyButton>
        <span>$</span>
        <ArrowIcon
          src={arrow}
          alt='arrow icon'
          isActive={this.state.isActive}
        />
      </StyledCurrencyButton>
    );
  }
}

export { CurrencyButton };
