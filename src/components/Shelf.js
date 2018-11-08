import React, { Component } from 'react'
import Book from '../components/Book'
import PropTypes from 'prop-types'

class Shelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        title: PropTypes.string,
        onChangeBookShelf: PropTypes.func.isRequired,
    }
    render() {
        const { title, books } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => 
                            <li key={book.id}> <Book book={book} onChangeBookShelf={this.props.onChangeBookShelf}/> </li>
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf