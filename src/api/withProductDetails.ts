import { gql } from '@apollo/client';
import { ChildDataProps, graphql } from '@apollo/client/react/hoc';
import { RouteComponentProps } from 'react-router-dom';
import { ProductDetails } from '../types';

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

export type Response = {
  product: ProductDetails;
};

type Variables = {
  id: string;
};

type ChildProps = ChildDataProps<any, Response, Variables>;

export const withProductDetails = graphql<
  RouteComponentProps<{ id: string }>,
  Response,
  Variables,
  ChildProps
>(GET_PRODUCT_DETAILS, {
  options: (props) => ({
    variables: { id: props.match.params.id },
  }),
});
