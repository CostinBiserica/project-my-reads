/* Importing everything needed to create the Component */
import React from 'react'

class SearchInput extends React.Component{
    /* Setting the initial state */

    state ={
        value:'',
        onSearch: this.props.onSearch
    }
    /* Function that runs when the input changes */
    handleChange = event =>{
        const newSearch = event.target.value;
        console.log(newSearch)
        this.setState({ value: newSearch}, ()=>{
        this.state.onSearch(newSearch)})
}
    render(){
        return(
            <div className="search-books-input-wrapper">
                <input 
                    type="text"
                    value={this.state.value}
                    placeholder="Search for a desired book by title or author"
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}
export default SearchInput