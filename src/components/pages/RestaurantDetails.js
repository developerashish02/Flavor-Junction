import { useEffect, useState } from "react";
import {
    RESTAURANTS_API,
    RESTAURANTS_DETAILS_API,
    CARD__background,
} from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "../UI/Shimmer";

const RestaurantDetail = () => {
    const [restaurant, setRestaurant] = useState({});
    const { restaurantId } = useParams();
    const { name, locality, avgRating, cuisines, cloudinaryImageId } = restaurant;

    useEffect(() => {
        getRestaurantDetail();
    }, []);

    async function getRestaurantDetail() {
        const response = await fetch(RESTAURANTS_DETAILS_API + restaurantId);
        const data = await response.json();
        setRestaurant(data?.data?.cards[0]?.card?.card?.info);
    }

    return (
        <div className="restaurant">
            <img src={CARD__background + cloudinaryImageId} className="restaurant_img" />
            <h1> {name} </h1>
            <h2> {locality} </h2>
            <h3> {avgRating} </h3>

            <p> {cuisines?.join(",")} </p>
        </div>
    );
};

export default RestaurantDetail;
