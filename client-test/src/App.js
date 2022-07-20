import React from 'react';

import { BrowserRouter,
  Routes,
  Route } from 'react-router-dom';
import "./App.css";
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar'
import Signup from './components/Signup';

const App = () => {
  return (
   <div className='bg'>
    <Navbar/>
  
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>

    
   
    
    
   </div>
  );
}

export default App;
