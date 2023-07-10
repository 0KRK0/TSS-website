import React from 'react'
import '../../styles/Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <nav className="header-nav">
      <img src="../../../logo2.png" alt="TSS" className="header-logo" />
      
        <ul id="nav">
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Careers</li>
          <li>Apps</li>
        </ul>
      <span />
      <span />
        <ul id="contactUs">
          <li>Collab</li>
          <li>Get Hired!</li>
          <li>Contact Us</li>  
        </ul>
      </nav>
      <div>
        {/* About the nav on HOVER */}
      </div>
    </header>
  );
}

export default Header;
