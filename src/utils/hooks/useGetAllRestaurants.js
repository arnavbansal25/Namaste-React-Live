import { useState, useEffect } from "react";
import { SWIGGY_URL } from "../constants";

const useGetAllRestaurants = () => {
  const [restaurantList, setRestaurantList] = useState(null);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(
        `${SWIGGY_URL}restaurants/list/v5?lat=26.9550442&lng=75.71040959999999&page_type=DESKTOP_WEB_LISTING`
      );
      const json = await data.json();
      setRestaurantList(
        json?.data?.cards?.[2]?.data?.data?.cards ||
          json?.data?.cards?.[1]?.data?.data?.cards
      );
    } catch (err) {
      console.log(err);
    }
  }

  return [restaurantList, setRestaurantList];
};

export default useGetAllRestaurants;
