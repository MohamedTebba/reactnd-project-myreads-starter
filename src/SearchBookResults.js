import React from "react";
// import * as BooksAPI from "./BooksAPI";

class SearchBookResults extends React.Component {
  render() {
    const { query, books } = this.props.state;
    // console.log(state.books)
    const mappedBooks =
      query === ''? books: books.filter(
            book =>
              book.title.toLowerCase().includes(query.toLowerCase()) ||
              book.authors[0].toLowerCase().includes(query.toLowerCase())
          );
   
    return (
      
      query !=='' &&(<div className="search-books-results">
        <ol className="books-grid">
          {mappedBooks.map(book => (
            <li key={book.id} id={book.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${book.imageLinks.thumbnail})`
                    }}
                  ></div>
                  <div className="book-shelf-changer">
                    <select onChange={(event)=>this.props.updateShelf(event,book)} defaultValue="none">
                      <option value="move" disabled>
                        Move to...
                      </option>
                      <option value="currentlyReading">
                        Currently Reading
                      </option>
                      <option value="wantToRead"> Want to Read </option>
                      <option value="read"> Read </option>
                      <option value="none"> None </option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors} </div>
              </div>
            </li>
          ))}
        </ol>
      </div>)
    );
  }
}

export default SearchBookResults;
