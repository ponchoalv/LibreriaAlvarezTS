import * as React from 'react';
import { Route, Switch } from 'react-router';
import Home from 'src/components/Home';
import NavMenu from 'src/components/NavMenu';
import NoMatch from 'src/components/NoMatch';
import ListPrices from 'src/containers/ListPrices';
import ManageUpload from 'src/containers/ManageUpload';

const routes = (
    <div className="app">
        <NavMenu />
        <div className="main">
            <div className="top-row px-4">
                <a href="https://libreria-alvarez.net" target="_blank" className="ml-md-auto">Acerca</a>
            </div>
            <div className="content px-4">
                    <Switch>
                        <Route exact={true} path="/" component={Home} />
                        <Route path="/list" component={ListPrices} />
                        <Route path="/upload" component={ManageUpload} />
                        <Route component={NoMatch} />
                    </Switch>
            </div>
        </div>
    </div>
)

export default routes