import * as React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink
    } from 'reactstrap';
import logo from "src/assets/logo-small.png";

interface IState {
    isOpen: boolean;
}

export default class NavMenu extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    public render() {
        return (
            <div className="sidebar">
                <Navbar className="top-row pl-4" dark={true}>
                    <NavbarBrand href="/"><img className="home-logo" width="35" height="35" src={logo}  alt="Librería Alvarez" />Librería Álvarez</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                </Navbar>
                <Collapse isOpen={this.state.isOpen} navbar={true}>
                    <Nav vertical={true}>
                        <NavItem className="px-3">
                            <NavLink tag={RRNavLink} exact={true} to="/" activeClassName="active">
                                <span className="oi oi-home" aria-hidden="true" />Home
                            </NavLink>
                        </NavItem>
                        <NavItem className="px-3">
                            <NavLink tag={RRNavLink} to="/list" activeClassName="active">
                                <span className="oi oi-list-rich" aria-hidden="true" />Lista de Precios
                            </NavLink>
                        </NavItem>
                        <NavItem className="px-3">
                            <NavLink tag={RRNavLink} to="/upload" activeClassName="active">
                                <span className="oi oi-cloud-upload" aria-hidden="true" />Cargar Listas
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        );
    }
    private toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}
