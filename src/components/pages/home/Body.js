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
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Seach
        </button>
      </div>
      <div className="restaurant-list">
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
