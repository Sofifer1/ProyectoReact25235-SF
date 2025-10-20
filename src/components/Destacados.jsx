import React from "react";
import ProductList from "./ProductList.jsx";

const Destacados= () => {
    return (
        <div>
            <h1>PRODUCTOS DESTACADOS</h1>
            <ProductList category="jewelery" />
        </div>
    );
};

export default Destacados;
