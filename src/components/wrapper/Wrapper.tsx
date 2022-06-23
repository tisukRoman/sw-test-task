import { Component, ReactNode } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 90%;
  min-height: 100vh;
  margin: 0 auto;
  border: 1px solid #000;
`;

type WrapperProps = {
  children: ReactNode;
};

class Wrapper extends Component<WrapperProps> {
  render() {
    return <StyledWrapper>{this.props.children}</StyledWrapper>;
  }
}

export { Wrapper };
