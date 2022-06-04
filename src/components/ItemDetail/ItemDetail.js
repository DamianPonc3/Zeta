import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({name, img, precio, descripcion, stock}) => {
    const [quantity, setQuantity] = useState(0)
    const handleOnAdd = (count) =>{
        console.log("agregue al carrito")
        console.log(count)
        setQuantity(count)
    }

    return(
        <div className='Container'>
            <div className='card-title'>
                <h1>Detalle del producto seleccionado:</h1>
            </div>
            <div className='card-body'>
            <img src={img} alt={name}/>
            <h2>{name}</h2>
            <h3>{descripcion}</h3>
            <h4>${precio}</h4>
            { quantity > 0 ? <Link to='/cart'>Finalizar Compra</Link> : <ItemCount stock={stock} onAdd={handleOnAdd}/>}
            </div>
        </div>
    )
}

export default ItemDetail