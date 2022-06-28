import { gql } from '@apollo/client';
import { ChildDataProps, graphql } from '@apollo/client/react/hoc';
import { Currency } from '../types';

const GET_CURRENCY_LIST = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;

type Response = {
  currencies: Currency[];
};

type ChildProps = ChildDataProps<any, Response>;

export const withCurrencyList = graphql<any, Response, {}, ChildProps>(
  GET_CURRENCY_LIST
);
