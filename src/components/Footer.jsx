import React from "react";  
import {Container, Row, Col} from "react-bootstrap";
//import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 mt-4 text-center">
            <Container>
                <Row>
                    <Col md={6}>    
                        <p className="mb-0">© 2025 Sofia Fernandez Company. Todos los derechos reservados.</p>
                    </Col>
                    <Col md={6}>
                        <p className="mb-0">Síguenos en:     
                           <a
                href="https://www.facebook.com/sofia.fernandez"
                className="text-white mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a
                href="https://www.twitter.com/sofia_fernandez"
                className="text-white mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a
                href="https://www.instagram.com/sofia.fernandez"
                className="text-white mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;