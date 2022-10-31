import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './components/About';
import Contacts from './components/Contacts';
import Home from './components/Home';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App