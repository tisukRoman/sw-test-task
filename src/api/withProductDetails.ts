import { gql } from '@apollo/client';
import { ChildDataProps, graphql } from '@apollo/client/react/hoc';

const GET_PRODUCT_DETAILS = gql`
  query product($id: String!) {
    product(id: "apple-imac-2021") {
      id
      name
      brand
      inStock
      gallery
      description
      category
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
`;

type AttributeItem = {
  displayValue: string;
  value: string;
  id: string;
};

type Attribute = {
  id: string;
  name: string;
  type: string;
  items: AttributeItem[];
};

type Currency = {
  label: string;
  symbol: string;
};

type Price = {
  currency: Currency;
  amount: number;
};

type Product = {
  id: string;
  name: string;
  brand: string;
  inStock: boolean;
  gallery: string[];
  description: string;
  category: string;
  attributes: Attribute[];
  prices: Price[];
};

export type Response = {
  product: Product;
};

type InputProps = {
  id: string;
};

type Variables = {
  id: string;
};

type ChildProps = ChildDataProps<InputProps, Response, Variables>;

export const withProducts = graphql<
  InputProps,
  Response,
  Variables,
  ChildProps
>(GET_PRODUCT_DETAILS, {
  options: ({ id }) => ({
    variables: { id },
  }),
});
