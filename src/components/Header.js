import { HEADER_LOGO, HEADER_AVTAR } from "../config/constants";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={HEADER_LOGO} alt="" />
            </div>

            <div className="avtar">
                <img src={HEADER_AVTAR} alt="" />
                <h4>Ashish</h4>
            </div>
        </div>
    )
}

export default Header; 