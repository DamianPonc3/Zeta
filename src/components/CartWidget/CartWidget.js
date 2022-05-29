import './CartWidget.css'

const CartWidget = () => {
    return(
        <button to='/cart' className="CartWidget">
            <img src="/assets/carrito.svg" alt='carrito' className='CartImg'/>
            0
        </button>
    );
}

export default CartWidget