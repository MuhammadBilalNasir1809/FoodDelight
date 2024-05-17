import React ,{useContext} from 'react'
import './Fooddisplay.css'
import { ShopContext } from '../../Context/ShopContext'
import Fooditems from '../FoodItems/Fooditems'

const Fooddisplay = ({category}) => {
    const {food_list} = useContext(ShopContext)
  return (
    <div className='food-display' id ='food-display'>
        <h2>TOP DISHES</h2>
        <div className="food-display-list">
            {
                
                food_list.map((item,index)=>{
                    if(category==='ALL' || category===item.category)
                    return (
                        <Fooditems key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>

                    )
                })
            }
        </div>
      
      
    </div>
  )
}

export default Fooddisplay
