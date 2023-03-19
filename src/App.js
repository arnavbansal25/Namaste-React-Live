import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

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
