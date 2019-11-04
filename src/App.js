import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooksWrapper from './SearchBooksWrapper'
import SearchBookResults from './SearchBookResults'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import {myBooks} from './__myBooks'
const mBooks = myBooks
class BooksApp extends React.Component {
  
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    query:'',
    books:[],
    bookShelfChanger:{
      currentlyReading:'Currently Reading',
      wantToRead:'Want to Read',
      read:'Read',
      none:'None'
     },
     mBooks
  }

  updateQuery=(query)=>{
    this.setState(()=>(
      {
        query:query.trim()
      }
    ))
  }

  componentDidMount(){
            
    BooksAPI.getAll().then(books =>
      this.setState(()=>(
          {
              books
          }
      ))
    );
  }
  
  changeBookShelf=(event,gotBook)=>{
    
    console.log(gotBook)
    
    let exist = false

    if(gotBook){

      const book = {
        title:gotBook.title,
        id:gotBook.id,
        imageLinks:{
          thumbnail:`url(${gotBook.imageLinks.thumbnail})`
        },
        authors:gotBook.authors
      }
      Object.keys(this.state.mBooks).forEach(key=>this.state.mBooks[key].forEach(bk=>{
        if(bk.id === book.id) exist = true
        
      }))
      !exist && event.target.value !=='none' && this.state.mBooks[event.target.value].push(book)
      console.log(exist)
      // console.log(this.state.mBooks.currentlyReading[0].id)
      // console.log(exist)

    }else{

      const index = this.state.mBooks[event.target.className].findIndex(e=>e.id===event.target.id)
      
      const book = this.state.mBooks[event.target.className].splice(index,1)
    
      event.target.value !=='none' && this.state.mBooks[event.target.value].push(...book)
    }
    
    // if(this.state.mBooks[event.target.className]) {

    //   const index = this.state.mBooks[event.target.className].findIndex(e=>e.id===event.target.id)
    //   this.state.mBooks[event.target.className].splice(index,1)

    // }
    // event.target.value !=='none' && this.state.mBooks[event.target.value].push(gotBook)
    

    this.setState(()=>({
         mBooks
    }))
    
  }

  render() {
   
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <SearchBooksWrapper updateQuery={this.updateQuery} state={this.state}/>
            </div>
            <SearchBookResults state={this.state} updateShelf={this.changeBookShelf} />
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf state={this.state} changeBookShelf={this.changeBookShelf} />
               
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
