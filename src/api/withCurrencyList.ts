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

type Currency = {
  label: string;
  symbol: string;
};

type Response = {
  currencies: Currency[];
};

type ChildProps = ChildDataProps<{}, Response>;

export const withCurrencyList = graphql<{}, Response, {}, ChildProps>(
  GET_CURRENCY_LIST
);
