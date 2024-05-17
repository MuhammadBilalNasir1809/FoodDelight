import React, { useState } from 'react';
import './Sidebar.css';
import add_icon from '../../assets/add_icon.png';
import order_icon from '../../assets/order_icon.png';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [activeOption, setActiveOption] = useState('');

  return (
    <div className="sidebar">
      <NavLink to='/add'
        className={`sidebar-option ${activeOption === 'addItems' ? 'active' : ''}`}
        onClick={() => setActiveOption('addItems')}
      >
        <img src={add_icon} alt="Add Items" />
        <p>Add Items</p>
      </NavLink>
      <NavLink to='/list'
        className={`sidebar-option ${activeOption === 'listItems' ? 'active' : ''}`}
        onClick={() => setActiveOption('listItems')}
      >
        <img src={order_icon} alt="List Items" />
        <p>List Items</p>
      </NavLink>
      <NavLink to='/order'
        className={`sidebar-option ${activeOption === 'orders' ? 'active' : ''}`}
        onClick={() => setActiveOption('orders')}
      >
        <img src={order_icon} alt="Orders" />
        <p>Orders</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;
