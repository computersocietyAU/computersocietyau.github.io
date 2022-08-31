import React, { useState, useRef } from 'react';

const Navbar = () => {

  const [navView, setNavView] = useState(true);
  const navElem = useRef(); 

  const navItems = ['Home', 'Events', 'Workshops', 'Blog', 'Our Team'];
  const navLinks = ['/', '/events', '/workshops', '/blogs', '/team'];

  return (
    <nav id='nav-container' className='bg-navbarBg w-full min-h-[12vh] pr-[30px] pl-[20px] fixed z-[10] tracking-[1.5px] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)]'>
      <div className='desktop-nav max-w-[1600px] my-0 mx-auto h-[11vh] lg:h-[12vh] flex items-center justify-between'>
        <div id='nav-logo' className='flex-1 lg:flex-[0.25] text-navSpecial text-2xl leading-6'>
          <a className="no-underline font-navLogo" href='/'>💻 CSAU</a>
        </div>
        <ul ref={navElem} className={"lg:flex hidden justify-between items-center flex-1 md:flex-[0.5] lg:flex-[0.65] list-none translate-y-0 ease-in-out duration-500" + (!navView ? ' hide translate-y-[-200%]' : '')}>
          {navItems.map((nav, i) => {
            let isActive = window.location.pathname === navLinks[i];
            return <li key={i} className={isActive ? 'active text-navSpecial' : ''}> 
              <a className="no-underline color-white text-[17.6px] leading-[1.75em] cursor-pointer hover:border-b-[3.5px] hover:border-solid hover:border-navSpecial" 
                href={navLinks[i]}>
                {nav}
              </a>
            </li>;
          })}
        </ul>
        <div id='nav-icon-wrapper' className='flex-1 lg:flex-[0.25] cursor-pointer flex flex-row-reverse'>
          <div id='nav-icon' className={"flex flex-col items-center justify-center w-max opacity-[0.45]" + (navView ? ' active opacity-[1]' : '')} onClick={() => setNavView(!navView)}>
            <img src='/line1.png' alt='line' className='block my-[2.5px] h-[3px]' id='line1' />
            <img src='/line2.png' alt='line' className='block my-[2.5px] h-[3px]' id='line2' />
            <img src='/line3.png' alt='line' className='block my-[2.5px] h-[3px]' id='line3' />
          </div>
        </div>
      </div>
      <div className={"mobile-nav block lg:hidden pb-[15px]" + (!navView ? ' hide hidden' : '')}>
        <ul className='text-center list-none ease-in-out duration-500 '>
          {navItems.map((nav, i) => {
            let isActive = window.location.pathname === navLinks[i];
            return <li key={i} className={"my-[5px]" + (isActive ? ' active text-navSpecial' : '')}> 
              <a className="no-underline color-white text-sm sm:text-[15px] md:text-[17.6px] sm:leading-[1.75em] cursor-pointer hover:border-b-[3.5px] hover:border-solid hover:border-navSpecial" href={navLinks[i]}>{nav}</a>
            </li>;
          })}
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;