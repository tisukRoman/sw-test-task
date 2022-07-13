import { Component } from 'react';
import styled from 'styled-components';
import { Product } from '../../types';
import { Card } from '../Card';

const CardsListWrapper = styled.div`
  margin-top: 2em;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  column-gap: 5em;
  row-gap: 1em;
`;

type CardListProps = {
  products?: Product[];
};

class CardsList extends Component<CardListProps> {
  render() {
    return (
      <>
        <CardsListWrapper>
          {this.props.products?.length ? (
            this.props.products.map((card) => <Card key={card.id} {...card} />)
          ) : (
            <h1>No Products...</h1>
          )}
        </CardsListWrapper>
      </>
    );
  }
}

export { CardsList };
