import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
    static propTypes = {
        book: PropTypes.object,
        onChangeBookShelf: PropTypes.func.isRequired,
    }

    options = [
        { key: 'currentlyReading', title: 'Currently Reading' },
        { key: 'wantToRead', title: 'Want to Read' },
        { key: 'read', title: 'Read' },
        { key: 'none', title: 'None' }
    ]

    handleShelfChange = (e) => {
        e.preventDefault()
        const { book } = this.props
        book.shelf = e.target.value
        this.props.onChangeBookShelf(book)
    }

    render() {
        const { title, authors, imageLinks, shelf } =  this.props.book
        const { smallThumbnail } = imageLinks

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${smallThumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={shelf} onChange={this.handleShelfChange}>
                            <option value="move" disabled>Move to...</option>
                            {this.options.map(({ key, title }) => (
                                <option key={key} value={key}>{title}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        )
    }
}

export default Book 