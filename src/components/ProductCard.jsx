import React from 'react';
import {Card, Button} from 'react-bootstrap';

const ProductCard = ({product, onAgregarAlCarrito}) => {
    return (
        <Card>
            <Card.Img variant="top" 
            src={product.image} 
            alt={product.title} />
            <Card.Body className="d-flex flex-column">      
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description.slice(0, 100)}...</Card.Text>
                <Card.Text>
                <strong>Precio: ${product.price}</strong>
                </Card.Text>
                <Button variant="primary" onClick={() => onAgregarAlCarrito(product)}>
                    Agregar al carrito
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
