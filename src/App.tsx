import 'bootstrap/dist/css/bootstrap.css';
import 'open-iconic/font/css/open-iconic-bootstrap.min.css';
import * as React from 'react';
import Routes from './routes';
import './styles/App.css';


interface IAppProps {
    history: History;
}

class App extends React.Component {
    public render() {
        return (
                <Routes />
        );
    }
}

export default App;
