import React from "react";
import { FaStar } from "react-icons/fa";

function RestaurantDetails({
  restaurantDetails: {
    name,
    avgRating,
    sla: { deliveryTime },
    cuisines,
    areaName,
  },
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold p-2 font-mono truncate">{name}</h3>
      <div className="flex items-center px-2">
        <div className="mr-2">
          <FaStar color="green" />
        </div>
        <div>
          <div className="flex">
            {`${avgRating}`}{" "}
            <p className="font-semibold ml-2">{`| ${deliveryTime} minutes`}</p>
          </div>
        </div>
      </div>

      <p className="font-thin truncate px-2">{cuisines.join(", ")}</p>
      <p className="font-thin px-2 truncate">{`${areaName}`}</p>
    </div>
  );
}

export default RestaurantDetails;
