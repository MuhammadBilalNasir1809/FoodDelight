import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [cartitems,setCartitems] = useState({});
    const [token,settoken] = useState({});
    const addtocart = (itemId)=>{
        if(!cartitems[itemId]){
            setCartitems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromcart = (itemId)=>{
        setCartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount = () =>{
       let totalAmount = 0;
       for(const item in cartitems) 
       {
          let itemInfo = food_list.find((product)=>product._id===item);
          totalAmount+=itemInfo.price*cartitems[item];
       }
       
       return totalAmount;
    }
    useEffect(()=>{
        console.log(cartitems)
    },[cartitems])
    useEffect(()=>{
        if(localStorage.getItem("token")){
            settoken(localStorage.getItem("token"))
        }
    },[])
    const contextValue = {
        food_list,
        cartitems,
        setCartitems,
        addtocart,
        removeFromcart,
        getTotalCartAmount,
        token,
        settoken
    };
    return (
      <ShopContext.Provider value={contextValue}>
        {props.children} {/* Correct prop name is 'children' */}
      </ShopContext.Provider>
    );
};

export default ShopContextProvider;
