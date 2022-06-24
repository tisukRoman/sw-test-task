import { Component } from 'react';
import styled from 'styled-components';
import { Card } from '../components/card';
import { theme } from '../theme';

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
            <Card />
            <Card />
            <Card />
            <Card />
        </CardsContainer>
      </>
    );
  }
}

export { Category };
