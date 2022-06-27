import { gql } from '@apollo/client';
import { ChildDataProps, graphql } from '@apollo/client/react/hoc';

const GET_PRODUCT_DETAILS = gql`
  query product($id: String!) {
    product(id: $id) {
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

export type Attribute = {
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

export type ProductDetails = {
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
  product: ProductDetails;
};

type InputProps = any;

type Variables = {
  id: string;
};

type ChildProps = ChildDataProps<InputProps, Response, Variables>;

export const withProductDetails = graphql<
  InputProps,
  Response,
  Variables,
  ChildProps
>(GET_PRODUCT_DETAILS, {
  options: (props) => ({
    variables: { id: props.match.params.id},
  }),
});
