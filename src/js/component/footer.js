import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your last component
export const Footer = () => {
	const myStylesFooter = {
		width: "300px"
	};

	return (
		<div>
			<nav className="navbar fixed-bottom navbar-dark bg-dark">
				<div className="container text-center" style={myStylesFooter}>
					<a className="navbar-brand">
						Made with ❤️ by Kristoffer Herman
					</a>
				</div>
			</nav>
		</div>
	);
};
