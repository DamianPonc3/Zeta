import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img}) => {

    return (
    <div className='cards'>
        <div className="card">
            <header className="Header">
            </header>
            <div className='card_image'>
                <img src={img} alt={name}/>
            </div>
            <div className='card_content'>
                <h2 className="card_title">
                    {name}
                </h2>
                <Link to={`/detail/${id}`} className='btn card_btn'>Ver detalle</Link>
            </div>           
        </div>
    </div>
    )
}

export default Item