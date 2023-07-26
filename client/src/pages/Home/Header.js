import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className='mobile-header-menu'>
        <header className='mobile-header'>
          <nav className="mobile-nav">
            <div className="menu-toggle" onClick={toggleMenu}>
              <span className="toggle-icon">&#9776;</span>
            </div>


            <ul id="mobile-ui" className={menuOpen ? 'show-menu' : 'hide-menu'}>
              <li><HashLink onClick={toggleMenu} className='link' smooth to='/#services'>Services</HashLink></li>
              <li><HashLink onClick={toggleMenu} className='link' smooth to='/#careers'>Careers</HashLink></li>
              <li><Link onClick={toggleMenu} className='link' to='/'>Apps</Link></li>
              <li><Link onClick={toggleMenu} className='link' to='/'>Collab</Link></li>
              <li><Link onClick={toggleMenu} className='link' to='careers'>Get Hired!</Link></li>
              <li><HashLink onClick={toggleMenu} className='link' smooth to='/#footer'>Contact Us</HashLink></li>
            </ul>
          </nav>
        </header>
        <ul id="nav" className={menuOpen ? 'hide-menu' : 'show-menu'} >
          <li><Link className='link' to='/'>Home</Link></li>
          <li><Link className='link' to='/about'>About Us</Link></li>
        </ul>
        <Link to='/'><img src="../../../logo2.png" alt="TSS" className="mobile-logo" /></Link>
      </div>




      <header className="header-container">
        <nav className="header-nav">
          <Link to='/'><img src="../../../logo2.png" alt="TSS" className="header-logo" /></Link>

          <ul id="nav">
            <li><Link className='link' to='/'>Home</Link></li>
            <li><Link className='link' to='/about'>About Us</Link></li>
            <li><HashLink className='link' smooth to='/#services'>Services</HashLink></li>
            <li><HashLink className='link' smooth to='/#careers'>Careers</HashLink></li>
            <li><Link className='link' to='/'>Apps</Link></li>
          </ul>
          <span />
          <span />
          <ul id="contactUs">
            <li><Link className='link' to='/'>Collab</Link></li>
            <li><Link className='link' to='careers'>Get Hired!</Link></li>
            <li><HashLink className='link' smooth to='/#footer'>Contact Us</HashLink></li>
          </ul>
        </nav>
        {/* <div>
          About the nav on HOVER
        </div> */}
      </header>
      <Outlet />
    </>
  );
}

export default Header;
