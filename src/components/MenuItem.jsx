import React, { useState } from "react";
import { CLOUDINARY_IMAGE_URL } from "../utils/constants";
import { FaChevronDown, FaChevronUp, FaStar } from "react-icons/fa";
import "./../index.css";
import LazyImage from "./LazyImage";
import dummyImage from "./../../Assets/dummyImage.png";
import { useSelector } from "react-redux";
import AddToCart from "./AddToCart";

function MenuItem({ card, nestedCategory = false, restaurantName }) {
  const [showItems, setShowItems] = useState(false);

  const items = useSelector((store) => store.cart.items);

  return (
    <div>
      <div
        onClick={() => setShowItems(!showItems)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 10px",
          cursor: "pointer",
        }}
      >
        {nestedCategory ? (
          <p
            className="font-semibold opacity-80 font-serif"
            style={{ margin: "10px 10px" }}
          >
            {card.title} ({card.itemCards.length})
          </p>
        ) : (
          <p
            className="font-semibold font-serif"
            style={{ margin: "10px 10px" }}
          >
            {card.title} ({card.itemCards.length})
          </p>
        )}
        {showItems ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {showItems &&
        card.itemCards.map(({ card: { info } }) => {
          const [item] = items.filter((i) => i.id === info.id);
          return (
            <div key={info.name}>
              {/* {console.log(info)} */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 10px",
                }}
              >
                <div style={{ width: "75%" }}>
                  <h4 className="font-semibold opacity-90">{info.name}</h4>
                  <h5 className="font-semibold opacity-90 py-1">
                    ₹{info.price / 100 || info.defaultPrice / 100}
                  </h5>
                  {info.ratings.aggregatedRating.rating && (
                    <div className="flex items-center">
                      <div className="mr-2">
                        <FaStar color="green" />
                      </div>
                      <div>
                        <div>
                          {info.ratings.aggregatedRating.rating} (
                          {info.ratings.aggregatedRating.ratingCountV2})
                        </div>
                      </div>
                    </div>
                  )}
                  <Description description={info.description} />
                </div>
                <div style={{ width: "25%" }}>
                  <LazyImage
                    imageSrc={`${CLOUDINARY_IMAGE_URL}${info.imageId}`}
                    dummyImage={dummyImage}
                  ></LazyImage>
                  {/* <img
                    alt=""
                    src={`${CLOUDINARY_IMAGE_URL}${info.imageId}`}
                    style={{ width: "90%", borderRadius: 10 }}
                  ></img> */}
                  {/* <div
                    style={{
                      backgroundColor: "white",
                      color: "rgb(52, 170, 64)",
                      borderRadius: 5,
                      border: "0.7px solid lightgray",
                      width: "80%",
                      position: "relative",
                      left: 10,
                      bottom: 22,
                      fontSize: 15,
                      fontWeight: "bold",
                      
                      cursor: "pointer",
                    }}
                  >
                    {item ? (
                      <div className="rounded-md"
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <span className="w-1/3 py-2 text-center rounded-md hover:bg-slate-200" onClick={() => removeItemFromCart(info.id)}>
                          -
                        </span>
                        <span className="w-1/3 py-2 text-center rounded-md hover:bg-slate-200">{item.count}</span>
                        <span className="w-1/3 py-2 text-center rounded-md hover:bg-slate-200"
                          onClick={() => {
                            addToCart(info);
                          }}
                        >
                          +
                        </span>
                      </div>
                    ) : (
                      <div className="w-full text-center p-2 rounded-md hover:bg-slate-200"
                        onClick={() => {
                          addToCart(info);
                        }}
                      >
                        ADD
                      </div>
                    )}
                  </div> */}
                  <AddToCart
                    item={item}
                    info={info}
                    restaurantName={restaurantName}
                  />
                </div>
              </div>
              <div
                style={{
                  height: "3px",
                  backgroundColor: "#f2f2f4",
                  borderRadius: 2,
                  width: "97%",
                }}
              ></div>
            </div>
          );
        })}
      {!nestedCategory && (
        <div
          style={{
            height: "15px",
            backgroundColor: "#f2f2f4",
            borderRadius: 2,
          }}
        ></div>
      )}
    </div>
  );
}

export const Description = ({ description }) => {
  const [truncate, setTruncate] = useState("line-clamp-2");

  return (
    <p
      onClick={() => {
        setTruncate(truncate === "" ? "line-clamp-2" : "");
      }}
      style={{ width: "90%", cursor: "pointer", opacity: 0.6, paddingTop: 10 }}
      className={truncate}
    >
      {description}
    </p>
  );
};

export default MenuItem;
