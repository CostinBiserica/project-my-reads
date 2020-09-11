/* Importing everything neeeded to create the shelf switcher */
import React from 'react'

class ShelfSwitcher extends React.Component {
    /* Defining the initial state of the component */
    state = {
        value : this.props.shelf,
        book : this.props.book
    }

    handleChange = event=>{
        const {value} =event.target
        this.setState({value })
        this.props.onMove(this.state.book, value)
    }

    render() {
        return(
            <div className="book-shelf-changer">
                <select /* Creating the selector to switch the shelf the book will move to */
                    value = {this.state.value}
                    onChange = {this.handleChange}> 
                    <option value="move" disabled>
                        Move book to ..
                    </option>
                    <option value="currentlyReading">
                        Currently Reading
                    </option>
                    <option value="wantToRead">
                        Want To Read
                    </option>
                    <option value="read">
                        Read
                    </option>
                    <option value="none">
                        None
                    </option> 
                </select>
            </div>
        )
    }
}
export default ShelfSwitcher