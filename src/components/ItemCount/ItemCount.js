import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock, initial = 0, onAdd})=> {
    const [count, setCount] = useState(initial)

const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

const decrement = () => {
        if(count > 1) {
            setCount(count - 1)
        }     
    }

    return(
        <div className='Counter'>          
            <div className='Controls'>
                <button className="Button" onClick={decrement}>-</button>
                <h4 className='Number'>{count}</h4>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="Button" onClick={() => onAdd(count)}>Agregar a tu compra</button>
            </div>
        </div>
    )

}
export default ItemCount