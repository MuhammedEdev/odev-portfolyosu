import { Link, NavLink } from 'react-router-dom';

const NavBar = () => (
  <header className='header'>
    <Link to="/" className='site-title'>CINE<span>MONSTER</span></Link>
    <nav className='main-nav'>
      <NavLink to="/" className="nav-link">Ana Sayfa</NavLink>
      <NavLink to="/filmler" className="nav-link">Keşfet</NavLink>
    </nav>
  </header>
)

export default NavBar;