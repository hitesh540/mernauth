import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthService from '../Services/AuthService';
import { AuthContext } from '../Context/AuthContext';
import * as ReactBootstrap from 'react-bootstrap';



const Navbar1 = props =>{
    const {isAuthenticated,user,setIsAuthenticated,setUser} = useContext(AuthContext);
    
    const onClickLogoutHandler = ()=>{
        AuthService.logout().then(data=>{
            if(data.success){
                setUser(data.user);
                setIsAuthenticated(false);
            }
        });
    }

    const unauthenticatedNavBar = ()=>{
        return (
            <>
                <Link to="/">
                    <li className="nav-item nav-link">
                        Home
                    </li>
                </Link>  
                <Link to="/">
                    <li className="nav-item nav-link">
                        Login
                    </li>
                </Link>  
                <Link to="/register">
                    <li className="nav-item nav-link">
                        Register
                    </li>
                </Link>  
            </>
        )
    }

    const authenticatedNavBar = ()=>{
        return(
            <>
                <Link to="/">
                    <li className="nav-item nav-link">
                        Home
                    </li>
                </Link> 
                <Link to="/todos">
                    <li className="nav-item nav-link">
                        Todos
                    </li>
                </Link> 
                <Link to="/profile">
                    <li className="nav-item nav-link">
                    Profile
                    </li>
                </Link> 
                {
                    user.role === "admin" ? 
                    <Link to="/admin">
                        <li className="nav-item nav-link">
                            Admin
                        </li>
                    </Link> : null
                }  
                <button type="button" 
                        className="btn btn-link nav-item nav-link" 
                        onClick={onClickLogoutHandler}>Logout</button>
            </>
        )
    }




    return (
        <>

      <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top"  >
    <ReactBootstrap.Navbar.Brand href="#home">ZYBIT</ReactBootstrap.Navbar.Brand>
    <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootstrap.Nav className="mr-auto">
                         { !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
        {/* <ReactBootstrap.Nav.Link href="#features">Features</ReactBootstrap.Nav.Link>
        <ReactBootstrap.Nav.Link href="#pricing">Pricing</ReactBootstrap.Nav.Link>
        <ReactBootstrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <ReactBootstrap.NavDropdown.Item href="#action/3.1">Action</ReactBootstrap.NavDropdown.Item>
          <ReactBootstrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootstrap.NavDropdown.Item>
          <ReactBootstrap.NavDropdown.Item href="#action/3.3">Something</ReactBootstrap.NavDropdown.Item>
          <ReactBootstrap.NavDropdown.Divider />
          <ReactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootstrap.NavDropdown.Item>
        </ReactBootstrap.NavDropdown> */}
      </ReactBootstrap.Nav>
      <ReactBootstrap.Nav>
        <ReactBootstrap.Nav.Link href="#deets">More deets</ReactBootstrap.Nav.Link>
        <ReactBootstrap.Nav.Link eventKey={2} href="#memes">
          Dank memes
        </ReactBootstrap.Nav.Link>
      </ReactBootstrap.Nav>
    </ReactBootstrap.Navbar.Collapse>
  </ReactBootstrap.Navbar>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/">
                <div className="navbar-brand">NoobCoder</div>
            </Link>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    { !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
                </ul>
            </div>
            </nav> */}
            </>
    )
}

export default Navbar1;