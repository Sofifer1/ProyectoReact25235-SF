import React, {useEffect, useState} from "react";
import {Row, Col} from "react-bootstrap";
import ProductCard from "./ProductCard.jsx";

const ProductList = ({ category = null}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
//efectos secundarios con la rederizacion del proyecto
    useEffect(() => {
        let url = 'https://fakestoreapi.com/products';
        if (category) {
            url = `https://fakestoreapi.com/products/category/${category}`;
         }
        // Fetch products based on category
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching products:", err);
                setLoading(false);
            });
    }, [category]);

   const handleAgregarAlCarrito = (product) => {
       console.log("Producto agregado al carrito:", product);
   };

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    return (
        <Row>
            {products.map(product => (
                <Col key={product.id} className="mb-4">
                    <ProductCard product={product} onAgregarAlCarrito={handleAgregarAlCarrito} />
                </Col>
            ))}
        </Row>
    );
};

export default ProductList;
