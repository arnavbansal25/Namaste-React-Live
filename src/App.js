import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import React, { Suspense, lazy, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Body from "./components/pages/home/Body";
import Cart from "./components/pages/cart/Cart";
import About from "./components/pages/about/About";
import Example from "./components/pages/about/Example";
import Contact from "./components/pages/contact/Contact";
import ErrorPage from "./components/common/ErrorPage";
import ExampleClass from "./components/pages/about/ExampleClass";
import RestaurantMenu from "./components/pages/home/RestaurantMenu";

import store from "./utils/store";
import UserContext from "./utils/UserContext";

const Instamart = lazy(() => import("./components/pages/Instamart/Instamart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Arnav",
    email: "arnav@gmail.com",
  });
  // let's assume this is the value we fetched from an api call

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
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
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
