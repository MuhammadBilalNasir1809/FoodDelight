import React, { useContext } from 'react';
import './Cart.css';
import { ShopContext } from '../../Context/ShopContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartitems, food_list, removeFromcart,getTotalCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();
  return (
    <div className='CartItems'>
      <div className="cart-items-container">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {food_list.map((item, index) => {
          if (cartitems[item._id] > 0) {
            return (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">${item.price}</p>
                <p className="cart-item-quantity">{cartitems[item._id]}</p>
                <p className="cart-item-total">${item.price * cartitems[item._id]}</p>
                <button className="remove-button" onClick={() => removeFromcart(item._id)}>
                  Remove
                </button>
              </div>
            );
          }
          return null;
        })}
      </div>
      {/* Separate section for cart-bottom */}
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>CART_TOTAL</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>${0}</p>
            </div>
            <div className="cart-total-detail">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0? 0 :getTotalCartAmount() +2}</p>
            </div>
            <div className="cart-total-detail">
              <p>Total</p>
              <p>${getTotalCartAmount()===0? 0 :getTotalCartAmount()}</p>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>CheckOut</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
