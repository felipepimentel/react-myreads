import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle
} from 'reactstrap';

class Book extends PureComponent {
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
        const { title, authors, imageLinks, shelf } = this.props.book
        const smallThumbnail = imageLinks ? imageLinks.smallThumbnail : ''

        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>{title}</CardTitle>
                        <CardSubtitle>{authors}</CardSubtitle>
                    </CardBody>
                    <div className="book-cover" style={{ width: 198, height: 193, backgroundImage: `url(${smallThumbnail})` }}></div>
                    <CardBody>
                        <div className="book-shelf-changer">
                            <select value={shelf} onChange={this.handleShelfChange}>
                                <option value="move" disabled>Move to...</option>
                                {this.options.map(({ key, title }) => (
                                    <option key={key} value={key}>{title}</option>
                                ))}
                            </select>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Book 