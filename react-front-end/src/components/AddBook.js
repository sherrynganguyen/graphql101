import React from 'react';

import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getAuthorsQuery =gql`
  {
    authors{
      name
      id
    }
  }
`