import {useEffect, useState} from 'react'
import {Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Cart from "./Component/Cart";
import Data from "./Component/Data";

const App = () => {

  const [productID, setProductID] = useState("");
  const [cartItem, setCartItem] = useState([])

  useEffect(()=>{
    const filterObject = Data.filter((product) => product.id==productID);

    setCartItem([...cartItem, ...filterObject]);
  },[productID]) 
 

  
  
  return (
    <div>
      <Header cartItem={cartItem} />
      <Routes>
        <Route path="/" element=<Home setProductID={setProductID} /> />
        <Route path="/cart" element=<Cart cartItem={cartItem} setCartItem={setCartItem}  /> />
      </Routes>
    </div>
  )
}

export default App;
