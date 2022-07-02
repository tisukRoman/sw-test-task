import { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { ProductInCart } from '../../types';
import { MiniCartItem } from '../MiniCartItem';
import { TextLabel } from '../TextLabel';

const ModalOverlay = styled.div`
  position: fixed;
  top: 5em;
  left: 0;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  background-color: #000;
  opacity: 0.5;
`;

const Modal = styled.div`
  position: fixed;
  top: 5em;
  right: 3em;
  width: 20em;
  height: 20em;
  background-color: #fff;
  padding: 1em;
  overflow: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Wrapper = styled.div``;

type CartModalProps = {
  products: ProductInCart[];
};

class CartModal extends Component<CartModalProps> {
  container = document.createElement('div');

  componentDidMount() {
    document.body.appendChild(this.container);
  }

  componentWillUnmount() {
    document.body.removeChild(this.container);
  }

  render() {
    const { products } = this.props;

    return ReactDOM.createPortal(
      <>
        <ModalOverlay />
        <Modal>
          <Wrapper>
            <TextLabel>My Bag</TextLabel>
            {products.map((product) => (
             <MiniCartItem key={product.id} product={product}/>
            ))}
          </Wrapper>
        </Modal>
      </>,
      this.container
    );
  }
}

export { CartModal };
