import React from "react";
import ReactDOM from "react-dom/client";
import { restaurantList } from "./utils";

/*
Header
  - Logo
  - Nav Items (right side)
  - Cart
Body
  - Search Bar
  - Restaurant List
    - Restaurant Card (many cards)
      - Image
      - Name
      - Rating
      - Cuisines
Footer
  - Links
  - Copyright Info
*/

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTweev2cNZCgecH7BJbsS2WxVkVCOWIDj6M3Q&usqp=CAU"
      />
    </a>
  );
};

const Header = (props) => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const cdnURL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const RestaurantList = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img src={`${cdnURL}${cloudinaryImageId}`} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList?.map((restaurant) => {
        return <RestaurantList {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
