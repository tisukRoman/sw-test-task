import { Component, ReactNode } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  //border: 1px solid #000;
  text-align: center;
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
