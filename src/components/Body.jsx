import { useEffect, useRef, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimer from "./Shimer";
import { Link, useNavigate } from "react-router-dom";
import CarouselItem from "./CarouselItem";

const Body = () => {
  const [reslist, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [carouselList, setCarouselList] = useState([]);
  const search = useRef("");
  const navigate = useNavigate()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3389992&lng=78.4702215&page_type=DESKTOP_WEB_LISTING"
      );
      // console.log(res)
      const data = await res.json();
      // console.log(data)
      let extractedList = data;
      const restaurantList =
        extractedList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setCarouselList(extractedList?.data.cards[1].card.card);
      setResList(restaurantList ? restaurantList : []);
      setFilteredList(restaurantList ? restaurantList : []);
    } catch (err) {
      navigate('/corserror')
    }
  };

  const handleSearch = () => {
    setFilteredList(
      reslist.filter((restaurant) =>
        restaurant.info.name
          .toLowerCase()
          .includes(search.current.value.toLowerCase())
      )
    );
  };

  if (reslist?.length === 0) return <Shimer />;

  return (
    <div className="body-container">
      <div className="w-10/12 m-auto">
        <div className="flex  w-10/12 m-auto p-10 space-y-4 bg-darkBlue rounded-lg  md:space-y-0 md:space-x-3">
          <input
            ref={search}
            placeholder="Search for restaurant"
            className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:black focus:ring-black-500 focus:ring-1 sm:text-sm"
          />

          <button
            onClick={handleSearch}
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Search
          </button>
        </div>
      </div>
      {
        <div className="w-10/12 p-4 m-auto">
          <p className="font-bold text-xl py-2">
            Top Restaurants Chains in Hyderabad
          </p>{" "}
          <CarouselItem
            isRestaurant={true}
            items={carouselList.gridElements.infoWithStyle.restaurants}
          />
        </div>
      }
      <p className="font-bold text-xl w-10/12 m-auto p-4">
        {" "}
        Restaurants with online food delivery in Hyderabad
      </p>
      <div className="flex justify-between flex-wrap w-10/12 m-auto">
        {filteredList.map((restaurant, i) => (
          <Link to={"/restaurant/" + restaurant.info.id} key={i}>
            <RestaurantCard restaurant={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
