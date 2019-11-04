import React from "react";
// import * as BooksAPI from './BooksAPI';

class SearchBooksWrapper extends React.Component {

  
   
  render() {

      const {updateQuery} = this.props
      // console.log(state)
    return (
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={event => updateQuery(event.target.value)}
          />
        </div>
    );

  }
}

export default SearchBooksWrapper
