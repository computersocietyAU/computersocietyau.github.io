import React, { useState, useRef } from 'react';
import { Link } from '@tanstack/react-location'

const Navbar = () => {

  const [navView, setNavView] = useState(true);
  const navElem = useRef(); 

  return (
    <nav id='nav-container' className='bg-navbarBg w-full min-h-[10vh] pr-[30px] pl-[20px] fixed z-[10] tracking-[1.5px] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)]'>
      <div className='desktop-nav max-w-[1600px] my-0 mx-auto h-[10vh] lg:h-[10vh] flex items-center justify-between'>
        <div id='nav-logo' className='flex-1 lg:flex-[0.25] text-navSpecial text-2xl leading-6'>
          <a className="no-underline font-navLogo" href='/'>💻 CSAU</a>
        </div>
        <ul ref={navElem} className={"lg:flex hidden justify-between items-center flex-1 md:flex-[0.5] lg:flex-[0.65] list-none translate-y-0 ease-in-out duration-500" + (!navView ? ' hide translate-y-[-210%]' : '')}>
          {[
            [".", "Home"],
            ["events", "Events"],
            ["blogs", "Blog"],
            ["team", "Team"],
          ].map(([to, label]) => {
            return (
              <div key={to}>
                <Link
                  to={to}
                  getActiveProps={() => ({ className: `text-navSpecial` })}
                  activeOptions={{
                    exact: to === ".",
                  }}
                >
                  <p className='hover:border-b-[3.5px] hover:border-solid hover:border-navSpecial'>{label}</p>
                </Link>
              </div>
            );
          })}
        </ul>
        <div id='nav-icon-wrapper' className='lg:invisible flex-1 lg:flex-[0.1] cursor-pointer flex flex-row-reverse'>
          <div id='nav-icon' className={"flex flex-col items-center justify-center w-max opacity-[0.45]" + (navView ? ' active opacity-[1]' : '')} onClick={() => setNavView(!navView)}>
            <img src='/line1.png' alt='line' className='block my-[2.5px] h-[3px]' id='line1' />
            <img src='/line2.png' alt='line' className='block my-[2.5px] h-[3px]' id='line2' />
            <img src='/line3.png' alt='line' className='block my-[2.5px] h-[3px]' id='line3' />
          </div>
        </div>
      </div>
      <div className={"mobile-nav block lg:hidden pb-[15px]" + (!navView ? ' hide hidden' : '')}>
        <ul className='text-center list-none ease-in-out duration-500 '>
        {[
            [".", "Home"],
            ["events", "Events"],
            ["blogs", "Blog"],
            ["team", "Team"],
          ].map(([to, label]) => {
            return (
              <div key={to} className="my-[5px]">
                <Link
                  to={to}
                  getActiveProps={() => ({ className: `text-navSpecial` })}
                  activeOptions={{
                    exact: to === ".",
                  }}
                >
                  <p>{label}</p>
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;