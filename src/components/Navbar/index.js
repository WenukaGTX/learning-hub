import './navbar.scss';
import { Link } from "react-router-dom";
import logo from '../../images/logo.PNG';
import { useAuth } from '../../utilities/AuthContext';
import Button from '../Button';

function Navbar(props) {
  const { isLoggedIn, logout } = useAuth();

  return (
    <header className={`navbar navbar-${props.type ? props.type : 'light'} navbar-${props.position ? props.position : 'sticky'}`}>
      <div className='container'>
        <Link to='/' className='flex'><img src={logo} alt="Logo" /></Link>
        <nav className="nav-links nav-links-right">
          {isLoggedIn &&
            <Button onClick={logout} buttonText='Sign out' />
          }
          {!isLoggedIn &&
            <>
              <Link to='/sign-up' className='button button-primary'>Sign up<span className='hide-xs'> for FREE</span></Link>
            </>
          }
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
