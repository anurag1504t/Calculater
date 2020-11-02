import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import "../css/navbar.css";
class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        

        this.state = {
            isNavOpen: true,
           
        };
    }

    toggleNav() {
        this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    }

   

    render() {
        return(
            <React.Fragment>
                <Navbar dark expand="md" background-color=" #232f3e">
                    
                        {/* <NavbarToggler onClick={this.toggleNav} /> */}
                        <NavbarBrand className="mr-auto" href="/">RISK CALCULATOR     </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <Link className="nav-link" to="/about">
                                    <span className="fa fa-home fa-lg"></span> Home
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg"></span>TEAM
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/CALCULATOR">
                                    <span className="fa fa-list fa-lg"></span> CALCULATOR
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/certification">
                                    <span className="fa fa-address-card fa-lg"></span> APPRICIATION
                                </Link>
                            </NavItem>
                        </Nav>
                       
                    </Collapse>
                            
                            </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;