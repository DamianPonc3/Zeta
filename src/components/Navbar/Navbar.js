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
              <NavLink to='/categoria/remeras' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Remeras</NavLink>
              <NavLink to='/categoria/joggers' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Joggers</NavLink>
              <NavLink to='/categoria/shorts' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Shorts</NavLink>
          </div>
      </nav>
  )
}

export default Navbar