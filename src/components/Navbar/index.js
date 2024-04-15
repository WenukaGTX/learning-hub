import './navbar.scss';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h3>Logo</h3>
      <nav>
        <Link to='/' >Home</Link>
        <Link to='/course-details' >Course Details</Link>
        <Link to='/sign-up' >Sign Up</Link>
      </nav>
    </div>
  );
}

export default Navbar;
