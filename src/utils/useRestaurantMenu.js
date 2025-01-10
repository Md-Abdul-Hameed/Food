import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
import { useNavigate } from "react-router-dom";

const useRestaurantMenu = (resId) => {
  const [cards, setCards] = useState([]);
  const [restaurantDetails, setRestaurantDetails] = useState({})
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${MENU_API}${resId}`);
      const data = await response.json();
      setCards(data?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards);
      setRestaurantDetails(data.data.cards[2].card.card.info)
      // console.log(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
    } catch (err) {
      navigate('/corserror')
    }
  };
  return [cards, restaurantDetails];
}

export default useRestaurantMenu;

// This is custom hook, i have created a custom hook hear to fetch the data of menu api and set it in the cards state, doing this makes our app more readable, testable, modular and scalable. Improves Reusability and separation of concerns

// Readable - As we have removed code for the fetching logic from restaurantmenu component it now has lesser code which is clean and is more readlable.

// Testable - It is easier to write test cases if every component has lesser lines of code and follow singleResponsibilityPrinciple and follows modularity.It

// Modular - Writing hooks makes our app more modular dividing every responsibility into different modules.It

// Scalable - While scaling the application it is easier because these custom hooks can be reusable 














