import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock, initial = 1, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

console.log(initial)
console.log(quantity)

const increment = () => {
        if(quantity < stock) {
    setQuantity(quantity+1)
    }
}

const decrement = () => {
        if(quantity > 1) {
    setQuantity(quantity - 1)
    }     
}

return(
    <div className='Counter'>          
            <div className='Controls'>
                <button className="Button" onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="Button" onClick={() => onAdd(quantity)}>Agregar a la compra</button>
            </div>
    </div>
)

}
export default ItemCount