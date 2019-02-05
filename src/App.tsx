import 'bootstrap/dist/css/bootstrap.css';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import 'open-iconic/font/css/open-iconic-bootstrap.min.css';
import * as React from 'react';
import routes from './routes';
import './styles/App.css';


interface IAppProps {
    history: History;
}

class App extends React.Component<IAppProps> {
    public render() {
        return (
            <ConnectedRouter history={this.props.history}>
                {routes}
            </ConnectedRouter>
        );
    }
}

export default App;
