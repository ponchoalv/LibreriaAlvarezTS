import * as React from 'react';
import { Route, Switch } from 'react-router';
import NoMatch from 'src/components/NoMatch';


const SecuredRoutes = React.lazy(() => import('./secured'));
const Secured = () =>
    <React.Suspense fallback={<div><p><em>Cargando...</em></p></div>}>
        <SecuredRoutes />
    </React.Suspense>

const routes = (
    <Switch>
        <Route path="/secured" render={Secured} />
        <Route component={NoMatch} />
    </Switch >
)

export default routes
