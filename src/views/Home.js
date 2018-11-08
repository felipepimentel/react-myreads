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
            <React.Fragment>
                <h1 className="mt-5">Meus Livros</h1>
                <div className="list-books-content">

                    {[...shelfs].map(([key, value]) =>

                        <Shelf key={key} title={value.title} books={value.books} onChangeBookShelf={this.props.onChangeBookShelf} />

                    )}

                </div>
            </React.Fragment>
        )
    }
}

export default Home