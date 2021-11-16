import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './CartVista.css'

export const CartVista = () => {
    
    const {carrito,vaciarCarrito,removeItem,calcularTotal,setCantidades} = useContext(CartContext)
   

    return (
        <div className='container pantalla my-5'>
        {
            carrito.length === 0
            ? <>
                <h2>Aun no tiene productos agregados</h2>
                <Link to="/" className="btn btn-success">Conozca nuestros productos!</Link>
              </>
            :
            <>
        
            <h2>Resumen de compra</h2>

            <hr/>
            
            
            {
               
                carrito.map( (prod,index) => (
                    <div>
                       <table>
                           {index === 0
                           ?
                           <>
                           <tr className="encabezado">
                               <th className="celda1">Articulo</th>
                               <th>Cantidad</th>
                               <th>Precio</th>
                               <th></th>
                           </tr>
                           <tr>
                              <th className="celda1"><h4>{prod.nombre}</h4></th>
                              <th><p> {prod.cantidad}</p></th>
                              <th><p> {prod.precio * prod.cantidad}</p></th>
                              <th><button className="btn btn-primary mx-1" onClick={(e) => setCantidades(prod.id, 1,prod.stock,prod.cantidad)} >
                                    <strong>+</strong>
                                    </button>
                                    <button className="btn btn-primary mx-1" onClick={(e) => setCantidades(prod.id, -1,prod.stock,prod.cantidad)} >
                                    <strong>-</strong>
                                    </button>
                              <button className="btn btn-danger" onClick={() => removeItem(prod.id)}><BsFillTrashFill/></button></th>
                            </tr>
                           </>
                           :
                           <>
                            <tr>
                              <th className="celda1"><h4>{prod.nombre}</h4></th>
                              <th><p> {prod.cantidad}</p></th>
                              <th><p> {prod.precio * prod.cantidad}</p></th>
                              <th> <button className="btn btn-primary mx-1" onClick={(e) => setCantidades(prod.id, 1,prod.stock,prod.cantidad)} >
                                    <strong>+</strong>
                                    </button>
                                    <button className="btn btn-primary mx-1" onClick={(e) => setCantidades(prod.id, -1,prod.stock,prod.cantidad)} >
                                    <strong>-</strong>
                                    </button>
                              <button className="btn btn-danger" onClick={() => removeItem(prod.id)}><BsFillTrashFill/></button></th>
                            </tr>
                            </>}
                        </table>
                           
                    </div>
                ))
            }
            <hr/>
            <h3 className="my-3">Precio total: ${calcularTotal()}</h3>
            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>

            <Link to="/checkout" className="btn btn-success mx-3">
                Finalizar Compra
            </Link>
            </>
        }

        
        </div>
    )
}
