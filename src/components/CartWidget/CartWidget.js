import react, {useContext} from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import "./CartWidget.css"
import { CartContext } from '../context/CartContext'


export const CartWidget = () => {

    const {calcularCantidad} = useContext(CartContext)

    return (
        <div style={{
            visibility: calcularCantidad() === 0 ? "hidden" : "visible"
        }}>
            <AiOutlineShoppingCart class="icono" />
            <span>{calcularCantidad()}</span>
        </div>
    )
    
}