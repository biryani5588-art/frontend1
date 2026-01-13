import React, { useState } from "react";
import { useCart } from "../context/cart";

const ProductCard = ({ product, key }) => {
    const { addToCart, updateQuantity } = useCart();
  const [added, setAdded] = useState(false);
  const handleAddToCart = () => {
    addToCart({ product });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };
const { cartItems } = useCart();
  const item = cartItems.find((item) => item._id === product._id) || {
    quantity: 0,
  };
  
  return (
    <article className="group" style={{height: '560px', backgroundColor: '#ffffffc9', padding: '0 0 20px 0 ', borderRadius: '8px', boxShadow: '0 4px 7px rgba(91, 91, 91, 0.2)'}}>

      <div style={{borderTopRightRadius: "8px", borderTopLeftRadius: "8px"}} className="relative overflow-hidden bg-white">
        <img
        
          src={`http://localhost:9003${product.imageURL}`}
          alt={product.name}
          className="w-full h-[360px] object-cover group-hover:scale-105 transition"
        />
      </div>
    <div style={{padding: "20px"}}>
      <div className="mt-4" >
        <h4 className="font-serif text-[18px]">
          {product.name}
        </h4>

        <p className="text-[14px] text-[#6f6f6f] mt-1">
          Eau De Parfum
        </p>
<div className="mt-3 flex items-center justify-between">
  <p className="text-[14px] font-medium">
    {product.price} Rs
  </p>

  <div className="flex items-center border border-[#6b3f2c] rounded">
    <button
      onClick={() =>
                        updateQuantity(
                          item._id,
                          Math.max(item.quantity - 1, 0)
                        )}
      className="px-2 py-1 text-sm hover:bg-[#6b3f2c] hover:text-white transition"
    >
      −
    </button>

    <span className="px-3 text-sm select-none">
     {item.quantity}
    </span>

    <button
      onClick={() =>
                        addToCart({ product })
                      }
      className="px-2 py-1 text-sm hover:bg-[#6b3f2c] hover:text-white transition"
    >
      +
    </button>
  </div>
</div>

        <button onClick={handleAddToCart} style={{width: "100%", padding : "10px " }} className="mt-4 border border-[#6b3f2c] px-4 py-2 text-[12px] hover:bg-[#6b3f2c] hover:text-white transition">
        {added ? "✔ Added" : "Add to Cart"}
        </button>

        
      </div>
</div>
    </article>
  );
};

export default ProductCard;
