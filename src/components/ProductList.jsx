import React, {useEffect, useState} from "react";
import {Row, Col} from "react-bootstrap";
import ProductCard from "./ProductCard.jsx";

const ProductList = ({ category = null}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        // Fetch products based on category
        const fetchProducts = async () => {
            const response = await fetch(`/api/products?category=${category}`);
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, [category]);

    return (
        <div>
            <h1>OFERTAS ESPECIALES</h1>
            <ProductList category="Remeras" />
        </div>
    );
};

export default ProductList;
