import { useContext, useState } from 'react';
import { Context } from '../context/userContext/context';
import { Link, NavLink } from 'react-router-dom';
import { RiHome4Line, RiUserLine, RiLogoutBoxLine, RiSearchLine } from 'react-icons/ri';
import { FaInfoCircle, FaSignInAlt, FaUserPlus , FaSearch} from 'react-icons/fa';
import './AppBar.css';
import RateMoviePage from '../pages/RateMoviePage';

const AppBar = () => {
  const { user, dispatch } = useContext(Context);
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const handleSearch = () => {
    // Implement the logic to fetch and search movies from your backend using the searchTerm
    console.log('Searching for:', searchTerm);
    // Clear the search input field
    setSearchTerm('');
  };

  return (
    <div className="app-bar">
      <div className="search-bar">
      <Link to="/search" className="navbar-link">
  <FaSearch className="navbar-icon" />
</Link>
      </div>
      <marquee behavior="scroll" direction="right" className="marquee-title">
        <Link to="/" className="company-name">
          Movies Recommendation App
        </Link>
      </marquee>
      <nav className="nav-links">
        <NavLink to="/" exact activeClassName="active" target="home">
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
        {user && (
          <>
            <NavLink to="/rate-movie" activeClassName="active">
              <RiUserLine />
              Rate Movie
            </NavLink>
            <NavLink to="/profile" activeClassName="active">
              <RiUserLine />
              Profile
            </NavLink>
            <NavLink onClick={handleLogout} activeClassName="active">
              <RiLogoutBoxLine />
              Logout
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default AppBar;
