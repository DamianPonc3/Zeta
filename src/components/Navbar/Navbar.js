import { useContext } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import CartContext from '../context/CartContext'

const Navbar = () => {

  const { getQuantity } = useContext(CartContext)

  const quantity = getQuantity()

  return (
      <nav className="container" >
        <div className='container-title'>
          <div>
            <Link to='/' className='title'>
              <h1>Ecommerce Zeta</h1>
            </Link>
          </div>
          <div className='carrito'>
            {quantity > 0 && <CartWidget />}
          </div>
        </div>
        <div className='menu'>
            <div className="categories">
              <div className='categories-item'>
                <NavLink to='/categoria/remeras' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Remeras</NavLink>
              </div>
              <div className='categories-item'>
                <NavLink to='/categoria/abrigos' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Abrigos</NavLink>
              </div>
              <div className='categories-item'>
                <NavLink to='/categoria/shorts' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Shorts</NavLink>
              </div>
            </div>
          </div>
      </nav>
  )
}

export default Navbar