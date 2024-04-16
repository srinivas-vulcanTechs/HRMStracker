import React from "react";
import GoogleMapReact from "google-map-react";

import "./styles.css";
import ClockInOutCards from "../../Components/ClockInOutCards";
import whiteBell from "../../Assets/Images/whiteBell.png";
import SelectFenceWIthDate from "./SelectFenceWIthDate";

export default function TrackingHistory() {
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
				<SelectFenceWIthDate />
				<GoogleMapReact
					bootstrapURLKeys={{ key: "" }}
					defaultCenter={defaultProps.center}
					defaultZoom={defaultProps.zoom}></GoogleMapReact>
				<ClockInOutCards height="35vh" img={whiteBell} />
			</div>
		</React.Fragment>
	);
}
