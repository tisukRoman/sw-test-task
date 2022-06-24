import { Component } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { HeaderButton } from '../HeaderButton';
import { CurrencySwitcher } from '../CurrencySwitcher';
import { CartButton } from '../CartButton';

const StyledHeader = styled.header`
  margin-top: 1em;
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
`;

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
          <CurrencySwitcher />
          <CartButton />
        </HeaderNavigation>
      </StyledHeader>
    );
  }
}

export { Header };
