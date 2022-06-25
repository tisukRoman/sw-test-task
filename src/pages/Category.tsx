import { Component } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { CardsList } from '../components/CardsList';

const CategoryTitle = styled.h2`
  margin-top: 2em;
  text-align: left;
  font-family: ${theme.fonts.main};
  font-size: 2rem;
  font-weight: 400;
`;

class Category extends Component {
  render() {
    return (
      <>
        <CategoryTitle>Category name</CategoryTitle>
        <CardsList />
      </>
    );
  }
}

export { Category };
