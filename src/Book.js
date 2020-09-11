/* Importing everything neeeded to create the Book */
import React from 'react'
import ShelfSwitcher from './ShelfSwitcher'

const Book = ({book, shelf, onMove}) =>(
    <li>
        <div className="book">
            <div className="book-top">
                <div className='book-cover'
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${
                            book && book.imageLinks
                                ? book.imageLinks.thumbnail
                                : 'icons/book-placeholder.svg'
                        })`
                    }}
                />
                
                <ShelfSwitcher /* Adding the component that will help us move the books between shelves */
                    currentShelf={shelf}
                    book={book}
                    onMove={onMove}
                />
            </div>
            <div className="book-title">
                {book.title}
            </div>
            <div className="book-authors">
                {book && book.authors ? book.authors.join(', ') : 'Unknown'}
            </div>
        </div>
    </li>
)

export default Book