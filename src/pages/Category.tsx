import { Component } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { CardsList } from '../components/CardsList';
import { Product, withProducts } from '../api/withProducts';
import { capitalFirstLetter } from '../utils/capitalFirstLetter';
import { withRouter } from 'react-router-dom';

const CategoryTitle = styled.h2`
  margin-top: 2em;
  text-align: left;
  font-family: ${theme.fonts.main};
  font-size: 2rem;
  font-weight: 400;
`;

type CategoryProps = {
  data: {
    loading: boolean;
    error: any;
    category: {
      name?: string;
      products?: Product[];
    };
  };
  match: {
    params: {
      name?: string;
    };
  };
};

type CategoryState = {
  name?: string;
  products?: Product[];
};

class Category extends Component<CategoryProps, CategoryState> {
  state = {
    name: '',
    products: [],
  };

  render() {
    console.log(this.props.match.params.name);
    
    const { loading, error, category } = this.props.data;
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error...</h1>;

    return (
      <>
        <CategoryTitle>{capitalFirstLetter(category.name)}</CategoryTitle>
        <CardsList products={category.products} />
      </>
    );
  }
}

export default withRouter(withProducts(Category));
