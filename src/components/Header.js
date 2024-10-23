import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link, useLocation } from 'react-router-dom';  // Import useLocation
import logo from '../newcar.PNG';  // Default logo
import aboutlogo from '../images/Aboutlogo.png';  // Corrected path to about logo
import SearchIcon from '@mui/icons-material/Search';

import '../App.css';

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const location = useLocation();  // Use location to get the current path
  const isAboutPage = location.pathname === '/about';  // Check if current path is '/about'

  const logoSrc = isAboutPage ? aboutlogo : logo;  // Conditionally set logo based on the page

  return (
    <header className={`header ${isAboutPage ? 'about-header' : ''}`}>
      <Link to="/" className="logo">
        <img src={logoSrc} alt="Logo" />
      </Link>
      <nav className={`navbar ${isTabletOrMobile ? 'mobile-navbar' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      {!isTabletOrMobile && (
        <div className="search-icon">
          <SearchIcon style={{ color: isAboutPage ? 'black' : '#fafafa', fontSize: 30, marginRight: '218px' }} />
        </div>
      )}
    </header>
  );
};

export default Header;
