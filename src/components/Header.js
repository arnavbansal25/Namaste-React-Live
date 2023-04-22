import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_CDN } from "../utils/constants";
import useIsOnline from "../utils/hooks/useIsOnline";
import UserContext from "../utils/UserContext";

export const Title = () => {
  return (
    <a href="/">
      <img className="h-28 p-2" alt="logo" src={LOGO_CDN} />
    </a>
  );
};

const Header = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useIsOnline();

  const { user } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
      <Title />
      <div>
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>

          <li className="px-2">
            <Link to="/about">About</Link>
          </li>

          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Cart</Link>
          </li>
          <div>{isOnline ? "🟢" : "🔴"}</div>
          <span className="p-2 font-bold text-red-900">{user.name}</span>
          <li className="px-2">
            {isLoggedIn ? (
              <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
              <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
