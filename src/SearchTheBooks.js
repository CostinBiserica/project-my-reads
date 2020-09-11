/* Importing everything neeeded to create the SearchTheBook component */
import React from 'react'
import BookSearchResults from './BookSearchResults'
import SearchInput from './SearchInput'
import {Link} from 'react-router-dom'

class SearchTheBooks extends React.Component {
    render(){
        const{ searchBooks, books, onSearch, onSearchReset, onMove} = this.props
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" /* Button under a `Link` tag to get us back to "/" */ >
                        <button 
                            className="close-search"
                            onClick={onSearchReset}
                        >
                            Close
                        </button>
                    </Link>
                    <SearchInput /* Component created to implement a search field to search through the books */
                        onSearch={onSearch}
                    />
                    </div>
                    <BookSearchResults  /* Component created to show the books resulted from the search */
                        searchTheBooks={searchBooks}
                        books={books}
                        onMove={onMove}
                    />
                
            </div>
        )
    }   
}
export default SearchTheBooks