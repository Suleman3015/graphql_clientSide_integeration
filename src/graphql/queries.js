import React from 'react'
import { gql } from '@apollo/client'

export const LOAD_USER = gql`
query{
    getAllUser{
      id
      first_name
      last_name
      email
      gender
      ip_address
      
    }
  }
`;