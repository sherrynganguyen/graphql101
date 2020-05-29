import React from 'react';
import BookList from './components/BookList';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
});

function App() {
  return (
    <ApolloProvider client = {client}>
      <div className="App">
        <h1>GraphQL 101</h1>
        <BookList/>
      </div>
    </ApolloProvider>
  );
}

export default App;
