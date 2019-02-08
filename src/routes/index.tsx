import * as React from 'react';
import { Route, Switch } from 'react-router';
import NoMatch from 'src/components/NoMatch';
import { IRoutesProps } from 'src/types';


const SecuredRoutes = React.lazy(() => import('./secured'));
const Secured = (props: IRoutesProps) =>
    <React.Suspense fallback={<div><p><em>Cargando...</em></p></div>}>
        <SecuredRoutes {...props} />
    </React.Suspense>

const routes = (
    <Switch>
        <Route path="/secured" render={Secured} />
        <Route component={NoMatch} />
    </Switch >
)

export default routes
