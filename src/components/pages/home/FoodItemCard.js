import { useContext } from "react";
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../../../utils/constants";
import UserContext from "../../../utils/UserContext";

const FoodItemCard = ({ name, description, imageId, price }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={`${IMG_CDN_URL}${imageId}`} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{description}</h3>
      <h5 className="font-bold">Rupees: {price / 100}</h5>
    </div>
  );
};

export default FoodItemCard;
