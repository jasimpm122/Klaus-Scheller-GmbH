import React from 'react';
import { useMediaQuery } from 'react-responsive';
import logo from '../newcar.PNG';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <header className="header">
      <div className="logo-nav-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav className={`navbar ${isTabletOrMobile ? 'mobile-navbar' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
