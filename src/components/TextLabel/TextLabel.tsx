import { Component, ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const StyledTextLabel = styled.div<TextLabelProps>`
  font-weight: ${({ variant }) => (variant === 'thin' ? '400' : 'bold')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  font-family: ${theme.fonts.main};
`;

type TextLabelProps = {
  children: ReactNode;
  variant?: 'bold' | 'thin';
  margin?: string;
};

class TextLabel extends Component<TextLabelProps> {
  render() {
    return (
      <StyledTextLabel {...this.props}>{this.props.children}</StyledTextLabel>
    );
  }
}

export { TextLabel };
