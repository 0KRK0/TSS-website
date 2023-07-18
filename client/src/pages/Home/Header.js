import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../../styles/Header.css';

const Header = () => {
  return (
    <>
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
            <li><Link className='link' to='/'>Get Hired!</Link></li>
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
