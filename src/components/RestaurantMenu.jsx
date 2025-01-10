import React from "react";
import { useParams } from "react-router-dom";
import MenuItem from "./MenuItem";
import NestedMenuItem from "./NestedMenuItem";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { FaBars, FaStar } from "react-icons/fa";
import CarouselItem from "./CarouselItem";
import ShimerMenu from "./ShimerMenu";

function RestaurantMenu() {
  const { resId } = useParams();

  const [cards, restaurantDetails] = useRestaurantMenu(resId);

  if (!cards.length) return <ShimerMenu />;

  return (
    <div
      style={{
        width: "60%",
        margin: "auto",
      }}
    >
      <div>
        <h1 className="font-bold text-2xl font-serif py-4">
          {restaurantDetails.name}
        </h1>
      </div>
      <div
        // className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-white-100 "
        style={{
          borderRadius: 5,
          padding: "10px",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          margin: "20px 0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: "10px" }}>
            <FaStar color="green" />
          </div>
          <div>
            {restaurantDetails.avgRating} (
            {restaurantDetails.totalRatingsString}) |{" "}
            {restaurantDetails.costForTwoMessage}
          </div>
        </div>
        <div style={{ margin: "10px 0" }}>
          <div className="text-red-600">
            {restaurantDetails?.cuisines?.join(", ")}
          </div>
          <div style={{ margin: "10px 0" }}>{restaurantDetails.locality}</div>
          <div style={{ margin: "10px 0" }}>
            {restaurantDetails?.sla?.slaString?.toLowerCase()}
          </div>
        </div>
      </div>
      <div>
        <div className="font-semibold opacity-55 font-serif text-center py-5">
          --------- MENU ---------
        </div>
        <div
          style={{
            height: "5px",
            backgroundColor: "#f2f2f4",
            borderRadius: 2,
          }}
        ></div>
      </div>
      {cards?.map(({ card: { card } }, index) => {
        const cardType = card["@type"].split(".")[6];

        if (cardType === "NestedItemCategory")
          return (
            <NestedMenuItem
              card={card}
              key={index}
              restaurantName={restaurantDetails.name}
            />
          );
        else if (cardType === "ItemCategory")
          return (
            <MenuItem
              card={card}
              key={index}
              restaurantName={restaurantDetails.name}
            />
          );
        else if (cardType === "MenuCarousel")
          return (
            <div>
              <p className="font-bold text-xl py-2 font-serif">Top Picks</p>
              <CarouselItem
                items={card.carousel}
                key={index}
                restaurantName={restaurantDetails.name}
              />
              <div
                style={{
                  height: "15px",
                  backgroundColor: "#f2f2f4",
                  borderRadius: 2,
                }}
              ></div>
            </div>
          );
      })}
    </div>
  );
}

export default RestaurantMenu;
