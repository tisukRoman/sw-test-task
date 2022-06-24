import { Component, ReactNode } from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  // border: 1px solid black;
  width: 100%;
`;

class Main extends Component<{ children: ReactNode }> {
  render() {
    return <StyledMain>{this.props.children}</StyledMain>;
  }
}

export { Main };
