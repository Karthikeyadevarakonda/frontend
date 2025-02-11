import logo from '../assets/react.svg'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
       <nav className='h-18 flex relative bg-[#3f70d3] shadow'>
        <input type="checkbox" id="check" className="hidden" />
          <label htmlFor="check" className="absolute right-5 top-5 text-lg md:hidden text-white">
             <i className="fas fa-bars"></i>
          </label>

        <img src={logo} alt="" className='m-2 mt-4 sm:mt-3 w-10 h-10 sm:w-13 sm:h-12 rounded-full bg-white' />
        <Link to="/"><h1 className='flex justify-evenly items-center h-18 text-sm sm:text-base md:text-xs lg:text-base ml-1 mr-1 sm:ml-4 sm:mr-4 text-gray-200 cursor-pointer'><i className="fa-solid fa-house"></i> Home</h1></Link> 
           <input id='searchbar' type="text" className='bg-white text-xs sm:text-xs md:text-xs rounded-md outline-none h-7 sm:h-9 w-1/3 sm:w-1/2 md:w-1/4 lg:w-1/4 mt-5 ml-5 text-black  pl-10 lg:pl-10 md:pl-12 sm:pl-10 truncate pr-2' placeholder='Search For "Chicken",Chocolates..etc' />
           <label htmlFor="searchbar" className='absolute left-[150px] pt-0.5 sm:left-[190px] md:left-[178px] md:pt-1.5  sm:pt-1.5 lg:pt-1 lg:left-[190px] top-5 lg:text-lg md:text-md '><i className=" fa-solid fa-magnifying-glass"></i></label>
           <ul className='hidden justify-evenly items-center w-1/2 h-18 absolute right-0 sm:hidden md:flex'>
              <Link to="/profile"><li className='text-base sm:text-base md:text-xs lg:text-base text-gray-200 cursor-pointer'><i className="fa-regular fa-user"></i> Profile</li></Link>  
              <Link to="/foods"><li className='text-base sm:text-base md:text-xs lg:text-base text-gray-200 cursor-pointer'><i className="fa-solid fa-layer-group"></i> Foods</li></Link>
              <Link to="/offers"><li className='text-base sm:text-base md:text-xs lg:text-base text-gray-200 cursor-pointer'><i className="fa-solid fa-tag"></i> Offers</li></Link>
              <Link to="/aboutus"><li className='text-base sm:text-base md:text-xs lg:text-base text-gray-200 cursor-pointer'><i className="fa-regular fa-handshake"></i> About Us</li></Link>
              <Link to="/cart"><li className='text-base sm:text-base md:text-xs lg:text-base text-gray-200 cursor-pointer'><i className="fa-sharp fa-solid fa-cart-shopping"></i> Cart</li></Link>
            </ul>
       </nav>
       </>
  )
}

export default Navbar
