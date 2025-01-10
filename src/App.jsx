import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
// import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./utils/store";
import ShimerMenu from "./components/ShimerMenu";
import CorsError from "./components/CorsError";
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));
const Cart = lazy(() => import("./components/Cart"));

function App() {
  
  return (
    <Provider store={store}>
      {" "}
      <div
        className="app"
        // style={{ height: "900px", overflowY: "scroll" }}
        // onScroll={handleScroll}
      >
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/corserror", element: <CorsError /> },
      {
        path: "/restaurant/:resId",
        element: (
          <Suspense fallback={<ShimerMenu />}>
            {" "}
            <RestaurantMenu />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            {" "}
            <Cart />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

export default App;
