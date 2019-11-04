import React from 'react'
import Select from './Select'
// import {myBooks} from './__myBooks'

class BookShelf extends React.Component{

    render(){
       const {state,changeBookShelf} = this.props

        return(
          
            Object.keys(state.mBooks).map(key=>(
              <div key={key} className="bookshelf">
              <h2 className="bookshelf-title">{state.bookShelfChanger[key]}</h2>
              <div className="bookshelf-books">
               <ol className="books-grid">
                {
                  state.mBooks[key].map((book,index)=>(
                       <li key={index}>
                       <div className="book" >
                         <div className="book-top">
                           <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks.thumbnail }}></div>
                           <div className="book-shelf-changer">
                            <Select changeBookShelf={changeBookShelf} className={key} id={book.id}/>
                           </div>
                         </div>
                         <div className="book-title">{book.title}</div>
                         <div className="book-authors">{book.authors}</div>
                       </div>
                        
                       </li>
                       
                       ))
                      }
                      </ol>
                     </div>
              </div>
            ))

        )


    }



}

export default BookShelf