import { graphql } from "../gql";

const GetCartByIdDocument = graphql(/* GraphQL */ `
  query GetCartById($id: ID!) {
    cart(id: $id) {
      id
      totalItems
      items {
        id
        name
        unitTotal {
          formatted
        }
      }
    }
  }
`);
