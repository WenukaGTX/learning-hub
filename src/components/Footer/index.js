import './footer.scss';
import { Link } from "react-router-dom";
import logo from '../../images/qb-logo.svg';

function Footer() {
  return (
    <div className="footer-container">
      <div className='wrapper'>
          <div className='footer-bottom-container'>

            <div className="footer-col top">
              <Link to='/' ><img src={logo} alt="Logo" /></Link>
            </div>

            <div className="footer-col bottom">
                <div className='footer-list-container left'>
                    <p>© 2022 Intuit Inc. All rights reserved.</p>
                    <p>Intuit, QuickBooks, QB, TurboTax, ProConnect, and Mint are registered trademarks of Intuit Inc. Terms and conditions, features, support, pricing, and service options subject to change without notice.<br></br><br></br>By accessing and using this page you agree to the Terms and Conditions.</p>
                    <ul className='footer-list'>
                        <li><Link to='/' >Terms of Service</Link></li>
                        
                        <li><Link to='/' >Contact</Link></li>
                    </ul>
                </div>
                <div className='footer-list-container right'>
                    <ul className='footer-list footer-bottom-links'>
                        <li><Link to='/' >Legal</Link></li>
                        
                        <li><Link to='/' >Privacy</Link></li>

                        <li><Link to='/' >Security</Link></li>
                    </ul>
                </div>
                
            </div>
          </div>
      </div>
    </div>
  );
}

export default Footer;
