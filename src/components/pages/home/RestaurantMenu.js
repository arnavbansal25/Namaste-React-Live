import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IMG_CDN_URL } from "../../../utils/constants";
import useGetRestaurantMenu from "../../../utils/hooks/useGetRestaurantMenu";

function RestaurantMenu() {
  const { id } = useParams();

  const { restaurantInfo, menu } = useGetRestaurantMenu(id);

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
          <div key={item?.card?.info?.id} className="flex">
            <div>{item?.card?.info?.name}</div>
            <div>&nbsp; {item?.card?.info?.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenu;
