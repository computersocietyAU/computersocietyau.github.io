import React, {useEffect, useState} from 'react';
import { Home, Navbar, Events } from './components';
import { Router, Outlet, ReactLocation} from '@tanstack/react-location';

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path:'/events',
    element: <Events/>
  },
  {
    path: '/blogs',
    element: <div>Blogs Page</div>,
    // children:{
    //  path:':blogId',
    //  element: <div>Blog ID Page</div>
    // }
  },
  {
    path:'/team',
    element: <div>Teams Page</div>
  },
]

const location = new ReactLocation();

const App = () => {
  
  const [currentPage, setCurrentPage] = useState("");
  useEffect(() => {
    setCurrentPage(window.location.pathname);
  });
  
  return (
    <Router location={location} routes={routes}>
      <div className="App">
        <Navbar />
        <Outlet />
        {
          currentPage === "/" ?
          <>
              <div className="wave"></div>
              <div className="wave"></div>
          </> :
          <div></div>
        }
        <div className='background'></div>
      </div>
    </Router>
  );
}

export default App;
