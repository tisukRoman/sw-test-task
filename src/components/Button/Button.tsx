import { Component, ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const StyledButton = styled.button<ButtonProps>`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '3em')};
  font-family: ${theme.fonts.main};
  font-weight: 500;
  cursor: pointer;
  ${({ variant }) => {
    return variant === 'outlined'
      ? `
        background-color: #fff;
        border: 2px solid #000;
      `
      : `
        border: none;
        background-color: ${theme.colors.active};
        color: #fff;
      `;
  }}}
`;

type ButtonProps = {
  variant?: 'filled' | 'outlined';
  width?: string;
  height?: string;
  children: ReactNode;
};

class Button extends Component<ButtonProps> {
  render() {
    return <StyledButton {...this.props}>{this.props.children}</StyledButton>;
  }
}

export { Button };
