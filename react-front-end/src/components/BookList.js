import React from 'react';

import {useQuery} from '@apollo/react-hooks';
import {graphql} from 'react-apollo';

import {getBooksQuery} from '../queries/queries';

import BookDetails from './BookDetails';

// const BookList = () => {
//   const { loading, err, data } = useQuery(getBooksQuery)
//   if (loading) return <div>Loading books...</div>;
//   if (err) return  <div>Error</div>;
//   return data.books.map(book => {
//     return(
//       <li key={book.id}>{book.name}</li>
//     );
//   })
// }

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    }
  };

  displayBooks(){
    let data = this.props.data;
    if (data.loading){
      return(<div>Loading books...</div>)
    } else {
      return data.books.map(book => {
        return(
          <li key={book.id} onClick={(e) => {this.setState({selected: book.id})}}>{book.name}</li>
        );
      })
    }
  }

  render () {
    return (
      <div>
        <ul id="booklist">
          {this.displayBooks()}
        </ul>
        <BookDetails bookId={this.state.selected}/>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
