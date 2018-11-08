import React, { PureComponent } from 'react'
import Book from '../components/Book'
import PropTypes from 'prop-types'
import { Col, Row, CardDeck } from 'reactstrap';

class Shelf extends PureComponent {
    static propTypes = {
        books: PropTypes.array.isRequired,
        title: PropTypes.string,
        onChangeBookShelf: PropTypes.func.isRequired,
    }
    render() {
        const { title, books } = this.props
        return (
            <Row>
                <Col>
                    <h4 className="bookshelf-title">{title}</h4>
                    <div className="bookshelf-books">
                        <CardDeck>
                            {books.map((book) =>
                                <Book key={book.id} book={book} onChangeBookShelf={this.props.onChangeBookShelf} />
                            )}
                        </CardDeck>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Shelf