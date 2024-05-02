import './navbar.scss';
import { Link } from "react-router-dom";
import logo from '../../images/logo.PNG';

function Navbar(props) {
  return (
    <header className={`navbar navbar-${props.type ? props.type : 'light'}`}>
      <div className='container'>
        <Link to='/' className='flex'><img src={logo} alt="Logo" /></Link>
        <nav className="nav-links nav-links-right">
          <Link to='/sign-up' className='button button-primary'>Sign up<span className='hide-xs'> for FREE</span></Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
