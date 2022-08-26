import React, { useState, useRef } from 'react';
import "./Navbar.css";

const Navbar = () => {

  const [navView, setNavView] = useState(true);
  const navElem = useRef(); 

  const navItems = ['Home', 'Events', 'Workshops', 'Blog', 'Our Team'];
  const navLinks = ['/', '/events', '/workshops', '/blogs', '/team'];

  return (
    <nav id='nav-container'>
      <div className='desktop-nav' style={{maxWidth: '1600px', margin: '0 auto'}}>
        <div id='nav-logo'>
          <a href='/'>💻 CSAU</a>
        </div>
        <ul ref={navElem} className={!navView ? 'hide' : ''}>
          {navItems.map((nav, i) => {
            let isActive = window.location.pathname === navLinks[i];
            return <li key={i} className={isActive ? 'active' : ''}> 
              <a href={navLinks[i]}>{nav}</a>
            </li>;
          })}
        </ul>
        <div id='nav-icon-wrapper'>
          <div id='nav-icon' className={navView ? 'active' : ''} onClick={() => setNavView(!navView)}>
            <img src='/line1.png' alt='line' id='line1' />
            <img src='/line2.png' alt='line' id='line2' />
            <img src='/line3.png' alt='line' id='line3' />
          </div>
        </div>
      </div>
      <div className={!navView ? 'mobile-nav hide' : 'mobile-nav'}>
        <ul>
          {navItems.map((nav, i) => {
            let isActive = window.location.pathname === navLinks[i];
            return <li key={i} className={isActive ? 'active' : ''}> 
              <a href={navLinks[i]}>{nav}</a>
            </li>;
          })}
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;