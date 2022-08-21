// import logo from './logo.svg';
import './App.css';
import Blog from './Components/Blog';
import {Routes, Route} from 'react-router-dom';
import ExploreBlog from './Components/ExploreBlog';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Blog />}></Route>
        <Route path="/explore" element={<ExploreBlog />}></Route>
      </Routes>
    </div>
  );
}

export default App;
