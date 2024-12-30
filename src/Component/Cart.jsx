
const Cart = ({ cartItem, setCartItem }) => {
    console.log("cartItem", cartItem);
  
    const handleDelete = (id) => {
      const filterItem = cartItem.filter((item) => item.id !== id);
      setCartItem(filterItem);
    };
  
    return (
      <div className="m-5">
        <div className="flex flex-col gap-5">
          {cartItem.map((product) => {
            return (
              <div
                key={product.id}
                className="shadow-lg shadow-slate-700 rounded-xl p-4 flex flex-col md:flex-row gap-5 max-w-full md:max-w-xl bg-white"
              >
                <img
                  className="h-64 w-full md:w-auto object-cover rounded-md"
                  src={product.img}
                  alt={product.model}
                />
                <div className="flex flex-col gap-3 py-3">
                  <h1 className="text-xl font-semibold">{product.model}</h1>
                  <p className="text-xl font-bold">Price: {product.price}</p>
                  <p>{product.space}</p>
                  <p>{product.camera}</p>
                  <p className="text-lg text-justify text-slate-400">
                    {product.description}
                  </p>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-blue-400 p-2 rounded-md text-white hover:bg-blue-500 transition"
                  >
                    DELETE ITEM
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default Cart;
  
