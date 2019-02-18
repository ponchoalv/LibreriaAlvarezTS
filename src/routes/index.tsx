import * as React from 'react';
import { Route, Switch } from 'react-router';
import NoMatch from '../components/NoMatch';
import { IRoutesProps } from '../types';
import Login from '../containers/Login';


const SecuredRoutes = React.lazy(() => import('./secured'));
const Secured = (props: IRoutesProps) =>
    <React.Suspense fallback={<div><p><em>Cargando...</em></p></div>}>
        <SecuredRoutes {...props} />
    </React.Suspense>

const routes = (
    <Switch>
        <Route exact={true} path="/" component={Login} />
        <Route path="/users" render={Secured} />
        <Route component={NoMatch} />
    </Switch >
)

export default routes
