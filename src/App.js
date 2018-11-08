import React, { Component } from 'react'
import { Loading } from './components/Layout'
import { getAll, update } from './utils/BooksAPI'
import { withRouter, Switch, Route } from 'react-router-dom'
import { LayoutDefault } from './components/Layout'
import Search from './views/Search'
import Home from './views/Home'
import NotFound from './views/NotFound'

import './App.css'

class App extends Component {

  state = {
    books: [],
    loading: true
  }

  onChangeBookShelf = (book) => {
    update(book, book.shelf).then((result) => {
      this.setState((currentState) => ({
        books: currentState.books.filter((p) => p.id !== book.id)
      }))

      if (book.shelf !== 'none')
        this.setState((currentState) => ({
          books: currentState.books.concat([book])
        }))
    })
  }

  componentDidMount() {
    getAll().then((books) => {
      this.setState(() => ({
        books,
        loading: false
      }))
    })
  }

  render() {
    if (this.state.loading)
      return <Loading />

    return (
      <LayoutDefault>
        <Switch location={this.props.location}>
          <Route exact path="/" render={() => <Home books={this.state.books} onChangeBookShelf={this.onChangeBookShelf} />} />
          <Route path="/search" render={() => <Search onChangeBookShelf={this.onChangeBookShelf} books={this.state.books} />} />
          <Route component={NotFound} />
        </Switch>
      </LayoutDefault>
    )
  }
}

export default withRouter(App)
