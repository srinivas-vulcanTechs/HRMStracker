import React from "react";
import GoogleMapReact from "google-map-react";

import "./styles.css";
import ClockInOutCards from "../../Components/ClockInOutCards";
import whiteBell from "../../Assets/Images/whiteBell.png";
import SearchBar from "./SearchBar";

export default function Triangulate() {
	const defaultProps = {
		center: {
			lat: 10.99835602,
			lng: 77.01502627,
		},
		zoom: 11,
	};
	return (
		<React.Fragment>
			<div className="relative-container">
				<SearchBar />
				<GoogleMapReact
					bootstrapURLKeys={{ key: "" }}
					defaultCenter={defaultProps.center}
					defaultZoom={defaultProps.zoom}></GoogleMapReact>
				<ClockInOutCards height="35vh" img={whiteBell} />
			</div>
		</React.Fragment>
	);
}
