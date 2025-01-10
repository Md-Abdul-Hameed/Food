import React from "react";
import MenuItem from "./MenuItem";

function NestedMenuItems({ card,restaurantName }) {
  return (
    <div>
      <h3 className="font-semibold font-serif" style={{ margin: "20px 20px" }}>{card.title}</h3>
      {card.categories.map((card) => (
        <MenuItem nestedCategory={true} card={card} restaurantName={restaurantName} />
      ))}
      <div
          style={{
            height: "15px",
            backgroundColor: "#f2f2f4",
            borderRadius: 2,
          }}
        ></div>
    </div>
  );
}

export default NestedMenuItems;
