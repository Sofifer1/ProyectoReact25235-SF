import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx';
import Ofertas from './components/Ofertas.jsx';
import Destacados from './components/Destacados.jsx';
import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import Footer from './components/Footer.jsx';
import ProductList from './components/ProductList.jsx';
import Carrito from './components/Carrito.jsx';
//import 'font-awesome/css/font-awesome.min.css';

function App() {
 
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/administración" element={<Login/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/Ofertas' element={<Ofertas/>} />
        <Route path='/Destacados' element={<Destacados/>} />
        <Route path='/ProductList' element={<ProductList/>} />
        <Route path='/Carrito' element={<Carrito/>} />

      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
