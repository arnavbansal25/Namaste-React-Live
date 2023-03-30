import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IMG_CDN_URL } from "../common/constants";

function RestaurantMenu() {
  const params = useParams();
  const { id } = params;

  const [restaurantInfo, setRestaurantInfo] = useState({});
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9550442&lng=75.71040959999999&restaurantId=${id}&submitAction=ENTER`
    );
    const json = await data?.json();
    setRestaurantInfo(json?.data?.cards?.[0]?.card?.card?.info);
    setMenu(
      json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
        ?.card?.card?.itemCards
    );
  }

  return (
    <div style={{ display: "flex" }}>
      <div>
        <h1>Restaurnt Id: {id}</h1>
        <h2>Name: {restaurantInfo?.name}</h2>
        <h2>Rating: {restaurantInfo?.avgRating} stars</h2>
        <img src={IMG_CDN_URL + restaurantInfo?.cloudinaryImageId} />
      </div>
      <div>
        {menu?.map((item) => (
          <div key={item?.id} style={{ display: "flex" }}>
            <div>{item?.card?.info?.name}</div>
            <div>&nbsp; {item?.card?.info?.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenu;
