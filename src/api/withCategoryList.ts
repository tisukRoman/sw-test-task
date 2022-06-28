import { gql } from '@apollo/client';
import { ChildDataProps, graphql } from '@apollo/client/react/hoc';

const GET_CATEGORY_LIST = gql`
  query {
    categories {
      name
    }
  }
`;

export type Category = {
  name: string;
};

type Response = {
  categories: Category[];
};

type ChildProps = ChildDataProps<any, Response, {}>;

export const withCategoryList = graphql<{}, Response, {}, ChildProps>(
  GET_CATEGORY_LIST
);
