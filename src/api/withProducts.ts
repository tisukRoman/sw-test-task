import { gql } from '@apollo/client';
import { ChildDataProps, graphql } from '@apollo/client/react/hoc';

const GET_PRODUCTS_BY_CATEGORY = gql`
  query {
    category($input: CategoryInput) {
      name
      products {
        id
        name
        brand
        inStock
        gallery
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

type Price = {
  currency: {
    label: string;
    symbol: string;
  };
  amount: number;
};

type Product = {
  id: string;
  name: string;
  brand: string;
  inStock: boolean;
  gallery: string[];
  prices: Price[];
};

type InputProps = {
  input: { title: string };
};

type Response = {
  name: string;
  products: Product[];
};

type Variables = {
  input: { title: string };
};

type ChildProps = ChildDataProps<InputProps, Response, Variables>;

export const withProducts = graphql<InputProps, Response, Variables, ChildProps>(
  GET_PRODUCTS_BY_CATEGORY,
  {
    options: ({ input }) => ({
      variables: { input },
    }),
  }
);
