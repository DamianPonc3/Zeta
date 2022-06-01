import { Link } from 'react-router-dom';
import './Item.css';
import ItemCount from "../ItemCount/ItemCount"

const Item = ({id, name, img}) => {
    return (
        <div className="CardItem">
            <img src={img} alt={name}/>
            <h1>{name}</h1>
            <Link to={`/detalle/${id}`} className='Option'>Más detalles</Link>
            <ItemCount />
        </div>
    )
}

export default Item