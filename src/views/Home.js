import React, { Component } from 'react'
import Shelf from '../components/Shelf';
import { Scheduler } from 'rxjs';

class Home extends Component {
    render() {
        const { shelfs } = this.props;
        console.log([...shelfs])
        return (
            <div className="list-books-content">
                <ul>
                    {[...shelfs].map(([key, value]) =>
                        <li key={key}>
                            <Shelf title={value.title} books={value.books} />
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Home