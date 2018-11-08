import React, { Component } from 'react'
import { Loading } from './components/Layout'
import { getAll } from './utils/BooksAPI'
import { withRouter, Switch, Route } from 'react-router-dom'
import { LayoutDefault } from './components/Layout'
import Search from './views/Search'
import Home from './views/Home'
import NotFound from './views/NotFound'
import { aggregateMyBooks } from './utils/Helper'

import './App.css'

class App extends Component {
  state = {
    shelfs: [],
    loading: true
  }

  componentDidMount() {
    getAll().then((books) => {
      const shelfs = aggregateMyBooks(books)
      this.setState(() => ({
        shelfs,
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
          <Route exact path="/" render={() => <Home shelfs={this.state.shelfs}/>} />
          <Route path="/search" component={Search} />
          <Route component={NotFound} />
        </Switch>
      </LayoutDefault>
    )
  }
}

export default withRouter(App)
