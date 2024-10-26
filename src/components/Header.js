import React from 'react';
import { useMediaQuery } from 'react-responsive';
import logo from '../newcar.PNG';
import aboutLogo from '../images/Aboutlogo.png';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';
  const currentLogo = isAboutPage ? aboutLogo : logo;

  return (
    <header className={`header ${isAboutPage ? 'about-header' : ''}`}>
      <div className="logo-nav-container">
        <Link to="/" className="logo">
          <img src={currentLogo} alt="Logo" />
        </Link>
      </div>
      <nav className={`navbar ${isTabletOrMobile ? 'mobile-navbar' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/service">Service</Link> {/* Added Service link */}
      </nav>
    </header>
  );
};

export default Header;
