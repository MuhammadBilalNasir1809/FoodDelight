import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import './Placeorder.css'
const Placeorder = () => {
  const {getTotalCartAmount} = useContext(ShopContext);
  return (
    <form className='Placeorder'>
      <div className="place-order-left">
        <p>Delivery INFO</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />

        </div>
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
        <input type="text" placeholder='City' />
        <input type="text" placeholder='State' />

        </div>
        <div className="multi-fields">
        <input type="text" placeholder='Zip Code' />
        <input type="text" placeholder='Country' />

        </div>
        <input type="text" placeholder='PhoneNumber' />
        <input type="text" placeholder='Gate_color' />


      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>CART_TOTAL</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>{0}</p>
            </div>
            <div className="cart-total-detail">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount()+2}</p>
            </div>
            <div className="cart-total-detail">
              <p>Total</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <button>ProceedToPayment</button>
          </div>
         </div>
      </div>
    </form>
  )
}

export default Placeorder
