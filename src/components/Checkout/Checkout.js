import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router'
import { getFirestore } from '../../firebase/config'
import { CartContext } from '../context/CartContext'
import firebase from 'firebase'
import 'firebase/firestore'
import Swal from 'sweetalert2'
import { UIContext } from '../context/UIContext'
import { Loader } from '../Loader/Loader'
import "./Checkout.css"






export const Checkout = () => {

    const {loading, setLoading} = useContext(UIContext)
    const {carrito,calcularTotal,vaciarCarrito} = useContext(CartContext)

    

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: ''
    })

    const handleInputChange = (e) => {
        console.log(e.target.value)
        console.log(e.target.name)
        setValues(
            {
                ...values,
                [e.target.name]: e.target.value
            }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length < 2) {
            Swal.fire({
                icon: 'error',
                title: 'Error de datos',
                text: `Por favor, ingrese un nombre valido!`
            })
            
            return
        }
        if (values.apellido.length < 2) {
            Swal.fire({
                icon: 'error',
                title: 'Error de datos',
                text: `Por favor, ingrese un apellido valido!`
            })
            return
        }
        if (values.telefono.length < 7) {
            Swal.fire({
                icon: 'error',
                title: 'Error de datos',
                text: `Por favor, ingrese un telefono valido!`
            })
            return
        }
        if (values.email.length < 3) {
            Swal.fire({
                icon: 'error',
                title: 'Error de datos',
                text: `Por favor, ingrese un e-mail valido!`
            })
            return
        }
        

        const orden = {
            buyer: {
                ...values
            }, 
            items: carrito.map((el) => ({id: el.id, precio: el.precio, cantidad: el.cantidad})),
            total: calcularTotal(),
            date: firebase.firestore.Timestamp.fromDate(new Date())
            
        }
        //ahora enviamos orden a firestore
        const db = getFirestore()
        const orders = db.collection('orders')

        setLoading(true)
        orders.add(orden)
            .then((res) => {console.log(res.id) 
                Swal.fire({
                    icon: 'success',
                    title: 'Compra registrada con exito!',
                    text: `Por favor, Guarde su numero de orden: ${res.id}`,
                    willClose: () => {
                        vaciarCarrito()
                    }
                    
                  })
           
            })
            .finally(() => {
                setLoading(false)
            })
    }


    return(
        <>
        <section className="container pantalla"> {/*CONTENEDOR DE BOOTSTRAP*/}
          {carrito.length === 0 && <Redirect to={`/orden/${values.nombre}  ${values.apellido}`}/> }
          {loading && <Loader/>}
          <div>
            <h2 className="estilo1">Ingrese sus datos</h2>
            <hr/>
            <div>
                <form onSubmit={handleSubmit}>
                   
                     <input className="form-control my-2" type="text" placeholder="Nombre" value={values.nombre} name="nombre" onChange={handleInputChange} />

                      {values.nombre.length === 0 && <small>Este campo es obligatorio</small>}

                      <input className="form-control my-2" type="text" placeholder="Apellido" name="apellido" value={values.apellido} onChange={handleInputChange} />
                      {values.apellido.length === 0 && <small>Este campo es obligatorio</small>}
                
                      <input className="form-control my-2" type="email" placeholder="Email" name="email" value={values.email} onChange={handleInputChange} />
                      {values.email.length === 0 && <small>Este campo es obligatorio</small>}

                       <input className="form-control my-2" type="text" placeholder="Telefono" name="telefono" value={values.tel} onChange={handleInputChange} />
                       {values.email.length === 0 && <small className="my-3">Este campo es obligatorio</small>}
                        <div className="my-2">
                            <button className="btn btn-success" type="submit" disabled={loading}>Finalizar</button>
                        </div>
                </form>
            </div>
          </div>
        </section>
        </>
    )
}