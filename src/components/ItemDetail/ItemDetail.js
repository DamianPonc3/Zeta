import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'
import { useNotification } from "../../Notification/notification"


const ItemDetail = ({ id, name, img, category, descripcion, precio, stock}) => {
    const [quantity, setQuantity] = useState(0)

    const {setNotification} = useNotification()

    const { addItem, getProduct } = useContext(CartContext)

    const handleOnAdd = (quantity) => {

        setQuantity(quantity)
        
        setNotification("success", "Se agregó correctamente a su compra")

        addItem({ id, name, precio, quantity })
    }

    return (
        <div className='container-detail'>
            <div className='details'>
                <div className='detail-img'>
                    <img src={img} alt={name}/>
                </div>
                <div className='box'>
                    <div className='row'>
                        <h2>{name}</h2>
                        <span>Valor: ${precio}</span>
                    </div>
                    <div className='box-p'>
                    <p>categoria:{category}</p>
                    <p>{descripcion}</p>
                    <div className='product-price-btn'>
                    </div>
                        <div className='addProd'>
                            { quantity > 0  
                            ? <Link to='/cart' className='Option'>Ver tu carrito</Link> 
                            : <ItemCount stock={stock} onAdd={handleOnAdd} initial={getProduct(id)?.quantity}/>}
                        </div>
                        <div>
                            <Link to="/">
                                <button className='button-return'>Volver</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail