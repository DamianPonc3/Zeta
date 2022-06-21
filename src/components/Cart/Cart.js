import { useContext } from "react"
import CartContext from "../context/CartContext"
import { Link } from 'react-router-dom'

import "./cart.css"

const Cart = () => {


    const { cart, removeItem, getTotal, getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return(
        <div className="cart-Container">
            
            {quantity ? 
            <div className="cart">
                <h1>Tu compra:</h1>
                {cart.map(prod => {
                    return(
                        <div className="cart-info" key={prod.id}>
                            <div><p>{prod.name}</p></div>
                            <div><p>Cantidad: {prod.quantity}</p></div>
                            <div><p>Precio x Uni: ${prod.precio}</p></div>
                            <div><p>Subtotal: ${prod.precio * prod.quantity}</p></div>
                            
                            <button className="Button" onClick={() => removeItem(prod.id)}>Eliminar productos</button>
                        </div>
                    )})
                }
                <h3>Total: ${getTotal()}</h3>

                <Link to='/order'>
                    <button className="Button">Continuar con tu compra</button>
                </Link>
            </div> : 
            <h3> Aún no agregaste ningun producto a la compra</h3>}
        </div>
    )
}
export default Cart