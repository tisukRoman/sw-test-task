import { Component } from 'react';
import { v4 as uid } from 'uuid';
import styled from 'styled-components';
import { Card } from '../Card';

const CardsListWrapper = styled.div`
  margin-top: 2em;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

class CardsList extends Component {
  render() {
    return (
      <>
        <CardsListWrapper>
          {[0, 0, 0, 0, 0, 0, 0].map((card) => (
            <Card key={uid()} />
          ))}
        </CardsListWrapper>
      </>
    );
  }
}

export { CardsList };
