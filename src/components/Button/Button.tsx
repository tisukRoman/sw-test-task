import { Component, ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const StyledButton = styled.button<ButtonProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  line-height: ${({ height }) => height};
  font-size: ${({ fontSize }) => fontSize};
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  font-family: ${theme.fonts.main};
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;
  ${({ variant }) => {
    if (variant === 'outlined') {
      return `
        background-color: #fff;
        border: 2px solid #000;
      `;
    } else if (variant === 'filled') {
      return `
        border: none;
        background-color: ${theme.colors.active};
        color: #fff;
      `;
    }
  }};
  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.3 : 0.8)};
  }
`;

type ButtonProps = {
  children: ReactNode;
  variant?: 'filled' | 'outlined';
  width?: string;
  height?: string;
  fontSize?: string;
  disabled?: boolean;
  onClick?: () => void;
};

class Button extends Component<ButtonProps> {
  static defaultProps: ButtonProps = {
    children: 'Default Button',
    variant: 'filled',
    width: '100%',
    height: '4em',
    fontSize: '1rem',
    disabled: false,
    onClick: () => console.log('Button Clicked'),
  };

  render() {
    return <StyledButton {...this.props}>{this.props.children}</StyledButton>;
  }
}

export { Button };
