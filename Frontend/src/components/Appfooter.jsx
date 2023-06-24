import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RiHome4Line, RiUserLine, RiLogoutBoxLine } from 'react-icons/ri';
import { FaFilm, FaTheaterMasks } from 'react-icons/fa';
import './Appfooter.css';

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <marquee behavior="scroll" direction="left">
          <Link to="/" className="company-name">
            Thank you for visiting this  Movie Recommendation App🤝
          </Link>
        </marquee>
        <nav className="nav-links">
        <NavLink to="/" exact activeClassName="active" target="home" className="home-link">
  <RiHome4Line />
  Back to Home
</NavLink>
          {/* <NavLink to="/movies" activeClassName="active">
            <FaFilm />
            Movies
          </NavLink> */}
          <NavLink to="/theaters" activeClassName="active">
            <FaTheaterMasks />
            Theaters
          </NavLink>
          <NavLink to="/login" activeClassName="active">
            <RiUserLine />
            Login
          </NavLink>
          <NavLink to="/register" activeClassName="active">
            <RiUserLine />
            Register
          </NavLink>
          <NavLink to="/logout" activeClassName="active">
            <RiLogoutBoxLine />
            Logout
          </NavLink>
        </nav>
      </div>
      <div className="footer-date">
        &copy; {currentDate} Movie Recommendation App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
