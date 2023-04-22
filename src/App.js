import React, { Suspense, lazy, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/pages/home/Body";
import Contact from "./components/pages/Contact";
import About from "./components/pages/about/About";
import ErrorPage from "./components/pages/ErrorPage";
import Example from "./components/pages/about/Example";
import ExampleClass from "./components/pages/about/ExampleClass";
import RestaurantMenu from "./components/pages/home/RestaurantMenu";
import UserContext from "./utils/UserContext";

const Instamart = lazy(() => import("./components/pages/Instamart/Instamart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Arnav",
    email: "arnav@gmail.com",
  });
  // let's assume this is the value we fetched from an api call

  return (
    <>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </>
  );
};

// this should be created below AppLayout component, since we have to use it inside `element`
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "example",
            element: <Example />,
          },
          {
            path: "example-class",
            element: <ExampleClass name="Arnav" />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "instamart",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
