import { CARD__background } from "../config/constants";

const FoodCard = (props) => {
    const { address, deliveryTime, avgRating, costForTwoString, cuisines, name, cloudinaryImageId } = props.resData.data;
    return (
        <div className="card__container">
            <div className="food__img">
                <img src={CARD__background + cloudinaryImageId} />

                <div className="food__offers">
                    <p className="title__offer">Free Burger 50% discoutn</p>
                    <p className="food__delivery"> {deliveryTime} Min </p>
                </div>
            </div>

            <div className="card__title">
                <h3> {name} </h3>
                <div className="avg__rating">
                    <h4>{avgRating} 🌟</h4>
                </div>
            </div>

            <div className="cousins">
                <h4> {cuisines.join(" ")} </h4>
                <h4> {costForTwoString} </h4>
            </div>
            <hr />

            <div className="food__des">
                <p> 🚀 4250+ orders placed from here recenty !</p>
            </div>
        </div>
        // </div>
    )
}

export default FoodCard; 