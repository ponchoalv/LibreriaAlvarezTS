import * as React from 'react'
import { Route, Switch } from 'react-router'
import Home from 'src/components/Home'
import NoMatch from 'src/components/NoMatch'
import Hello from 'src/containers/Hello'
import ListPrices from "src/containers/ListPrices";
import NavMenu from 'src/components/NavMenu'

const routes = (
    <div className="app">
        <NavMenu />
        <div className="main">
            <div className="top-row px-4">
                <a href="https://libreria-alvarez.net" target="_blank" className="ml-md-auto">Acerca</a>
            </div>
            <div className="content px-4">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/enthusiasm" component={Hello} />
                    <Route path="/list" component={ListPrices} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </div>
    </div>
)

export default routes