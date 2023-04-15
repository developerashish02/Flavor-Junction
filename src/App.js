import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";
import RestaurantDetail from "./components/RestaurantDetails";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/restaurant/:restaurantId",
                element: <RestaurantDetail />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
