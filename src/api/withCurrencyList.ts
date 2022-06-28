import { gql } from '@apollo/client';
import { ChildDataProps, graphql } from '@apollo/client/react/hoc';

const GET_CURRENCY_LIST = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;

export type Currency = {
  label: string;
  symbol: string;
};

type Response = {
  currencies: Currency[];
};

type ChildProps = ChildDataProps<any, Response>;

export const withCurrencyList = graphql<any, Response, {}, ChildProps>(
  GET_CURRENCY_LIST
);
