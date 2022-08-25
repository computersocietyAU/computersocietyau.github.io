import React from 'react'
import {Router,Outlet,ReactLocation} from '@tanstack/react-location'

const routes = [
  {
    path: '/',
    element: <div>Home Page</div>
  },
  {
    path:'/events',
    element: <div>Events Page</div>
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

function App() {
  return (
    <Router location={location} routes={routes}>
      <div className="App">
        <Outlet/>
      </div>
    </Router>
  );
}

export default App;
