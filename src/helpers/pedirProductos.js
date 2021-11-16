import { Stock } from "../datos/stock"

/*PROMESA PARA RESOLVER EL STOCK*/
export const pedirProductos = () => {

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(Stock)
            
        }, 2000)

    })
}