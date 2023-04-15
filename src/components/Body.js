import FoodCard from "./FoodCard";
import { useState, useEffect } from "react";
import { RESTAURANTS_API } from "./utils/constants";
import Shimmer from "./UI/Shimmer";

const ErrorComponent = () => {
	return (
		<div className="error-message">
			<h2>No restaurants or results found</h2>
			<p>Please try again with different search criteria.</p>
		</div>
	);
};

const Body = () => {
	// states
	const [restaurant, setRestaurant] = useState([]);
	const [searchText, setSarchText] = useState("");
	const [filterRestaurant, setFilterRestaurant] = useState([]);

	// use effects
	useEffect(() => {
		fetchRestaurantData();
	}, []);

	// handlers
	// fetch restaurant data
	async function fetchRestaurantData() {
		try {
			const response = await fetch(RESTAURANTS_API);
			const data = await response.json();
			const cards = data?.data?.cards[2]?.data?.data?.cards;
			setRestaurant(cards);
			setFilterRestaurant(cards);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}
	// filter search
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

			<div id="card__container">
				{restaurant.length === 0 && <Shimmer /> || filterRestaurant.map((restaurant) => (
					<FoodCard resData={restaurant} />
				))}

				{restaurant.length !== 0 && filterRestaurant.length === 0 && <div className="error-message">
					<h2>No restaurants or results found</h2>
					<p>Please try again with different search criteria.</p>
				</div>}
			</div>
		</>
	);
};

export default Body;
