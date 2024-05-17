import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="Footer" id='Footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo illo
            harum libero itaque, nobis placeat cum voluptates laborum similique
            vero ipsa soluta aspernatur quasi eveniet voluptas maiores alias
            minus a?
          </p>
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
        </div>
        <div className="footer-content-center">
            <h2>FOOD DELIGHT</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get Interact Through</h2>
            <ul>
                <li>+92-03150148860</li>
                <li>FOODDELIGHT@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='CopyRight'>CopyRight 2024 FoodDelight.com - Rights Reserved</p>
    </div>
  );
};

export default Footer;
