import Navbar from "./Navbar.jsx";
import BodyTop from "./BodyTop.jsx"; 
import { Routes, Route } from "react-router-dom";
import Profile from "../Profile.jsx";
import Foods from "../Foods.jsx";
import Offers from "../Offers.jsx";
import AboutUs from "../AboutUs.jsx";
import Cart from "../Cart.jsx";

const MainContainer = () => {
  return (  
    <>
    <div className=' h-full space-y-4 '>
      <Navbar/>
     
      
      <Routes>

      <Route path="/" element={<BodyTop />} />
      
      <Route path="/profile" element={<Profile />} />

      <Route path="/foods" element={<Foods />} />

      <Route path="/offers" element={<Offers />} />

      <Route path="/aboutus" element={<AboutUs />} />

      <Route path="/cart" element={<Cart />} />

      </Routes>
    

    </div>
    </>
  )
}

export default MainContainer
