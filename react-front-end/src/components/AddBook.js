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

class AddBook extends React.Component {
  addBook = () => {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading..</div>;
    } else {
      return data.authors.map(author => {
        return <option>{author.name}</option>;
    })
    }
  }
  render () {
    return (
      <form id="add-book">
        <div className="field">
          <label>Book Name:</label>
          <input type="text"/>
        </div>

        <div className="field">
          <label>Genre:</label>
          <input type="text"/>
        </div>

        <div className="field">
          <label>Author:</label>
          <select>
            {this.addBook()}
          </select>
        </div>

        <button>+</button>
      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
