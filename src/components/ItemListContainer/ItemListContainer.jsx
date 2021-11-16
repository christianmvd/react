import React, { useContext, useEffect, useState } from "react"
import "./ItemListContainer.css"
import { ItemList } from './ItemList'
import { useParams } from 'react-router'
import { UIContext } from "../context/UIContext"
import { getFirestore } from "../../firebase/config"
import { Loader } from '../Loader/Loader'



export const ItemListContainer = (props) => {

  const [items, setItems] = useState([])
  const {loading, setLoading} = useContext(UIContext)

    
   

    const {categoryId} = useParams() //desestructuro el objeto literal de parametros
    
    useEffect(() => {
      setLoading(true)
      const db = getFirestore()
      const productos = categoryId ? db.collection('productos').where('categoria','==', categoryId) : db.collection('productos')

        console.log(productos)
        productos.get()
        .then((response) => {
            const newItems = response.docs.map((doc) => {
              return {id: doc.id, ...doc.data()}
            })
            console.log(newItems)
            setItems(newItems)
        })
        .catch( err => console.log(err))
        .finally(() => setLoading(false))
      

     
    },[categoryId,setLoading])


  return (
    

    <section className="container pantalla"> {/*CONTENEDOR DE BOOTSTRAP*/}
   
      {
       
        loading == true
          ? <h2>{<Loader/>}</h2>
          : <ItemList productos={items}/>
      }
    </section>
  );
};
