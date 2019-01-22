import * as React from 'react';
import NavMenu from "./components/NavMenu";
import "open-iconic/font/css/open-iconic-bootstrap.min.css"
import './MainLayout.css';

class MainLayout extends React.Component {
    public render() {
        return (
            <div className="app">
                <NavMenu />
                <div className="main">
                    <div className="top-row px-4">
                        <a href="https://libreria-alvarez.net" target="_blank" className="ml-md-auto">Acerca</a>
                    </div>
                    <div className="content px-4">
                       <h1>Librería alvarez</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainLayout;
