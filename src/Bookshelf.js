/* Importing everything neeeded to create the Bookshelf */
import React from 'react'
import Book from './Book'

const Bookshelf = props=>{
    /* Geetting the props */
    const { shelf, books, onMove} = props;

    const booksOnShelf = books.filter(book=>book.shelf === shelf.key)

    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">
                {shelf.name}
            </h2>
            <div className="bookshelf-books">
                <ol className="books-grid"
                 /* Using a list to display every book situated on the current rendering shelf shelf */
                 >
                    {booksOnShelf.map(bookOnShelf=>(
                        <Book 
                            book={bookOnShelf}
                            key={bookOnShelf.id}
                            shelf={shelf.key}
                            onMove={onMove}
                        />
                    ))}
                </ol>
            </div>
        </div>

    )
}
export default Bookshelf;