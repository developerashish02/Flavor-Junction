import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";
import RestaurantDetail from "./components/pages/RestaurantDetails";
import ErrorPage from "./components/pages/ErrorPage";
import SignUpPage from "./components/pages/SignUpPage";


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
        errorElement: <ErrorPage />,
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
            {
                path: "/sign-up",
                element: <SignUpPage />
            }
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
