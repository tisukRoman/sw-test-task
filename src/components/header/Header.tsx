import { Component } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart.png';
import { HeaderButton } from '../headerButton';
import { CurrencyButton } from '../currencyButton';

const StyledHeader = styled.header`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const HeaderNavigation = styled.nav`
  display: flex;
`;

const LogoWrapper = styled.div`
  width: 2.5em;
  position: absolute;
  top: 0.5em;
  left: 50%;
  transform: translateX(-50%);
`

const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <HeaderNavigation>
          <HeaderButton>WOMEN</HeaderButton>
          <HeaderButton>MEN</HeaderButton>
          <HeaderButton>KIDS</HeaderButton>
        </HeaderNavigation>
        <LogoWrapper>
          <Logo src={logo} alt='shop logo' />
        </LogoWrapper>
        <HeaderNavigation>
          <CurrencyButton/>
          <HeaderButton><img src={cart} alt="cart icon"/></HeaderButton>
        </HeaderNavigation>
      </StyledHeader>
    );
  }
}

export { Header };
