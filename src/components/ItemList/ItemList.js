import { memo } from 'react'
import Item from '../Item/Item'
import "./ItemList.css"

const ItemList = ({products}) => {
    return (
        <div className='card'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default memo(ItemList, (prevProps, nextProps) =>{
    return true
})
