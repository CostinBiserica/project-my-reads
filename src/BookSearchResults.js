/* Importing everything neeeded to create the SearchResults component */
import React from 'react'
import Book from './Book'

const BookSearchResults = props=>{
    const { searchTheBooks, books, onMove } = props;
    /* Fetching the resulted books */
    const resultedBooks = searchTheBooks.map(book =>{
        books.map(bk =>{
            if(bk.id ===book.id){
                book.shelf = bk.shelf
            }
            return bk;
        })
        return book;
    })
    return(
        <div className="search-books-results">
            <ol className="books-grid">
                {resultedBooks.map(book=>(
                    /* Rendering every book that was fetched after searching */
                    <Book 
                        key ={book.id}
                        shelf={book.shelf ? book.shelf : 'not added yet'}
                        book={book}
                        onMove={onMove}
                    />
                ))}
                
            </ol>
        </div>
    )
}
export default BookSearchResults