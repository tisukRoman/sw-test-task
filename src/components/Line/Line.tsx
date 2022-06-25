import { Component } from 'react';
import styled from 'styled-components';

const StyledLine = styled.hr`
  padding: 0;
  margin: 2em 0 1.5em 0;
  border: 1px solid #e5e5e5;
  width: 100%;
`;

class Line extends Component {
  render() {
    return <StyledLine />;
  }
}

export { Line };
