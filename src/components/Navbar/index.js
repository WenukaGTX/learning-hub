import './navbar.scss';
import { Link } from "react-router-dom";
import logo from '../../images/logo.PNG';
import Button from '../Button';

function Navbar() {
  return (
    <div className="navbar">
      <div className='wrapper'>
        <nav className="navigation-wrapper">
          <div className='nav-container'>
            <div class="col-nav left">
              <Link to='/' ><img src={logo} alt="Logo" /></Link>
            </div>

            <div class="col-nav right">
              <ul className='nav-bar-list'>
                <li><Link to='/' >Home</Link></li>
                
                <li><Link to='/course-details' >Course Details</Link></li>

                <li><Link to='/sign-up' > <Button type="nav-btn secondary" buttonText="Sign up for FREE" class="nav-btn"></Button></Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
