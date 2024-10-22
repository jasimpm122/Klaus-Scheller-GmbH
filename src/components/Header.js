import React, { useEffect } from 'react';
import logo from '../newcar.PNG';
import '../App.css';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <a href="#">Service</a>
        <a href="#">Contact</a>
      </nav>
      <div className="search-icon">
        <SearchIcon style={{ color: '#fafafa', fontSize: 30, paddingRight: '250px' }} />
      </div>
    </header>
  );
}

export default Header;
