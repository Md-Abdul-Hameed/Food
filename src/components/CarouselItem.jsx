import React from "react";
import { CLOUDINARY_IMAGE_URL } from "../utils/constants";
import RestaurantDetails from "./RestaurantDetails";
import { useNavigate } from "react-router-dom";
import AddToCart from "./AddToCart";
import { useSelector } from "react-redux";

function CarouselItem({ items, isRestaurant = false, restaurantName }) {
  const navigate = useNavigate();
  const reducerItems = useSelector((store) => store.cart.items);
  console.log(isRestaurant);
  return (
    <div
      className={`p-4 w-10`}
      style={{
        display: "flex",
        overflowX: "auto",
        width: "100%",
        scrollSnapType: "x mandatory",
        height: isRestaurant ? "400px" : "250px",
      }}
    >
      {items.map((item, index) => {
        return (
          <div
            onClick={() => {
              if (isRestaurant) navigate("/restaurant/" + item.info.id);
            }}
            key={index}
            style={{
              // marginRight: "10px",
              flexShrink: 0,
              position: "relative",
              width: "300px",
              height: "200px",
              marginRight: "30px",
              borderRadius: 20,
              transition: "transform 0.5s ease-in-out",
              scrollSnapAlign: "start",
            }}
            className={`${isRestaurant && "cursor-pointer"}`}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: 20,
              }}
              src={`${
                CLOUDINARY_IMAGE_URL +
                (item?.info?.cloudinaryImageId
                  ? item.info.cloudinaryImageId
                  : item.dish.info.imageId)
              }`}
            ></img>
            {isRestaurant ? (
              <RestaurantDetails restaurantDetails={item.info} />
            ) : (
              <AddToCart
                item={[reducerItems?.filter((i) => i.id === item.dish.info.id)]}
                info={item.dish.info}
                restaurantName={restaurantName}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default CarouselItem;
