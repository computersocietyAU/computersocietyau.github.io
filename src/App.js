import React from 'react';
import { Home, Navbar } from './components';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Home />
      <div className="wave"></div>
      <div className="wave"></div>
      <div className='background'></div>
    </div>
  )
};

export default App;