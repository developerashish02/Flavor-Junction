import FoodCard from "./FoodCard";
import resListdata from "../config/mockData";
import { useState } from "react";

const Body = () => {
    const [restaurant, setRestaurant] = useState(resListdata);

    const handleRatedRes = () => {
        const topRatedres = resListdata.filter(restaurant => restaurant.data.avgRating > 4);
        setRestaurant(topRatedres);
    }


    return (
        <>
            <div>
                <button className="filter-button" onClick={handleRatedRes} >
                    Top Rated ↗️
                </button>
            </div>
            <div id="card__container">
                {restaurant.map(restaurant => <FoodCard resData={restaurant} />)}
            </div>
        </>
    )
}

export default Body;