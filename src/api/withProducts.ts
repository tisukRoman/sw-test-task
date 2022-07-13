import { gql } from '@apollo/client';
import { ChildDataProps, graphql } from '@apollo/client/react/hoc';
import { RouteComponentProps } from 'react-router-dom';
import { Product } from '../types';

const GET_PRODUCTS_BY_CATEGORY = gql`
  query category($input: CategoryInput) {
    category(input: $input) {
      name
      products {
        id
        name
        brand
        inStock
        gallery
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;

type Response = {
  category: {
    name: string;
    products: Product[];
  };
};

type Variables = {
  input: { title: string };
};

type ChildProps = ChildDataProps<any, Response, Variables>;

export const withProducts = graphql<
  RouteComponentProps<{ name: string }>,
  Response,
  Variables,
  ChildProps
>(GET_PRODUCTS_BY_CATEGORY, {
  options: (props) => ({
    variables: { input: { title: props.match.params.name } },
  }),
});
