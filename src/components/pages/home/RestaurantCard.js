import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../../../utils/constants";

const RestaurantCard = ({
  id,
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <Link to={`/restaurant/${id}`}>
      <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
        <img src={`${IMG_CDN_URL}${cloudinaryImageId}`} />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines?.join(", ")}</h3>
        <h4>{lastMileTravelString}</h4>
      </div>
    </Link>
  );
};

export default RestaurantCard;
