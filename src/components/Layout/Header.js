import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav>
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="search">Search</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header
