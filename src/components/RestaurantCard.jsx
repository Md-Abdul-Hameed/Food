import { FaStar } from "react-icons/fa";
import RestaurantDetails from "./RestaurantDetails";

const RestaurantCard = (restaurant) => {
  const {
    name,
    cuisines,
    avgRating,
    sla: { deliveryTime },
    cloudinaryImageId,
    locality,
  } = restaurant?.restaurant?.info;

  return (
    <div className="w-56 m-4 rounded-lg " style={{ height: "300px" }}>
      <img
        className="w-full h-6/12 rounded-xl h-3/5"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <RestaurantDetails restaurantDetails={restaurant?.restaurant?.info} />
    </div>
  );
};

export default RestaurantCard;
