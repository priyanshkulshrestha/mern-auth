import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <div className='left'>
       <Link className="navbar-brand p-1" to="/">Priyansh</Link>
  

       </div>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className='right'>
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto leftalignul">
      <li className="nav-item active">
        <Link to="/" className="nav-link"> Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signin">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signup">Signup</Link>
      </li>
      
    </ul>
  </div>
  </div>
 
</nav>
        </>
    );
}

export default Navbar;
