import React, { useEffect, useState } from "react";

import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";

const filterData = (searchText, restaurants) => {
  return restaurants.filter((r) =>
    r?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setAllRestaurants(json?.data?.cards?.[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards?.[2]?.data?.data?.cards);
    } catch (err) {
      console.log(err);
    }
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
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
  );
};

export default Body;
