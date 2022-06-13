import { useContext } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import CartContext from '../context/CartContext'

const Navbar = () => {

  const { getQuantity } = useContext(CartContext)

  const quantity = getQuantity()

  return (
      <nav className="Navbar" >
          <Link to='/' className='title'>
            <h1>Zeta</h1>
          </Link>
          <div className="Categories">
              <NavLink to='/categoria/remeras' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Remeras</NavLink>
              <NavLink to='/categoria/joggers' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Joggers</NavLink>
              <NavLink to='/categoria/shorts' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Shorts</NavLink>
          </div>
          {quantity > 0 && <CartWidget />}
      </nav>
  )
}

export default Navbar