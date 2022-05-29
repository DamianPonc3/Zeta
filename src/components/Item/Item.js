import { Link } from 'react-router-dom';
import './Item.css';
import ItemCount from "../ItemCount/ItemCount"

const Item = ({id, name, img}) => {
    return (
        <div className="CardItem">
            <img src={img}/>
            <h1>{name}</h1>
            <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
            <ItemCount />
        </div>
    )
}

export default Item