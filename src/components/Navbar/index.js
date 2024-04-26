import './navbar.scss';
import { Link } from "react-router-dom";
import logo from '../../images/logo.PNG';

function Navbar() {
  return (
    <header className="navbar">
      <div className='container'>
        <Link to='/' className='flex'><img src={logo} alt="Logo" /></Link>
        <nav className="navbar-right">
          <Link to='/sign-up' className='button button-primary'>Sign up for FREE</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
