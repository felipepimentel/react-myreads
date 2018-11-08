import React from 'react'
import { Link } from 'react-router-dom'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = () => {
    return (
        <header>

            <Navbar className="navbar navbar-expand-md navbar-dark bg-dark">
                <NavbarBrand href="/">My Reads</NavbarBrand>

                <Nav navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/search">Buscar Livros</NavLink>
                    </NavItem>
                </Nav>

            </Navbar>

        </header>
    );
}

export default Header
