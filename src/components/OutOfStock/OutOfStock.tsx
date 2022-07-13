import { Component, ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const OutOfStockWrapper = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  position: relative;
`;

const OutOfStockTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: ${theme.fonts.main};
  font-size: 1.3rem;
`;

type OutOfStockProps = {
  children: ReactNode;
  inStock: boolean;
};

class OutOfStock extends Component<OutOfStockProps> {
  render() {
    return !this.props.inStock ? (
      <OutOfStockWrapper>
        <OutOfStockTitle>OUT OF STOCK</OutOfStockTitle>
        {this.props.children}
      </OutOfStockWrapper>
    ) : (
      this.props.children
    );
  }
}

export { OutOfStock };
