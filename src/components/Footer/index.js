import './footer.scss';
import { Link } from "react-router-dom";
import logo from '../../images/qb-logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className='container'>
        <Link to='/' className='footer-logo'><img src={logo} alt="Logo" /></Link>
        <div className='footer-right'>
          <p className='footer-text'>© 2022 Intuit Inc. All rights reserved</p>
          <nav>
            <Link to='/' className='white'>Terms of Service</Link>
            <p className="spacer white">|</p>
            <Link to='/' className='white'>Contact</Link>
            <p className="spacer white">|</p>
            <Link to='/' className='white'>Legal</Link>
            <p className="spacer white">|</p>
            <Link to='/' className='white'>Privacy</Link>
            <p className="spacer white">|</p>
            <Link to='/' className='white'>Security</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
