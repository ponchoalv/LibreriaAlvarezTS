import * as React from "react";
import { Route, Switch, Router } from "react-router";
import NoMatch from "../components/NoMatch";
import { IRoutesProps, IStoreState, ILoginState } from "../types";
import Login from "../containers/Login";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";
import { Logout } from "../actions/loginActions";

const history = createBrowserHistory();

const SecuredRoutes = React.lazy(() => import("./secured"));
const Secured = (props: IRoutesProps) => (
  <React.Suspense
    fallback={
      <div>
        <p>
          <em>Cargando...</em>
        </p>
      </div>
    }
  >
    <SecuredRoutes {...props} />
  </React.Suspense>
);

const mapStateToProps = ({ login }: IStoreState) => {
  return {
    login
  };
};

const mapDispatchToProps = {
  logout: Logout
};

interface IProps {
  login: ILoginState;
  logout: () => void;
}

const Routes = (props: IProps) => (
  <Router history={history}>
    <Switch>
      <Route
        exact={true}
        path="/"
        component={() => {
          if (props.login.loginToken === null) {
            return <Login />;
          }
          return <Redirect to="/users" />;
        }}
      />
      <Route
        exact
        path="/users/logout"
        component={() => {
          props.logout();
          return <Redirect to="/" />;
        }}
      />
      <Route path="/users" render={Secured} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
