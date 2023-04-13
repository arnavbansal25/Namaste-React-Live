import React, { useState } from "react";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/hooks/useIsOnline";

export const Title = () => {
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useIsOnline();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">Cart</Link>
          </li>
          <div>{isOnline ? "🟢" : "🔴"}</div>
          <li>
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
