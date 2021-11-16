import react, { useEffect } from 'react';

export const Prueba = ( props ) =>{
    
    const  {dato,dato2} = props;  //desestructuracion del objeto literal de parametro para luego usar como variables
    const jugar = true;

    const pedido = new Promise( (resolve,reject) => {
        if (jugar) {
            resolve("la promesa se cumple")
        }
        else
        {
            reject("La promesa NO se cumple")
        }

    })


    useEffect(() => {
        pedido.then((jugar) => console.log(jugar))
        .catch((error) => console.log(error))
    },[])

   

    return (
        <div>
            <hr/>
            <h2>{"prueba promise: " + jugar}</h2>
            <h2>{dato}</h2> {/*variable desestructurada del objeto*/}
            <h2>{dato2}</h2> {/*variable desestructurada del objeto*/}
            <h2>{props.dato3}</h2> {/*en este caso acceso al objeto y atributo directamente*/}
            

        </div>
    )
    
}