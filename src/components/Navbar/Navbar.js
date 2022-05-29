import './Navbar.css'
import { Link, NavLink} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
      <nav className="Navbar" >
        <CartWidget />
          <Link to='/' className='title'>
            <h1>Zeta</h1>
          </Link>
          <div className="Categories">
              <NavLink to='/category/remeras' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Remeras</NavLink>
              <NavLink to='/category/joggers' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Joggers</NavLink>
              <NavLink to='/category/shorts' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Shorts</NavLink>
          </div>
      </nav>
  )
}

export default Navbar