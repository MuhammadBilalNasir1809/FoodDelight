import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='Header'>
      <div className="header-contents">
        <h2>Order Your Favourite Food Here</h2>
        <p>Ordering from <b>FOOD DELIGHT</b> is simple and convenient. Browse our menu, select your favorite dishes, customize as per your preferences, and proceed to checkout. Our secure online platform ensures a seamless ordering experience.</p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
