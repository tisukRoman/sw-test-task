import { Component } from 'react';
import { v4 as uid } from 'uuid';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { HeaderLink } from '../HeaderLink';
import { CurrencySwitcher } from '../CurrencySwitcher';
import { CartButton } from '../CartButton';
import { Category, withCategoryList } from '../../api/withCategoryList';

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

type HeaderProps = {
  data: {
    categories: Category[];
    loading: boolean;
    error: any;
  };
};

class Header extends Component<HeaderProps> {
  render() {
    const { loading, error, categories } = this.props.data;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    return (
      <StyledHeader>
        <HeaderNavigation>
          {categories?.map(({ name }) => (
            <HeaderLink key={uid()} name={name}>
              {name.toUpperCase()}
            </HeaderLink>
          ))}
        </HeaderNavigation>
        <LogoWrapper>
          <Logo src={logo} alt='shop logo' />
        </LogoWrapper>
        <HeaderNavigation>
          <CurrencySwitcher/>
          <CartButton />
        </HeaderNavigation>
      </StyledHeader>
    );
  }
}

export const HeaderWithCategories = withCategoryList(Header);
