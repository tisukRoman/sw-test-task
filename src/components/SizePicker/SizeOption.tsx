import { Component, ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const StyledSizeOption = styled.div`
  width: 4em;
  height: 2.8em;
  border: 1px solid #000;
  line-height: 2.8em;
  font-size: 1em;
  font-weight: 500;
  font-family: ${theme.fonts.main};
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

type SizeOptionProps = {
  value: string;
  children: ReactNode;
};

class SizeOption extends Component<SizeOptionProps> {
  render() {
    const { value, children } = this.props;
    return <StyledSizeOption>{children}</StyledSizeOption>;
  }
}

export { SizeOption };
