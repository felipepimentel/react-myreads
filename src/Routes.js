import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { LayoutDefault } from './components/Layout'
import Search from './views/Search'
import Home from './views/Home'
import NotFound from './views/NotFound'

const Routes = ({ location }) => {
    return (
        <LayoutDefault>
            <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/search" component={Search} />
                <Route component={NotFound}/>
            </Switch>
        </LayoutDefault>
    )
}

export default withRouter(Routes)