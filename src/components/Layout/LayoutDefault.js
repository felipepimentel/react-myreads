import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

class LayoutDefault extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main role="main" className="container">
                    {this.props.children}
                </main>
                <Footer />
            </React.Fragment>
        )
    }
}

export default LayoutDefault
