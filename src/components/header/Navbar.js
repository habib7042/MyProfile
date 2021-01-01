import React from 'react';
import Logo from "../../assets/logo.png"
//Component
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//Style File
import './navbar.style.css'

const MyNavbar = () => {
    return (
        <div>
            <Navbar
            fixed ="top"
            variant ="dark"
            expand ="md"
            className= "animate-navbar nav-theme justify-content-between"
            >
                <div>
                    <Navbar.Brand href ="#home">
                        <img src={Logo} className="logo" alt ="logo"/>
                    </Navbar.Brand>
                </div>
                <div>
                    <Navbar.Toggle aria-controls ="basic-navbar-nav"/>
                    <Navbar.Collapse id = "basic-navbar-nav">
                        <Nav className= "mr-auto">
                            <Nav.Link className='nav-style' href = "#home">Home</Nav.Link>
                            <Nav.Link href = "#about">About</Nav.Link>
                            <Nav.Link href = "#skills">Skills</Nav.Link>
                            <Nav.Link href = "#experience">Experience</Nav.Link>
                            <Nav.Link href = "#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>

            </Navbar>
        </div>
    )
}

export default MyNavbar;
