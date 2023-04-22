import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import UserContext from "../../../utils/UserContext";

class About extends Component {
  render() {
    return (
      <div>
        <h1>About Us Page</h1>

        <UserContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold text-xl p-10">
              {user.name} - {user.email}
            </h4>
          )}
        </UserContext.Consumer>

        <Outlet />
      </div>
    );
  }
}

export default About;
