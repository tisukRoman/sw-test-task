import { Component, ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const StyledButton = styled.button<ButtonProps>`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '4em')};
  line-height:  ${({ height }) => (height ? height : '4em')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1rem')};
  font-family: ${theme.fonts.main};
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;
  &:hover{
    opacity: 0.8;
  }
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
  fontSize?: string;
  children: ReactNode;
};

class Button extends Component<ButtonProps> {
  render() {
    return <StyledButton {...this.props}>{this.props.children}</StyledButton>;
  }
}

export { Button };
