import React from 'react';

import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import {graphql} from 'react-apollo';

const getBooksQuery =gql`
  {
    books{
      name
      id
    }
  }
`
const BookList = () => {
  const { loading, err, data } = useQuery(getBooksQuery)
  if (loading) return <div>Loading books...</div>;
  if (err) return  <div>Error</div>;
  return data.books.map(book => {
    return(
      <li key={book.id}>{book.name}</li>
    );
  })
}

// class BookList extends React.Component {
//   displayBooks(){
//     let data = this.props.data;
//     if (data.loading){
//       return(<div>Loading books...</div>)
//     } else {
//       return data.books.map(book => {
//         return(
//           <li key={book.id}>{book.name}</li>
//         );
//       })
//     }
//   }
//   render () {
//     return (
//       <div>
//         <ul id="booklist">
//           {this.displayBooks()}
//         </ul>
//       </div>
//     );
//   }
// }

export default graphql(getBooksQuery)(BookList);
