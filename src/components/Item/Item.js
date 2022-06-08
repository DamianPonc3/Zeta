import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, precio}) => {

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <img src={img} alt={name}/>
            <section>
                <p className="Info">
                    Precio: ${precio}
                </p>
            </section>           
            <footer className='ItemFooter'>
                <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item