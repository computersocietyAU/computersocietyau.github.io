import React from 'react';
import {  Navbar, Events } from './components';
import { Router, Outlet, ReactLocation} from '@tanstack/react-location';

const routes = [
  {
    path: '/',
    element: <div>Home page</div>,
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
  return (
    <Router location={location} routes={routes}>
      <div className="App">
        <Navbar />
        <Outlet />
        <div className='background'></div>
      </div>
    </Router>
  );
}

export default App;