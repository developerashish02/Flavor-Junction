import "../css/Shimmer.css";

const Shimmer = () => {
    return (
        <div id="card__container">
            {Array(10).fill(" ").map((shimmer, index) => (
                <div className="shimmer__card" key={index}></div>
            ))}
        </div>
    );
};

export default Shimmer;
