
import { Link, NavLink } from 'react-router-dom';
import { RiHome4Line, RiUserLine, RiLogoutBoxLine } from 'react-icons/ri';
import { FaInfoCircle, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import './AppBar.css'; 

const AppBar = () => {
  return (
    <div className="app-bar">
  <marquee behavior="scroll" direction="right" className="marquee-title">
    <Link to="/" className="company-name">
      Movies Recomendation App
    </Link>
  </marquee>
      <nav className="nav-links">
        <NavLink to="/" exact activeClassName="active" target='home'> 
          <RiHome4Line />
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          <FaInfoCircle />
          About
        </NavLink>
        <NavLink to="/login" activeClassName="active">
          <FaSignInAlt />
          Login
        </NavLink>
        <NavLink to="/register" activeClassName="active">
          <FaUserPlus />
          Register
        </NavLink>
        <NavLink to="/profile" activeClassName="active">
          <RiUserLine />
          Profile
        </NavLink>
        <NavLink to="/logout" activeClassName="active">
          <RiLogoutBoxLine />
          Logout
        </NavLink>
      </nav>
    </div>
  );
};

export default AppBar;
