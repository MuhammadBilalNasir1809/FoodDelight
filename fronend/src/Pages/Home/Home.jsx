import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Exploremenu from '../../Components/ExploreMenu/Exploremenu'
import Fooddisplay from '../../Components/FoodDisplay/Fooddisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'
const Home = () => {
    const [category,setCategory] = useState('ALL');
  return (
    <div className='HomePage'>
        <Header />
        <Exploremenu category={category} setCategory={setCategory}/>
        <Fooddisplay category={category} />
        <AppDownload/>

    </div>
  )
}

export default Home
