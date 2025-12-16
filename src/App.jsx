import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Home from './components/Home';
import Ofertas from './components/Ofertas';
import Destacados from './components/Destacados';
import Login from './components/Login';
import Footer from './components/Footer'
import Carrito from './components/Carrito';
import CrudProductos from './components/CrudProductos';
 
function App() {
 
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/Destacados" element={<Destacados />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/crud" element={<CrudProductos />} />
      </Routes>
      <Footer/>
    </Router>
  )
}
 
export default App
 
 