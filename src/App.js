import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/pages/home/Body";
import Contact from "./components/pages/Contact";
import About from "./components/pages/about/About";
import ErrorPage from "./components/pages/ErrorPage";
import Example from "./components/pages/about/Example";
import RestaurantMenu from "./components/pages/RestaurantMenu";
import ExampleClass from "./components/pages/about/ExampleClass";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
