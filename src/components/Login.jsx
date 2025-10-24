import React from "react";
import { Navbar, Nav, Container, Row, Col, Card,Form,Button } from "react-bootstrap";

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        alert("Login submitted");
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6} lg={4}>
                    <Card className="shadow- lg p-4">
                        <Card.Body>
                            <h2 className="text-center">Iniciar Sesión</h2>

                            <form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formUsername">                                    
                                    <Form.Label>Usuario</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese su usuario" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Ingrese su email" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="Ingrese su contraseña" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Iniciar Sesión
                                </Button>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
