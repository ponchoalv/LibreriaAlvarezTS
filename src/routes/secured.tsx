import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import Home from '../components/Home';
import NavMenu from '../components/NavMenu';
import NoMatch from '../components/NoMatch';
import ListPrices from '../containers/ListPrices';
import ManageUpload from '../containers/ManageUpload';
import { IRoutesProps } from '../types';

const Secured = ({ match }: IRoutesProps) =>  <div className="app">
    <NavMenu match={match} />
    <div className="main">
        <div className="top-row px-4">
            <Link to="/" className="ml-md-auto">logout</Link>
        </div>
        <div className="content px-4">
            <Switch>
                <Route exact={true} path={`${match.url}`} component={Home} />
                <Route exact={true} path={`${match.url}/list`} component={ListPrices} />
                <Route exact={true} path={`${match.url}/upload`} component={ManageUpload} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    </div>
</div>

export default Secured;