import React from 'react';
import { useMediaQuery } from 'react-responsive';
import logo from '../newcar.PNG';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>
      <nav className={`navbar ${isTabletOrMobile ? 'mobile-navbar' : ''}`}>
        <Link to="/"></Link>
        {/* <Link to="/about">About</Link>
        <a href="#">Service</a>
        <a href="#">Contact</a> */}
      </nav>
      {/* {!isTabletOrMobile && (
        <div className="search-icon">
          <SearchIcon style={{ color: '#fafafa', fontSize: 30, paddingRight: '20px' }} />
        </div>
      )} */}
    </header>
  );
};

export default Header;
