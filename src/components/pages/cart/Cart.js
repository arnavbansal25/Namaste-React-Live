import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItemCard from "../home/FoodItemCard";
import { clearCart } from "../../../utils/cartSlice";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClerCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="font-bold text-3xl">Cart</h1>
      <div>Number of Items: {cartItems?.length}</div>

      <button className="bg-green-100 p-2 m-5" onClick={handleClerCart}>
        Clear Cart
      </button>

      <div className="flex">
        {cartItems?.map((item, index) => (
          <FoodItemCard key={item?.key} {...item.card?.info} />
        ))}
      </div>
    </div>
  );
}
