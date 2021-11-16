import React from 'react'
import { Item } from './Item'

export const ItemList = ( {productos = []} ) => {


    return (
        <div className="container">
            {productos.length === 0
            ?
            <h2>Sin articulos en esta seccion</h2>
            :
            <h2>Nuestros Articulos</h2>
            }
           
            <hr/>
            
            <div className="row">
                { productos.map((item) => <Item {...item} key={item.id}/> )}
               
            </div>
        </div>
    )
}