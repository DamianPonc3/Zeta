import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../context/CartContext'
import { useNotification } from "../../Notification/notification"


const ItemDetail = ({ id, name, img, category, descripcion, precio, stock }) => {
    const [quantity, setQuantity] = useState(0)

    const {setNotification} = useNotification()

    const { addItem, getProduct } = useContext(CartContext)

    const handleOnAdd = (quantity) => {

        setQuantity(quantity)
        
        setNotification("success", "Se agregó correctamente a su compra")

        addItem({ id, name, precio, quantity })
    }

    return (
        <div className="wrapper">
            <div className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </div>
            <picture className='product-img'>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <div className='product-info'>
                <div className='product-text'>
                    <p className="Info">
                    Categoria: {category}
                    </p>
                    <p className="Info">
                    Descripción: {descripcion}
                    </p>
                </div>
                <div className='product-price-btn'>
                    <p className="Info-price">
                    Precio: ${precio}
                    </p>
                    { quantity > 0  
                        ? <Link to='/cart' className='Option'>Ver tu compra</Link> 
                        : <ItemCount stock={stock} onAdd={handleOnAdd} initial={getProduct(id)?.quantity}/>}
                </div>
            </div>           
        </div>
    )
}

export default ItemDetail