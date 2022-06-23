import { Component, ReactNode } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div<WrapperProps>`
  width: ${({ width }) => (width ? width : '100%')};
  min-height: 100vh;
  margin: 0 auto;
  //border: 1px solid #000;
  text-align: center;
`;

type WrapperProps = {
  children: ReactNode;
  width?: string;
  height?: string;
};

class Wrapper extends Component<WrapperProps> {
  render() {
    const { width, height, children } = this.props;
    return (
      <StyledWrapper width={width} height={height}>
        {children}
      </StyledWrapper>
    );
  }
}

export { Wrapper };
