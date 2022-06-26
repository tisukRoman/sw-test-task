import { gql } from '@apollo/client';
import { ChildDataProps, graphql } from '@apollo/client/react/hoc';

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

type Currency = {
  __typename: 'Currency';
  label: string;
  symbol: string;
};

type Price = {
  __typename: 'Price';
  currency: Currency;
  amount: number;
};

export type Product = {
  __typename: 'Product';
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
  category: {
    name: string;
    products: Product[];
  };
};

type Variables = {
  input: { title: string };
};

type ChildProps = ChildDataProps<InputProps, Response, Variables>;

export const withProducts = graphql<
  InputProps,
  Response,
  Variables,
  ChildProps
>(GET_PRODUCTS_BY_CATEGORY, {
  options: ({ input }) => ({
    variables: { input },
  }),
});
