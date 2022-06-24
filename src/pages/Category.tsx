import { Component } from 'react';
import { v4 as uid } from 'uuid';
import styled from 'styled-components';
import { theme } from '../theme';
import { Card } from '../components/Card';

const CategoryTitle = styled.h2`
  margin-top: 2em;
  text-align: left;
  font-family: ${theme.fonts.main};
  font-size: 2rem;
  font-weight: 400;
`;

const CardsContainer = styled.div`
  margin-top: 2em;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

class Category extends Component {
  render() {
    return (
      <>
        <CategoryTitle>Category name</CategoryTitle>
        <CardsContainer>
          {[0, 0, 0, 0, 0, 0, 0].map((card) => (
            <Card key={uid()} />
          ))}
        </CardsContainer>
      </>
    );
  }
}

export { Category };
