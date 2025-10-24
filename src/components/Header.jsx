import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/Logo_react.png";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
            <Container>
                {/* LOGO + NOMBRE */}
                <Navbar.Brand href="/" className="d-flex align-items-center">
                    <img
                        src={logo}
                        alt="Sofia's Shop Logo"
                        className="d-inline-block align-top me-2 rounded-circle"
                        style={{ width: "40px", height: "40px", objectFit: "cover" }}
                    />
                    <span className="fs-4 fw-bold text-light">Sofia's Shop</span>
                </Navbar.Brand>


                <Nav className="ms-auto align-items-center">
                    <Nav.Link href="/" className="me-3">Inicio</Nav.Link>
                    <Nav.Link href="/ProductList" className="me-3">Productos</Nav.Link>
                    <Nav.Link href="/Ofertas" className="me-3">Ofertas</Nav.Link>
                    <div className="d-flex align-items-center">
                        <Button variant="outline-primary" href="/Administración" className="me-2">
                            Administración
                        </Button>
                        <Nav.Link href="/Carrito" className="text-white">
                            <FontAwesomeIcon icon={faShoppingCart} size="lg" /> Carrito
                        </Nav.Link>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
