import { Component } from 'react';
import styled from 'styled-components';
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
  products?: any[];
};

class CardsList extends Component<CardListProps> {
  render() {
    return (
      <>
        <CardsListWrapper>
          {this.props.products?.length ? (
            this.props.products.map((card) => (
              <Card
                id={card.id}
                key={card.id}
                name={card.name}
                brand={card.brand}
                inStock={card.inStock}
                imgSrc={card.gallery[0]}
                prices={card.prices}
              />
            ))
          ) : (
            <h1>No Products...</h1>
          )}
        </CardsListWrapper>
      </>
    );
  }
}

export { CardsList };
