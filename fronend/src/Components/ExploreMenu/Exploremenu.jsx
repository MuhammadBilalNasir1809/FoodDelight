import React from 'react';
import './Exploremenu.css';
import { menu_list } from '../../assets/assets';

const Exploremenu = (props) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our Menu</h1>
      <div className='row'>
        
      </div>
      <p className='explore-menu-text'></p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() => props.setCategory(prev => prev === item.menu_name ? 'ALL' : item.menu_name)}
            className={`explore-menu-list-items ${props.category === item.menu_name ? 'active' : ''}`}
          >
            <img src={item.menu_image} alt="" />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exploremenu;
