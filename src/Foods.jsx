import { useEffect, useState } from "react"
import axios from "axios"

const Foods = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
        axios.get("https://myapp-1-tcp6.onrender.com/employees/allemployees")
        .then(res=>setData(res.data))
        
  },[])
  return (
   <>
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {data.map((item) => (
        <div
          key={item._id}
          className="card w-[170px] h-[240px] flex flex-col justify-around relative p-2 rounded-lg bg-white transform transition-transform duration-200 ease-in-out sm:hover:scale-105 shadow"
        >
          <div className="top sm:w-[150px] sm:h-[150px] rounded-full">
            <img
              className="image sm:w-[150px] sm:h-[150px] rounded-full object-cover"
              src={item.image}
              alt={item.pname}
            />
          </div>

          <div className="bottom relative">
            <h4 className="ratingAndCount text-xs sm:text-base">
              {item.rating} <i className="fa-solid fa-star text-yellow-500"></i> | {item.reviewCount}
            </h4>
            <p className="font-medium truncate">{item.pname}</p>
            <h5 className="price text-sm">
              ₹{item.discountPrice}
              <span className="original-price text-xs text-gray-500 line-through"> ₹{item.originalPrice} </span>
            </h5>
            <button className="addtocart text-xs bg-white font-bold absolute right-2 top-[43px] sm:top-[49px] border border-green-300 px-1 py-0.5">
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
   </>
  )
};


export default Foods
