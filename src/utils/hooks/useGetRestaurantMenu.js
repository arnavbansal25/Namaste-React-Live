import { useState, useEffect } from "react";
import { SWIGGY_URL } from "../constants";

const useGetRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `${SWIGGY_URL}/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9550442&lng=75.71040959999999&restaurantId=${resId}&submitAction=ENTER`
    );
    const json = await data?.json();
    setRestaurantInfo(json?.data?.cards?.[0]?.card?.card?.info);
    setMenu(
      json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
        ?.card?.card?.itemCards
    );
  }

  return { restaurantInfo, menu };
};

export default useGetRestaurantMenu;
