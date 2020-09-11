/* Importing everything neeeded for the App to run */
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListTheBooks from './ListTheBooks'
import SearchTheBooks from './SearchTheBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'
 /* Defining every type of bookshelf available for users*/
const typeOfBookshelf = [
	{key:'currentlyReading', name: 'Currently reading'},
	{key:'wantToRead', name: 'Want to read'},
	{key:'read', name: 'Read'}
] 
class App extends Component {
	/* Setting the initial state of the component */
	state = {
		loadedBooks: [],
		searchForBooks: [],
		error: false
	}
	/* Fetching every book stored with BooksAPI */
	componentDidMount = () => {
		BooksAPI.getAll().then(books => {

			this.setState({ loadedBooks: books});
		});
	};

	/* Function that moves the books from one shelf to another called on onMove attribute */
	moveTheBook = (book, bookshelf)=>{
		BooksAPI.update(book, bookshelf)
		console.log(book)
		const newLoadedBooks = this.state.loadedBooks.map(bk =>{
			if(bk.id === book.id){
				bk.shelf = bookshelf
			}
			return bk;
		})
		this.setState({
			loadedBooks: newLoadedBooks,
		})
		};

	/* Function that search through the books stored called on onSearch attribute */
	searchThroughBooks = query =>{
		if(query.length >0){
			BooksAPI.search(query).then(books=>{
				if(books.error){
					this.setState({searchForBooks: []});
				}
				else
				{
					this.setState({searchForBooks: books});
				}
			})
		}
		else
		{
			this.setState({searchForBooks: []});
		}
	};

	/* Function that reset the search called on onSearchReset attribute */
	resetSearch = ()=>{
		this.setState({searchForBooks: []});
	};
	render() {
		/* Fetching the state inside the render method */
		const{ loadedBooks, searchForBooks, error}=this.state;
		if(error){
			return <div>We couldn't fetch the books for you! We kindly ask you try again later!</div>
		}
		return(
			<div className="app">
				<Route  /* Rendering the created component  "ListTheBooks" that loads on the "/" path */
					exact path="/"
					render={()=>(
						<ListTheBooks
							typesOfBookshelves={typeOfBookshelf}
							books={loadedBooks}
							onMove={this.moveTheBook}
						/>
					)}
				/>
				<Route /* Rendering the created component  "SearchTheBooks" that loads on the "/search" path */
					path="/search"
					render={()=>(
						<SearchTheBooks
							searchBooks={searchForBooks}
							books={loadedBooks}
							onMove={this.moveTheBook}
							onSearch={this.searchThroughBooks}
							onSearchReset={this.resetSearch}
						/>
					)}
				/>
			</div>
		);
	}
}
	
export default App;
