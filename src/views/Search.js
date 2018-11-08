import React, { Component } from 'react'
import { search } from '../utils/BooksAPI'
import Book from '../components/Book'
import PropTypes from 'prop-types'

class Search extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeBookShelf: PropTypes.func.isRequired,
    }
    state = {
        books: []
    }

    clearBooks = () => {
        this.setState(() => ({
            books: []
        }))
    }


    updateQuery = (query) => {
        query = query.trim()

        search(query)
            .then((books) => {
                if (books.error)
                    return []

                const myBooks = this.props.books
                books.map((book) => {
                    const foundBook = myBooks.find((myBook) => myBook.id === book.id)
                    book.shelf = foundBook ? foundBook.shelf : 'none'
                })
                return books
            })
            .then((books) => {
                this.setState(() => ({
                    books
                }))
            }).catch((err) => {
                this.clearBooks()
            })
    }

    componentDidMount() {
        this.searchInput.focus();
    }

    render() {
        const { query, books } = this.state
        const { onChangeBookShelf } = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={(event) => this.updateQuery(event.target.value)}
                            ref={(input) => {
                                this.searchInput = input;
                            }}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">

                        {books.length > 0 && books.map((book) => (
                            <li key={book.id}><Book book={book} onChangeBookShelf={onChangeBookShelf} /></li>
                        ))}

                    </ol>
                </div>
            </div>
        )
    }
}

export default Search