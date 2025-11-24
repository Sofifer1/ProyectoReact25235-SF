import { Children } from "react";

export const CartContext = (Children) => {
    const [carrito, setCarrito] = useState([]); 



    //agregar al carrito
    const agregarAlCarrito = (producto) => {
        setCarrito((prevCarrito) => {
            const existe= prevCarrito.find((item) => item.id === producto.id);
            if (existe) {
                //si ya existe, aumentar la cantidad
                return prevCarrito.map((item) =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            } else {
                //si no existe, agregar al carrito con cantidad 1
                return [...prevCarrito, { ...producto, cantidad: 1 }];
            }
        });
    };

    //remover del carrito
    const eliminarDelCarrito = (id) => {
        setCarrito((prevCarrito) =>
            prevCarrito.reduce((acc, item) => {
                if (item.id === id) {
                    if (item.cantidad > 1) {
                        acc.push({ ...item, cantidad: item.cantidad - 1 });
                    }
                } else {
                    acc.push(item);
                }
                return acc;
            }, [])
        );
    };

    //vaciar carrito
    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <CartContext.Provider
            value={{
                carrito,
                agregarAlCarrito,
                eliminarDelCarrito,
                vaciarCarrito
            }}
        >
            {Children}
        </CartContext.Provider>
    );
};