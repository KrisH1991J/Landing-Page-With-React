import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your second component
export const Jumbotron = () => {
	return (
		<div className="container p-3 mb-2 bg-light">
			<div className="jumbotron m-5">
				<h1 className="display-4">A Warm Welcome!</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information.
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Call to action!
				</a>
			</div>
		</div>
	);
};
