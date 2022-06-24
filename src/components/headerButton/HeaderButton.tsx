import { Component, ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const StyledHeaderButton = styled.header`
  width: 5em;
  height: 100%;
  text-align: center;
  line-height: 3em;
  font-family: ${theme.fonts.main}
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: ${theme.colors.active};
    border-bottom: 3px solid ${theme.colors.active}
  }
`;

class HeaderButton extends Component<{ children: ReactNode }> {
  render() {
    return <StyledHeaderButton>{this.props.children}</StyledHeaderButton>;
  }
}

export { HeaderButton };
