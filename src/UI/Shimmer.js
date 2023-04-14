import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Shimmer = () => {
    return (
        <div className="card__container">
            <div className="food__img">
                <Skeleton height={250} />
            </div>

            <h3 className="food__text">
                <Skeleton width={200} />
            </h3>

            <p>
                <Skeleton count={1} width={80} />
            </p>
        </div>
    );
};

export default Shimmer;
