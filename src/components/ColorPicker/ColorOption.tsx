import { Component } from 'react';
import styled from 'styled-components';

const StyledColorOption = styled.div<ColorOptionProps>`
  border: 2px #fff solid;
  width: 2em;
  height: 2em;
  cursor: pointer;
  transition: 0.1s;
  background-color: ${({ value }) => value};
  margin-right: 0.5em;
  &:hover {
    border: 2px #0f0 solid;
  }
`;

type ColorOptionProps = {
  value: string;
};

class ColorOption extends Component<ColorOptionProps> {
  render() {
    return <StyledColorOption value={this.props.value}></StyledColorOption>;
  }
}

export { ColorOption };
