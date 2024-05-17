import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';  // Adjust the path if needed

const Navbar = () => {
  return (
    <div className='Navbar'>
      <img className='logo' src={logo} alt="Logo" />
    </div>
  );
};

export default Navbar;
