//import React from 'react'
import {Link} from "react-router-dom";

const Header = ({cartItem}) => {
  return (
    <div className=" sticky top-0">
      <div className=" flex justify-between bg-slate-500 p-4 sticky top-0 text-2xl">
        <Link to="/">Home</Link>
        <div className=" flex  gap-1 relative">
        <Link to="/cart"><img className=" w-10" src="https://www.svgrepo.com/show/7898/shopping-cart.svg" alt=""/></Link>
        <p className=" bg-yellow-200 w-5 rounded-full text-center  absolute right-0 bottom-4 top-0  ">{cartItem.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Header;

