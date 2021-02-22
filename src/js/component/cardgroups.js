import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your third component
export const CardGroups = () => {
	const myStyles = {
		width: "19rem",
		textAlign: "center",
		height: "30rem",
		marginTop: "30px"
	};

	const myImageStyles = {
		height: "13rem"
	};

	return (
		<div className="container">
			<div className="row row-cols-md-4">
				<div className="col">
					<div className="card" style={myStyles}>
						<img
							className="card-img-top"
							style={myImageStyles}
							src="https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								{
									"Some quick example text to build on the card title and make up the build of the card's content"
								}
							</p>
						</div>
						<div className="card-footer">
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card" style={myStyles}>
						<img
							className="card-img-top"
							style={myImageStyles}
							src="https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								{
									"Some quick example text to build on the card title and make up the build of the card's content"
								}
							</p>
						</div>
						<div className="card-footer">
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card" style={myStyles}>
						<img
							className="card-img-top"
							style={myImageStyles}
							src="https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								{
									"Some quick example text to build on the card title and make up the build of the card's content"
								}
							</p>
						</div>
						<div className="card-footer">
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card" style={myStyles}>
						<img
							className="card-img-top"
							style={myImageStyles}
							src="https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								{
									"Some quick example text to build on the card title and make up the build of the card's content"
								}
							</p>
						</div>
						<div className="card-footer">
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
