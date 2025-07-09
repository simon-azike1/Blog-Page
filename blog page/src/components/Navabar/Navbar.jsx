import React, { useState } from 'react';
import './navbar.css';
import Logo from '@/assets/Images/simon.jpg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev =>!prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <header className="navbar-header">
      <div className="logo">
        <img src={Logo} alt="Logo not found" />
        <h1>Blog</h1>
      </div>

      <nav className="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Tours</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About</a></li>

         
        </ul>
        <button className="sign-up"  onClick={closeMobileMenu}>
          <a href="#">Sign Up</a>
        </button>
      </nav>

      <button className="menu-toggle" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#" onClick={closeMobileMenu} >Home</a></li>
          <li><a href="#" onClick={closeMobileMenu} >Tour</a></li>
          <li><a href="#" onClick={closeMobileMenu} >Blog</a></li>
          <li><a href="#" onClick={closeMobileMenu} >About</a></li>
          
        </ul>
        <a href="#" className="sign-up" onClick={closeMobileMenu}>Sign Up</a>
      </nav>
    </header>
  );
};

export default Navbar;
