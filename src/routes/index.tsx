import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import NoMatch from 'src/components/NoMatch';
import { IRoutesProps } from 'src/types';


const SecuredRoutes = React.lazy(() => import('./secured'));
const Secured = (props: IRoutesProps) =>
    <React.Suspense fallback={<div><p><em>Cargando...</em></p></div>}>
        <SecuredRoutes {...props} />
    </React.Suspense>

const Login = () => 
<div>
    <Link to="/users">Login</Link>
</div>   

const routes = (
    <Switch>
        <Route exact={true} path="/" component={Login} />
        <Route path="/users" render={Secured} />
        <Route component={NoMatch} />
    </Switch >
)

export default routes
