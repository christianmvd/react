import React from 'react'
import { Link , NavLink } from 'react-router-dom'
import {Imagenes} from "../../assets/index";
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css'
import {Navbar,Nav,Container} from 'react-bootstrap'

export const NavBar = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <NavLink activeClassName={'navIt'} exact to="/"><img height="80" width="auto" src={Imagenes[4]}/></NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                      <NavLink className="navIt" activeClassName={'activeLink'} exact to="/inicio">Inicio</NavLink>
                      <NavLink className="navIt" activeClassName={'activeLink'} exact to="/productos/equipos">Equipos</NavLink>
                      <NavLink className="navIt" activeClassName={'activeLink'} exact to="/productos/almacenamientos">Almacenamiento</NavLink>
                      <NavLink className="navIt" activeClassName={'activeLink'} exact to="/productos/redes">Redes</NavLink>
                      <NavLink className="navIt" activeClassName={'activeLink'} exact to="/productos/procesadores">Procesadores</NavLink>
                      <NavLink className="navIt" activeClassName={'activeLink'} exact to="/productos/motherboards">Motherboards</NavLink>              
                    </Nav>
                    
                    <NavLink className="navIt" exact to="/cart"><CartWidget/></NavLink>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
              
        </>
    )
}
