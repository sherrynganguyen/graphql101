import React from 'react';

import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getBooksQuery =gql`
  {
    books{
      name
      id
    }
  }
`
class BookList extends React.Component {
  displayBook(){
    let data = this.props.data;
  }
  render () {
    return (
      <div>
        <ul id="booklist">
          <li>hello</li>
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
