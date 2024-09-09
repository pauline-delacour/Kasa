import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Footer from './components/Footer';
import './styles/main.scss';



const rootElement = document.getElementById("root");
const root = createRoot(rootElement)
root.render(  
<StrictMode>
    <Router>  
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
);


