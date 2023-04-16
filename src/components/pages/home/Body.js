import React, { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import { filterData } from "../../../utils/utils";
import Shimmer from "../../../utils/components/Shimmer";
import useIsOnline from "../../../utils/hooks/useIsOnline";
import useGetAllRestaurants from "../../../utils/hooks/useGetAllRestaurants";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [allRestaurants, setAllRestaurant] = useGetAllRestaurants();
  const [filteredRestaurants, setFilteredRestaurants] = useGetAllRestaurants();

  const isOnline = useIsOnline();

  // an early return
  if (!isOnline) {
    return <h1>🔴 Offline, please check your internet connection</h1>;
  }

  return allRestaurants ? (
    <>
      <div className="p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="focus:bg-green-50 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="p-2 m-2 bg-purple-900 hover:bg-gray-500 y- text-white rounded-md"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Seach
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restaurants Found!</h1>
        ) : (
          filteredRestaurants?.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            );
          })
        )}
      </div>
    </>
  ) : (
    <Shimmer />
  );
};

export default Body;
