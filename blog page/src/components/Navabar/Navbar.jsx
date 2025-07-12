import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Logo from '@/assets/Images/simon.jpg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="logo">
      <Link to = "/">
      <img src={Logo} alt="Logo not found" />
      </Link> 
      <Link to="/" style={{textDecoration:"none"}}>
       <h1><i>SamzkTech blog</i> </h1>
      </Link>

      </div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tours">Tours</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <Link to="/signup" className="sign-up" onClick={closeMobileMenu}>
        Sign Up
      </Link>

      <button className="menu-toggle" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/tours" onClick={closeMobileMenu}>Tour</Link></li>
          <li><Link to="/blog" onClick={closeMobileMenu}>Blog</Link></li>
          <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
        </ul>
        <Link to="/signup" className="sign-up" onClick={closeMobileMenu}>
          Sign Up
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
