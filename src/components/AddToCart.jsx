import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

function AddToCart({ item, info, restaurantName }) {
  const dispatch = useDispatch();
  
  const addToCart = (info) => {
    dispatch(addItem({ ...info, restaurantName }));
  };
  const removeItemFromCart = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "rgb(52, 170, 64)",
        borderRadius: 5,
        border: "0.7px solid lightgray",
        width: "80%",
        position: "relative",
        left: '10%',
        bottom: 22,
        fontSize: 15,
        fontWeight: "bold",

        cursor: "pointer",
      }}
    >
      {item ? (
        <div
          className="rounded-md"
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <span
            className="w-1/3 py-2 text-center rounded-md hover:bg-slate-200"
            onClick={() => removeItemFromCart(info.id)}
          >
            -
          </span>
          <span className="w-1/3 py-2 text-center rounded-md hover:bg-slate-200">
            {item.count}
          </span>
          <span
            className="w-1/3 py-2 text-center rounded-md hover:bg-slate-200"
            onClick={() => {
              addToCart(info);
            }}
          >
            +
          </span>
        </div>
      ) : (
        <div
          className="w-full text-center p-2 rounded-md hover:bg-slate-200"
          onClick={() => {
            addToCart(info);
          }}
        >
          ADD
        </div>
      )}
    </div>
  );
}

export default AddToCart;
