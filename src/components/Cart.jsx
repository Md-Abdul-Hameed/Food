import React from "react";
import { useSelector } from "react-redux";
import { Description } from "./MenuItem";
import { FaStar } from "react-icons/fa";
import LazyImage from "./LazyImage";
import { CLOUDINARY_IMAGE_URL } from "../utils/constants";
import dummyImage from "./../../Assets/dummyImage.png";

function Cart() {
  const data = useSelector((store) => store.cart);
  const groupedCartItems = Object.groupBy(
    data.items,
    ({ restaurantName }) => restaurantName
  );
  const totalCost = data.items.reduce(
    (acc, item) =>
      acc + (item.price / 100 || item.defaultPrice / 100) * item.count,
    0
  );
  const G = (totalCost / 100) * 8;
  console.log(totalCost)

  if (data.items.length === 0)
    return (
      <div className="min-h-screen bg-gray-50 py-10 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Your Cart is Empty
            </h2>
            <p className="text-lg text-gray-600">
              Looks like you haven't added any items to your cart yet.
            </p>
          </div>
        </div>
      </div>
    );

  return (
    <div className="w-7/12 m-auto">
      <h1 className="font-bold text-2xl font-serif py-4">Cart Details</h1>
      {data.items.map((info) => (
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
              <h4 className="font-semibold opacity-90">
                {info.name} ({info.count})
              </h4>
              <h5 className="font-semibold opacity-90 py-1">
                ₹{(info.price / 100 || info.defaultPrice / 100) * info.count}{" "}
                for {info.count}
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
      ))}
      <div className="w-8/12 m-auto border flex flex-col justify-center items-center shadow px-10 my-10 rounded-lg">
        <div className="font-bold text-2xl font-serif py-4">Bill Details</div>

        <div className="flex justify-between w-full font-serif py-2">
          <p>Item Total</p>
          <p>₹{totalCost}</p>
        </div>
        <div className="flex justify-between w-full font-serif py-2">
          <p>Delivery Fee</p>
          <p>₹35</p>
        </div>
        <div className="flex justify-between w-full font-serif py-2">
          <p>Platform Fee</p>
          <p>₹5</p>
        </div>
        <div className="flex justify-between w-full font-serif py-2">
          <p>GST and Resataurant Charges</p>
          <p>₹{G}</p>
        </div>
        <div className="h-1 w-full bg-slate-300 rounded-md"></div>
        <div className="flex justify-between w-full font-serif py-2">
          <p>TO PAY </p>
          <p>₹{totalCost + 40 + G}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
