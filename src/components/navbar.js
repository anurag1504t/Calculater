import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { usercontext } from "../App";

import "../css/navbar.css";
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse} from 'reactstrap';


const NavBar=()=> {

    const{state,dispatch}=useContext(usercontext) 
    const [panel, setPanel] = useState(false);
    const history=useHistory()

    function toggleNav () {
        if(!panel) setPanel(true);
        else setPanel(false);
    }

    function toggleFalse () {
        setPanel(false);
    }

    const renderlist=()=>{

           
                return (
                    <React.Fragment>
                    <Navbar dark expand="md">
                        <div className="container"> 
                            <NavbarToggler onClick={toggleNav} />
                                         
                            <NavbarBrand className="mr-auto" href="/"><div className="home-title">RISK CALCULATOR</div></NavbarBrand> 
                            <Collapse isOpen={panel} navbar>                            
                            <Nav navbar>
                                <NavItem className='rout' key="1" >
                                    <Link className="nav-link" to="/about">
                                        <span className="fa fa-home fa-lg"></span> ABOUT
                                    </Link>
                                </NavItem>                    
                                <NavItem className='rout'>
                                    <Link className="nav-link" to="/secLogin">
                                        <span className="fa fa-shopping-bag"></span> LOGIN
                                    </Link>
                                </NavItem>

                                <NavItem className='rout' key="4" onClick={toggleFalse}>
                                    <Link className="nav-link" to="/aboutus">
                                        <span className="fa fa-calendar"></span> TEAM
                                    </Link>
                                </NavItem>
                                
                                <NavItem className='rout' key="2" onClick={toggleFalse}>
                                    <Link className="nav-link" to="/Certification">
                                        <span className="fa fa-shopping-cart"></span> APPRAISAL
                                    </Link>
                                </NavItem>
                             
                            
                            </Nav> 
                            </Collapse>
                        </div>
                    </Navbar>
                    </React.Fragment>                      
                );
  
        }
       
    }
  
  
export default NavBar;
