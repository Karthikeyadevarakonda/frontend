import Navbar from "./Navbar";
import BodyTop from "./BodyTop"; 
import { Routes, Route } from "react-router-dom";
import Profile from "../Profile";
import Foods from "../Foods";
import Offers from "../Offers";
import AboutUs from "../AboutUs";
import Cart from "../Cart";

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
