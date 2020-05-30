import React, {useState} from 'react';

import {useQuery} from '@apollo/react-hooks';
import {graphql} from 'react-apollo';

import {getBooksQuery} from '../queries/queries';

import BookDetails from './BookDetails';

// const BookList = () => {
//   const [selected, setSelected] = useState(null);
//   const { loading, err, data } = useQuery(getBooksQuery)
//   if (loading) return <div>Loading books...</div>;
//   if (err) return  <div>Error</div>;
//   return (
//     <div>
//       {data.books.map(book => {
//         return <li key={book.id} onClick={(e) => {setSelected(book.id)}}>{book.name}</li>;
//       })}  
//       <BookDetails bookId={selected}/>
//     </div>
//   )
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
