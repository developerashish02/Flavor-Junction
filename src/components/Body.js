import FoodCard from "./FoodCard";
import { useState, useEffect } from "react";
import { RESTAURANTS_API } from "../config/constants";
import Shimmer from "../UI/Shimmer";

const Body = () => {
    const [restaurant, setRestaurant] = useState([]);
    const [searchText, setSarchText] = useState("");
    const [filterRestaurant, setFilterRestaurant] = useState([]);

    console.log("state chnages..");

    useEffect(() => {
        fetchRestaurantData();
    }, []);

    async function fetchRestaurantData() {
        try {
            const response = await fetch(RESTAURANTS_API);
            const data = await response.json();
            setRestaurant(data?.data?.cards[2]?.data?.data?.cards);
            setFilterRestaurant(data?.data?.cards[2]?.data?.data?.cards);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    async function handleSearch() {
        const filter = restaurant.filter((res) =>
            res?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
        );
        setFilterRestaurant(filter);
    }

    return (
        <>
            <div className="food__search">
                <input
                    type="search"
                    placeholder="search for restaurant , cusine or a dish"
                    onChange={(e) => setSarchText(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            {restaurant.length !== 0 ? (
                <div id="card__container">
                    {filterRestaurant.length !== 0 ? (
                        filterRestaurant.map((restaurant) => (
                            <FoodCard resData={restaurant} />
                        ))
                    ) : (
                        <div className="error-message">
                            <h2>No restaurants or results found</h2>
                            <p>Please try again with different search criteria.</p>
                        </div>
                    )}
                </div>
            ) : (
                <Shimmer />
            )}
        </>
    );
};

export default Body;
