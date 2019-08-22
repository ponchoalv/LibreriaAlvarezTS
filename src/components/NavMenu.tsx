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
import logo from "../assets/logo-small.png";
import { IRoutesProps } from '../types';

interface IState {
    isOpen: boolean;
}

export default class NavMenu extends React.Component<IRoutesProps, IState> {
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
                            <NavLink tag={RRNavLink} exact={true} to={`/`} activeClassName="active">
                                <span className="oi oi-home" aria-hidden="true" />Home
                            </NavLink>
                        </NavItem>
                        <NavItem className="px-3">
                            <NavLink tag={RRNavLink} to={`${this.props.match.url}/list`} activeClassName="active">
                                <span className="oi oi-list-rich" aria-hidden="true" />Lista de Precios
                            </NavLink>
                        </NavItem>
                        <NavItem className="px-3">
                            <NavLink tag={RRNavLink} to={`${this.props.match.url}/upload`} activeClassName="active">
                                <span className="oi oi-cloud-upload" aria-hidden="true" />Cargar Listas
                            </NavLink>
                        </NavItem>
                        <NavItem className="px-3">
                            <NavLink tag={RRNavLink} to={`${this.props.match.url}/sales`} activeClassName="active">
                                <span className="oi oi-dollar" aria-hidden="true" />Ventas
                            </NavLink>
                        </NavItem>
                        <NavItem className="px-3">
                            <NavLink tag={RRNavLink} to={`${this.props.match.url}/logout`} activeClassName="active">
                                <span className="oi oi-account-logout" aria-hidden="true" />Logout
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
