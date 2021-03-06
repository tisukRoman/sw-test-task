import { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../theme';
import { Currency, ProductInCart } from '../../types';
import { getActivePrice } from '../../utils';
import { Button } from '../Button';
import { MiniCartItem } from '../MiniCartItem';
import { TextLabel } from '../TextLabel';

const Title = styled.div`
  display: flex;
`;

const Count = styled.div`
  font-family: ${theme.fonts.main};
  margin-left: 0.2em;
  font-weight: 500;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 5em;
  left: 0;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  background-color: #000;
  opacity: 0.4;
`;

const Modal = styled.div`
  position: fixed;
  top: 5em;
  right: 3em;
  width: 20em;
  height: 30em;
  background-color: #fff;
  padding: 1em 1.5em 2em 1.5em;
  overflow: auto;
`;

const Wrapper = styled.div`
  margin-top: 1.5em;
  display: flex;
  justify-content: space-between;
`;

type CartModalProps = {
  currency: Currency;
  itemsCount: number;
  closeModal: () => void;
  products: ProductInCart[];
  location: any;
  match: any;
  history: any;
  staticContext: any;
};

class CartModal extends Component<CartModalProps> {
  container = document.createElement('div');

  componentDidMount() {
    document.body.appendChild(this.container);
    document.addEventListener('scroll', this.disableScrolling);
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.body.removeChild(this.container);
    document.removeEventListener('scroll', this.disableScrolling);
    document.body.style.overflow = "scroll";
  }

  disableScrolling() {
    window.scroll(0, 0);
  }

  viewBag = () => {
    this.props.history.push('/cart');
    this.props.closeModal();
  };

  checkOut = () => {
    console.log('Check Out Handler');
    this.props.closeModal();
  };

  render() {
    const { products, currency, closeModal, itemsCount } = this.props;

    const totalSum = products.reduce((sum, product) => {
      const price = getActivePrice(product.prices, currency.label);
      return price ? sum + price.amount * product.count : sum;
    }, 0);
    const taxPrice = (totalSum * 21) / 100;
    const totalPrice = totalSum + taxPrice;

    return ReactDOM.createPortal(
      <>
        <ModalOverlay onClick={closeModal} />
        <Modal>
          <Title>
            <TextLabel margin='0'>My Bag,</TextLabel>
            <Count>{itemsCount} items</Count>
          </Title>
          {products.map((product) => (
            <MiniCartItem key={product.id} product={product} />
          ))}
          <Wrapper>
            <TextLabel>Total:</TextLabel>
            <TextLabel>
              {currency.symbol}
              {totalPrice.toFixed(2)}
            </TextLabel>
          </Wrapper>
          <Wrapper>
            <Button
              height='2.8em'
              width='48%'
              variant='outlined'
              onClick={this.viewBag}
            >
              VIEW BAG
            </Button>
            <Button height='2.8em' width='48%' onClick={this.checkOut}>
              CHECK OUT
            </Button>
          </Wrapper>
        </Modal>
      </>,
      this.container
    );
  }
}

export const CartModalWrapped = withRouter(CartModal);
