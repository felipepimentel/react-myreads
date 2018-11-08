import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

class LayoutDefault extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header />

                <section className="section-container">
                    { this.props.children }
                </section>

                <Footer />
            </div>
        )
    }
}

export default LayoutDefault
