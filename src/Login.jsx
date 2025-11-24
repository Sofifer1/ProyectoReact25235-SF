/*import React,{useState} from "react";
const Login=()=>{
    const navigate=useNavigate();
    const handlesubmit=(e)=>{
        e.preventDefault();
       if(user==="admin" && password==="admin"){
        navigate("/crudProductos ");        
        
       }
       */
import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

//import { useAuthContext } from '../context/AuthContext'; 
 
function Login() { 
  const [usuario, setUsuario] = useState(''); 
  const [password, setPassword] = useState(''); 
  //const { login } = useAuthContext(); 
  const navigate = useNavigate(); 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    // Simulación de autenticación 
    if (usuario === 'admin' && password === '1234') { 
      login(usuario); 
      navigate('/dashboard'); 
    } else { 
      alert('Credenciales incorrectas'); 
    } 
  }; 
 
  return ( 
   /* <form onSubmit={handleSubmit}> 
      <h2>Iniciar sesión</h2> 
      <div> 
        <label>Usuario:</label> 
        <input 
          type=\text\ 
          value={usuario} 
          onChange={(e) => setUsuario(e.target.value)} 
        /> 
      </div> 
      <div> 
        <label>Contraseña:</label> 
        <input 
          type=\password\ 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        /> 
      </div> 
      <button type=\submit\>Iniciar sesión</button> 
    </form> 
    );  
}*/
 <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={4}>
          <Card className="shadow-lg p-4">
            <Card.Body>
              <h2 className="text-center mb-4">Iniciar Sesión</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control type="text" value={user} onChange={e => setUser(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" value={pass} onChange={e => setPass(e.target.value)} required />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Ingresar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;