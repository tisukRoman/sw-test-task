import { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store/store';
import { Currency, ProductInCart } from '../../types';
import { CartButton } from '../CartButton';
import { CartModal } from '../CartModal';

type MiniCartProps = {
  products: ProductInCart[];
  currency: Currency;
};

type MiniCartState = {
  modalOpen: boolean;
};

class MiniCart extends Component<MiniCartProps, MiniCartState> {
  state = {
    modalOpen: false,
  };

  toggleModal = () => {
    this.setState((s) => ({ modalOpen: !s.modalOpen }));
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { products, currency } = this.props;
    const { modalOpen } = this.state;

    const itemsCount = products.reduce((count, p) => count + p.count, 0);

    return (
      <>
        <CartButton itemsCount={itemsCount} onClick={this.toggleModal} />
        {modalOpen && (
          <CartModal
            products={products}
            closeModal={this.closeModal}
            currency={currency}
            itemsCount={itemsCount}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  products: state.cart.products,
  currency: state.currency,
});

export const MiniCartWrapped = connect(mapStateToProps)(MiniCart);
