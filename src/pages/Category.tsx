import { Component } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { CardsList } from '../components/CardsList';
import { withProducts } from '../api/withProducts';

const CategoryTitle = styled.h2`
  margin-top: 2em;
  text-align: left;
  font-family: ${theme.fonts.main};
  font-size: 2rem;
  font-weight: 400;
`;

type CategoryProps = {
  name?: string;
  products?: any[];
};

class Category extends Component<CategoryProps, {}> {
  capitalFirstLetter = (text: string = 'unknown') => {
    return text[0].toUpperCase() + text.slice(1)
  }

  render() {
    return (
      <>
        <CategoryTitle>{this.capitalFirstLetter(this.props.name)}</CategoryTitle>
        <CardsList products={this.props.products}/>
      </>
    );
  }
}

export default withProducts(({ data: { loading, category, error } }) => {
  if (loading) return <div>Loading</div>;
  if (error) return <h1>ERROR</h1>;
  if (!category) return <h1>Category was not found</h1>;
  return <Category name={category.name} products={category.products} />;
});
