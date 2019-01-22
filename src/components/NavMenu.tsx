import * as React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

interface State {
    isOpen: boolean;
}

export default class NavMenu extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="sidebar">
                <Navbar className="top-row pl-4" dark>
                    <NavbarBrand href="/">Librería Álvarez</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                </Navbar>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav vertical>
                        <NavItem className="px-3">
                            <NavLink href="" active>
                                <span className="oi oi-home" aria-hidden="true"></span> Home
                            </NavLink>
                        </NavItem>
                        <NavItem className="px-3">
                            <NavLink href="" >
                                <span className="oi oi-list-rich" aria-hidden="true"></span> Lista de Precios
                            </NavLink>
                        </NavItem>
                        <NavItem className="px-3">
                            <NavLink href="" >
                                <span className="oi oi-cloud-upload" aria-hidden="true"></span> Cargar Lista de Precios
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        );
    }
}
