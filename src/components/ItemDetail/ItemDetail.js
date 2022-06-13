import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../context/CartContext'
import { useNotification } from "../../Notification/notification"


const ItemDetail = ({ id, name, img, category, description, precio, stock }) => {
    const [quantity, setQuantity] = useState(0)

    const {setNotification} = useNotification()

    const { addItem, getProduct } = useContext(CartContext)

    const handleOnAdd = (quantity) => {

        setQuantity(quantity)
        
        setNotification("success", "Se agregó correctamente a su compra")

        addItem({ id, name, precio, quantity })
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {precio}
                </p>
            </section>           
            <div>
                { quantity > 0  
                    ? <Link to='/cart' className='Option'>Finalizar compra</Link> 
                    : <ItemCount stock={stock} onAdd={handleOnAdd} initial={getProduct(id)?.quantity}/>}
            </div>
        </article>
    )
}

export default ItemDetail