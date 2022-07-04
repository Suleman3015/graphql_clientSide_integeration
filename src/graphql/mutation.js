import { gql } from "@apollo/client/core";

export const mutation = gql`
  mutation createUser(
    $first_name: String!
    $last_name: String!
    $email: String!
    $gender: String!
    $ip_address: String!
  ) {
    createUser(
      first_name: $first_name
      last_name: $last_name
      email: $email
      gender: $gender
      ip_address: $ip_address
    ) {
      first_name
      last_name
      email
      gender
      ip_address
    }
  }
`;
