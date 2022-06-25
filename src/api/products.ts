import { gql } from '@apollo/client';

const GET_PRODUCTS_BY_CATEGORY = gql`
query{
    category($input: CategoryInput){
         name,
         products {
         id,
         attributes {
           id,
               name,
           type,
           items {
             displayValue,
             value,
             id
                   }
             },
         name,
         brand,
         inStock,
         gallery,
         prices {
           currency{
             label,
             symbol
           }
           amount
         }
       }
       }
   }
`