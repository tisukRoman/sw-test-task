import { gql } from '@apollo/client';
import { ChildDataProps, graphql } from '@apollo/client/react/hoc';
import { Category } from '../types';

const GET_CATEGORY_LIST = gql`
  query {
    categories {
      name
    }
  }
`;

type Response = {
  categories: Category[];
};

type ChildProps = ChildDataProps<any, Response, {}>;

export const withCategoryList = graphql<{}, Response, {}, ChildProps>(
  GET_CATEGORY_LIST
);
