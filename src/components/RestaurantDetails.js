import { useEffect, useState } from "react";
import { RESTAURANTS_API, RESTAURANTS_DETAILS_API } from "./utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./UI/Shimmer";

const RestaurantDetail = () => {
    const [restaurant, setRestaurant] = useState(null);
    const { restaurantId } = useParams();

    useEffect(() => {
        getRestaurantDetail();
    }, []);

    async function getRestaurantDetail() {
        const response = await fetch(RESTAURANTS_DETAILS_API + restaurantId);
        const data = await response.json();
        setRestaurant(data);
        console.log(data);
    }
    return !restaurant ? (
        <Shimmer />
    ) : (
        <div>
            <h1>Hello i am restaurant detail component...</h1>
        </div>
    );
};

export default RestaurantDetail;
