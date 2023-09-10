import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'


// *REACTSTRAP

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>
            <Navbar className="px-3" color="dark" dark expand="md">
                <NavbarBrand>
                    <Link to="/">
                        <img src={logo} alt="logo" className="logo" />
                    </Link>
                </NavbarBrand>

                <NavbarToggler onClick={toggle} />
                <Collapse className="px-3 text-center" isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>

                        <NavItem>
                            <NavLink>
                                <Link to="/productlist">
                                    Products
                                </Link>
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/about">
                                <Link to="/about">
                                    About
                                </Link>
                            </NavLink>
                        </NavItem>


                        <NavItem>
                            <NavLink href="/contact">
                                <Link to="/contact">
                                    Contact
                                </Link>
                            </NavLink>
                        </NavItem>


                        <NavItem>
                            <NavLink>
                                <Link to="/signup">
                                    <span className="mr-2">
                                        <i className="fas fa-user"></i>
                                        Register
                                    </span>
                                </Link>


                            </NavLink>

                        </NavItem>

                        <NavItem>
                            <NavLink>
                                <Link to="/cart">
                                    <span className="mr-2">
                                        <i className="fas fa-cart-plus"></i>
                                        Cart
                                    </span>
                                </Link>


                            </NavLink>

                        </NavItem>



                    </Nav>

                </Collapse>
            </Navbar>
        </React.Fragment>
    );
}

export default Example;
