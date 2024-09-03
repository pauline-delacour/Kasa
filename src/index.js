import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import './styles/index.css';



ReactDOM.render(
  <React.StrictMode>
    <Router>  
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


