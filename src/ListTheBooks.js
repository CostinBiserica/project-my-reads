/* Importing everything needed to create the Component */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class ListTheBooks extends Component{
    render(){
        /* Getting the props */
        const {typesOfBookshelves, books, onMove} = this.props;

        return(
            <div className="list-of-books">
                <div className="list-books-title">
                    <h1> My Reads!</h1>
                </div>
                <div className="list-books-content">
                    <div /* Mapping all the shelves to the page*/ >
                        {typesOfBookshelves.map(bookshelf=>(
                            <Bookshelf
                                key={bookshelf.key}
                                shelf={bookshelf}
                                books={books}
                                onMove={onMove}
                            />
                        ))}
                    </div>
                </div>
                <div className="open-search" /* Creating a link to the "/search" page using a button */>
                    <Link to="search">
                        <button>Press here to add a new book!</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default ListTheBooks