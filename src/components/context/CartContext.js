import React, { createContext } from "react";
import { useEffect, useState } from "react";

const init = JSON.parse(localStorage.getItem('carrito')) || []


export const CartContext = createContext()

export const CartProvider = ( {children} ) => {

    const [carrito, setCarrito] = useState(init)

    
  
    const addToCart = (item) => {
      setCarrito( [...carrito, item])  
    }
  
    
  
    const calcularCantidad = () => {
      const valor = carrito.reduce( (acc, prod) => acc + prod.cantidad, 0 )
      
      return valor //esta funcion recorre todos los objetos acumulados y va sumando el atributo cantidad para darme el total del carrito
      
    }

    const calcularTotal = () => {
        return carrito.reduce( (acc,prod) => acc + prod.cantidad * prod.precio, 0)
    }

    const yaAgregado = (itemId) => {
        return carrito.some( (prod) => prod.id === itemId)
    }

    const removeItem = (itemid) => {
      const newCart = carrito.filter( (prod) => prod.id !== itemid)
      setCarrito( newCart )
    }

    const setCantidades = (prod, monto,stock,cantidad) => {
      console.log("el stock es: " + stock)
      if ((cantidad + monto) > 0 && (cantidad + monto) <= stock)
      {

      
        let newCarrito = carrito.map(item => item.id === prod ? {
        
          ...item,
                  cantidad: item.cantidad + monto
        } : item)
        setCarrito(newCarrito);
      }
    }
  
    const vaciarCarrito = () => {
      setCarrito([])
    }
    
   //  <CartContext.Provider value={{addToCart,calcularCantidad,removeItem,carrito,vaciarCarrito}}>
    useEffect(() =>{
      localStorage.setItem('carrito', JSON.stringify(carrito))
    },[carrito])

    return (
        <CartContext.Provider value={ {carrito,addToCart,removeItem,calcularCantidad,vaciarCarrito,yaAgregado,calcularTotal,setCantidades}
        

        }>
            {children}
        </CartContext.Provider>
    )
}