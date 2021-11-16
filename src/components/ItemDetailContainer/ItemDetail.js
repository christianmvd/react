import React, { useContext, useState } from 'react'
import "./ItemDetail.css"
import { useHistory } from 'react-router'
import { ItemCount } from '../ItemCount/ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'



export const ItemDetail = ({ id, nombre, precio, img, descripcion, categoria, stock} ) => {

    const {goBack, push} = useHistory()

    const {addToCart,yaAgregado} = useContext(CartContext)

    

    const [cantidad, setCantidad] = useState(0)

    const handleAgregar = () => {
        const newItem = {
            id,
            nombre,
            precio,
            categoria,
            cantidad,
            stock
        }
       
            addToCart(newItem)
        
        
       
    }


    return (
        <div className="container">
            <h2>{nombre}</h2>
            <img width="480px" height="480px" src={img} alt={nombre}/>
            <p>{descripcion}</p>
            <h4>Precio: ${precio}</h4>
            <hr/>
            
            { yaAgregado(id) 
                ? <Link to="/cart" className="btn btn-success">Terminar compra</Link>
                :
                <>
                   
                    <ItemCount cantidad={cantidad} modify={setCantidad} max={stock} />
                    <button className="btn btn-success" onClick={handleAgregar} disabled={cantidad === 0}>
                        Agregar
                    </button>
                    <hr/>
               
                </>
            }
            <button className="btn btn-primary" onClick={() => goBack()}>
                Regresar
            </button>
            <button 
                className="btn btn-primary"
                onClick={() => push("/")}>
                Volver al inicio
            </button>
            <hr/>
        </div>
    )
}
