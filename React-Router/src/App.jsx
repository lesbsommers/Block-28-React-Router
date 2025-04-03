import { Routes, Route, Link } from "react-router-dom"; 
import Blue from './pages/Blue.jsx';  
import Red from './pages/Red.jsx';
import Purple from './pages/Purple.jsx';
import Home from './pages/Home.jsx';
import './App.css';

function App() {

  return (
    <>
      <div id="container">
      <div id="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blue">Blue</Link>
          </li>
          <li>
            <Link to="/red">Red</Link>
          </li>
          <li>
            <Link to="/purple">Purple</Link>
          </li>
        </ul>
      </div>

      <div id="main-section">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/blue" element={<h1>Blue</h1>} />
          <Route path="/red" element={<h1>Red</h1>} />  
          <Route path="/purple" element={<h1>Purple</h1>} />
        </Routes>
      </div>
      </div>

      <div id="footer">
        <footer>
          <nav className="footer-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blue">Blue</Link>
              </li>
              <li>
                <Link to="/red">Red</Link>
              </li>
              <li>
                <Link to="/purple">Purple</Link>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </>
  );
}

export default App;
