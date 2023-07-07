import React from 'react'
import '../static_files/Header.css';

const Header = () => {
  return (
    <header>
        <nav>
            <ui>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Careers</li>
                <li>COntact Us</li>  
            </ui>
            <img src="logo2.1.jpg"  alt="Tech Stalwart Solution"/>
        </nav>
        <div>
            {/* <!-- About the nav  on HOVER --> */}
        </div>
    </header>
  )
}

export default Header