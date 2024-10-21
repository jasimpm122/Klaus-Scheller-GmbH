import React, { useEffect } from 'react';
import logo from '../newcar.PNG';
import '../App.css';
import SearchIcon from '@mui/icons-material/Search';

function Header() {

  return (
      <header className="header">
        <a href="#" className="logo">
          <img src={logo} alt="Logo" />
        </a>
        <nav className="navbar">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Contact</a>
        </nav>
        <div className="search-icon">
          <SearchIcon style={{ color: '#fafafa', fontSize: 30}} />
        </div>
      </header>
  );
}

export default Header;
