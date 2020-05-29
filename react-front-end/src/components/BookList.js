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
    if (data.loading){
      return(<div>Loading books...</div>)
    } else {
      return data.books.map(book => {
        return(
          <li key={book.id}>{book.name}</li>
        );
      })
    }
  }
  render () {
    return (
      <div>
        <ul id="booklist">
          {this.displayBook()}
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
