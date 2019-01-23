import * as React from 'react';
import { History } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import routes from "./routes";
import "open-iconic/font/css/open-iconic-bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


interface AppProps {
    history: History;
}

class App extends React.Component<AppProps> {
    public render() {
        return (
            <ConnectedRouter history={this.props.history}>
                {routes}
            </ConnectedRouter>
        );
    }
}

export default App;
