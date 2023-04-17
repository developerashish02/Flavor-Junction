import { HEADER_LOGO, HEADER_AVTAR } from "./utils/constants";
import "./css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="header">
			<div className="logo">
				<img src={HEADER_LOGO} alt="" />
			</div>

			<div className="nav__bar">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About Us</Link>
					</li>
					<li>
						<Link to="/contact-us">Contact Us</Link>
					</li>

					<li>
						<Link to="sign-up">Sign up</Link>
					</li>
				</ul>
			</div>

			<div className="avtar">
				<img src={HEADER_AVTAR} alt="" />
				<h4>Ashish</h4>
			</div>
		</div>
	);
};

export default Header;
