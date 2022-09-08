import React from 'react';
import {  Navbar, Events, Home } from './components';
import { Router, Outlet, ReactLocation} from '@tanstack/react-location';
import Blog from './components/Blog/Blog';
import ExploreBlog from './components/Blog/ExploreBlog';

const routes = [
  {
    path: '/',
    element: <Home/>
  },
  {
    path:'/events',
    element: <Events/>
  },
  {
    path: '/blogs',
    element: <Blog />
  },
  {
    path: '/explore',
    element: <ExploreBlog />
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
        <div className='background fixed inset-0 z-[-1] bg-no-repeat bg-center bg-cover'>
        </div>
      </div>
    </Router>
  );
}

export default App;