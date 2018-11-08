import React, { Component } from 'react'
import Shelf from '../components/Shelf';
import { aggregateMyBooks } from '../utils/Helper'
import PropTypes from 'prop-types'

class Home extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeBookShelf: PropTypes.func.isRequired,
    }
    render() {
        const shelfs = aggregateMyBooks(this.props.books);
        return (
            <div className="list-books-content">
                <ul>
                    {[...shelfs].map(([key, value]) =>
                        <li key={key}>
                            <Shelf title={value.title} books={value.books} onChangeBookShelf={this.props.onChangeBookShelf} />
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Home