import './ItemDetail.css'

const ItemDetail = ({name, img, precio, descripcion}) => {
    return(
        <div>
            <h1>Detalle del producto seleccionado:</h1>
            <img src={img} alt={name}/>
            <h2>{name}</h2>
            <h3>{descripcion}</h3>
            <h4>${precio}</h4>
        </div>
    )
}

export default ItemDetail