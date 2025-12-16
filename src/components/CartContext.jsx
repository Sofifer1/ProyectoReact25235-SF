import React, { createContext, useState, useMemo, useEffect } from 'react';
 
// Crear el contexto
export const CartContext = createContext();
 
// Función para cargar el carrito desde localStorage
const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem('carrito');
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error('Error al cargar el carrito:', error);
    return [];
  }
};
 
// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(loadCartFromStorage);
 
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);
 
  // Agregar producto al carrito
  const onAgregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const existe = prevCarrito.find(item => item.id === producto.id);
      if (existe) {
        // Si ya existe, aumentar la cantidad
        return prevCarrito.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      // Si no existe, agregarlo con cantidad 1
      return [...prevCarrito, { ...producto, cantidad: 1 }];
    });
  };
 
  // Eliminar producto por ID
  const eliminarDelCarrito = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter(item => item.id !== id));
  };
 
  // Vaciar el carrito (opcional)
  const vaciarCarrito = () => {
    setCarrito([]);
  };
 
  const value = useMemo(() => ({
    carrito,
    setCarrito,
    onAgregarAlCarrito,
    eliminarDelCarrito,
    vaciarCarrito
  }), [carrito]);
 
  return (
    <CartContext.Provider
      value={value}
    >
      {children}
    </CartContext.Provider>
  );
};