import React from 'react'
import { useParams } from 'react-router'
import '../BuySuccess/BuySuccess.css'
import { useHistory } from 'react-router'



export const BuySuccess = (props) => {
    const {push} = useHistory()
//aca despliego algo cuando la compra es exitosa....
const {datosCliente} = useParams() //desestructuro el objeto literal de parametros
    return (
        <section className="container pantallaExito">
            <h2 className="tituloExito">¡MUCHAS GRACIAS POR SU COMPRA!</h2>
            <br/>
            <p>Estimado <span className="estiloNombre">{datosCliente}</span>, muchas gracias por su compra!, usted puede concurrir a nuestra sucursal
            de la calle Simón Bolivar 1260 a retirar la mercaderia. También puede solicitar el envio a su domicilio con una demora de 48hs, para este
            ultimo caso debe comunicarse al 27074423 para solicitar el envio a domicilio.</p>
            <br/><br/>
            <hr/>
            <button 
                className="btn btn-primary"
                onClick={() => push("/")}>
                Volver al inicio
            </button>
        </section>
    )
}
