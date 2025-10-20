import React from "react";  
import {Container, Row, Col} from "react-bootstrap";
//import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 mt-4 text-center">
            <Container>
                <Row>
                    <Col md={6}>    
                        <p className="mb-0">© 2025 Sofia Fernandez Company. All rights reserved.</p>
                    </Col>
                    <Col md={6}>
                        <p className="mb-0">Follow us on 
                            <a href="https://www.facebook.com/sofia.fernandez" className="text-white mx-2">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="https://www.twitter.com/sofia_fernandez" className="text-white mx-2">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/sofia.fernandez" className="text-white mx-2">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
