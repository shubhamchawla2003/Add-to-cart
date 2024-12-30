//import React from 'react'
import Data from "./Data";
import toast, { Toaster } from 'react-hot-toast';

const Home = ({setProductID}) => {

    const hadleOnClick = (id) =>{
        
        setProductID(id);
        toast.success('Product Added Successfully !');
    }

  return (
    <div className=" flex justify-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12  p-6">
      <Toaster />
        {Data.map((product) => {
          return (
            <div
              key={product.id}
              className=" shadow-lg shadow-slate-700 max-w-64
                  rounded-xl p-2 flex flex-col gap-1.5 "
            >
              <img src={product.img} alt="" />

              <div className=" flex justify-between text-xl">
                <p>{product.brand}</p>
                <p>{product.model}</p>
              </div>

              <p className=" font-semibold">Price:-{product.price}</p>
              <p>{product.space}</p>

              <button className=" bg-blue-400 p-2 rounded-md" onClick={()=>hadleOnClick(product.id)}>
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
