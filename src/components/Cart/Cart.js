import { useContext } from "react"
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

import "./cart.css"

const Cart = () => {


    const { cart, removeItem, getTotal, getQuantity, cleanCart } = useContext(CartContext)

    const quantity = getQuantity()

    return(
        <div className="cart-Container">
            
            {quantity ? 
            <div className="cart">
                <h1>Tu carrito:</h1>
                {cart.map(prod => {
                    return(
                        <div className="cart-info" key={prod.id}>
                            <div className="info__"><p>{prod.name}</p></div>
                            <div><p>Cantidad: {prod.quantity}</p></div>
                            <div><p>Precio por producto: ${prod.precio}</p></div>
                            <div><p>Precio total: ${prod.precio * prod.quantity}</p></div>
                            
                            <button className="button-cart_black__" onClick={() => removeItem(prod.id)}>Eliminar productos</button>
                        </div>
                    )})
                }
                <h3>Total a pagar: <span>${getTotal()}</span></h3>

                <Link to='/order'>
                    <button className="button-cart">Continuar con tu compra</button>
                </Link>
                <button className="button-cart_black" onClick={cleanCart}>Eliminar pedido</button>
            </div> : 
            <h3> Aún no agregaste ningun producto a la compra</h3>}
        </div>
    )
}
export default Cart