import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IMG_CDN_URL } from "../../../utils/constants";
import useGetRestaurantMenu from "../../../utils/hooks/useGetRestaurantMenu";
import { addItem } from "../../../utils/cartSlice";
import { useDispatch } from "react-redux";

function RestaurantMenu() {
  const { id } = useParams();

  const { restaurantInfo, menu } = useGetRestaurantMenu(id);

  const dispatch = useDispatch();

  const handleAddItem = (itemName) => {
    dispatch(addItem(itemName));
  };

  return (
    <div className="flex bg-pink-50 m-2 p-2">
      <div>
        <h1>Restaurnt Id: {id}</h1>
        <h2>Name: {restaurantInfo?.name}</h2>
        <h2>
          Rating:{" "}
          {restaurantInfo?.avgRating
            ? restaurantInfo?.avgRating + " stars"
            : "Too Few Ratings"}
        </h2>
        <img src={IMG_CDN_URL + restaurantInfo?.cloudinaryImageId} />
      </div>
      <div>
        {menu?.map((item) => (
          <div key={item?.card?.info?.id} className="flex mb-2">
            <div>{item?.card?.info?.name}</div>
            <div>&nbsp; {item?.card?.info?.price}</div>
            <button
              className="px-2 ml-5 bg-green-100"
              onClick={() => handleAddItem(item)}
            >
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenu;
