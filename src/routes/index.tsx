import * as React from 'react';
import { Route, Switch } from 'react-router';
import Home from 'src/components/Home';
import ManageUpload from 'src/containers/ManageUpload';
import ListPrices from 'src/containers/ListPrices';
import NoMatch from 'src/components/NoMatch';
import NavMenu from 'src/components/NavMenu';


// const ListPrices = React.lazy(() => import('src/containers/ListPrices'));
// const ManageUpload = React.lazy(() => import('src/containers/ManageUpload'))

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
                        <Route path="/list" component={ListPrices} />
                        <Route path="/upload" component={ManageUpload} />
                        <Route component={NoMatch} />
                    </Switch>
            </div>
        </div>
    </div>
)

export default routes