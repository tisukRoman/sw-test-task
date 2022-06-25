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

export type Response = {
  categories: Category[];
};

export type ChildProps = ChildDataProps<{}, Response>;

export const withCategoryList = graphql<{}, Response, {}, ChildProps>(
  GET_CATEGORY_LIST
);
