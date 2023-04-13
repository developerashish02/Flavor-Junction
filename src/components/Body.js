import FoodCard from "./FoodCard";
import resListdata from "../config/mockData";
import { useState, useEffect } from "react";
import { RESTAURANTS_API } from "../config/constants";

const Body = () => {
    const [restaurant, setRestaurant] = useState(resListdata);
    const [searchText, setSarchText] = useState("");


    console.log("state chnages..")

    useEffect(() => {
        fetchRestaurantData();
    }, [])


    async function fetchRestaurantData() {
        try {
            const response = await fetch(RESTAURANTS_API);
            const data = await response.json();
            console.log(data?.data?.cards[2]?.data?.data?.cards);
            setRestaurant(data?.data?.cards[2]?.data?.data?.cards)
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleRatedRes = () => {
        const topRatedres = resListdata.filter(restaurant => restaurant.data.avgRating > 4);
        setRestaurant(topRatedres);
    }



    return (
        <>
            <div className="food__search">
                <input type="search" placeholder="search for restaurant , cusine or a dish" onChange={(e) => setSarchText(e.target.value)} />
                <button>Search</button>
            </div>
            <div id="card__container">
                {restaurant.map(restaurant => <FoodCard resData={restaurant} />)}
            </div>
        </>
    )
}

export default Body;