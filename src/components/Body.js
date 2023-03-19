import React, { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

const filterData = (searchText, restaurants) => {
  return restaurants.filter((r) => r.data.name.includes(searchText));
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestarants] = useState(restaurantList);

  return (
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
            const data = filterData(searchText, restaurantList);
            setRestarants(data);
          }}
        >
          Seach
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants?.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
