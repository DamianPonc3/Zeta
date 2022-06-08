import { useContext } from "react"
import CartContext from "../context/CartContext"

const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)

    return(
        <div>
            <h1>Cart</h1>
            <div>
                {cart.map(prod => {
                    return(
                        <div key={prod.id}>
                            <div >{prod.name}</div>
                            <div>Cantidad: {prod.quantity}</div>
                            <div>Precio x Uni: ${prod.precio}</div>
                            <div>Subtotal: ${prod.precio * prod.quantity}</div>
                            <button onClick={() => removeItem(prod.id)}>X</button>
                        </div>
                    )})
                }
            </div>
        </div>
    )
}

export default Cart