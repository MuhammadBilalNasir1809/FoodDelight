import React, { useContext } from 'react';
import './Fooditems.css';
import { assets } from '../../assets/assets';
import { ShopContext } from '../../Context/ShopContext';

const Fooditems = (props) => {
    const { cartitems, addtocart, removeFromcart } = useContext(ShopContext);

    return (
        <div className='Food-item'>
            <div className="food-item-image">
                <img src={props.image} alt="NoImage" />
                {
                    !cartitems[props.id] ?
                        <img className='add' onClick={() => addtocart(props.id)} src={assets.add_icon_white} alt="Add" />
                        :
                        <div className='food-item-counter'>
                            <img onClick={() => removeFromcart(props.id)} src={assets.remove_icon_red} alt="Remove" />
                            <p>{cartitems[props.id]}</p> {/* Corrected 'id' to 'props.id' */}
                            <img onClick={() => addtocart(props.id)} src={assets.add_icon_green} alt="Add" />
                        </div>
                }
                <div className="food-item-info">
                    <div className="food-item-rating">
                        <p>{props.name}</p>
                        <img src={assets.rating_starts} alt="Rating" />
                    </div>
                    <p className='food-item-description'>{props.description}</p>
                    <p className="food-item-price">${props.price}</p>
                </div>
            </div>
        </div>
    );
}

export default Fooditems;
