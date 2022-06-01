import './ItemDetail.css'

const ItemDetail = ({name, img, precio, descripcion}) => {
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
            </div>
        </div>
    )
}

export default ItemDetail