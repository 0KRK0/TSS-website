import React from 'react';
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
          
        </ul>
        <ul id="contactUs">
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
