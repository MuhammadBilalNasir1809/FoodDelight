import React ,{useState} from 'react';
import Navbar from './Components/Navbar/Navbar'; // Adjust the path as per your file structure
import {Route , Routes} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Placeorder from './Pages/Placeorder/Placeorder'
import Footer from './Components/Footer/Footer';
import Loginsignup from './Components/LoginSignUP/Loginsignup';

const App = () => {
  const [showlogin,setshowlogin] = useState(false)
  return (
    <>
    {showlogin?<Loginsignup setshowlogin={setshowlogin}/>:<></>}
    <div className='App'>
      <Navbar setshowlogin={setshowlogin} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<Placeorder/>} />

      </Routes>
    </div>
    <Footer/>
    </>
  );
};

export default App;
