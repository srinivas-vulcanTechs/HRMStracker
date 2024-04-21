import React from "react";

import "./styles.css";
import ClockInOutCards from "../../Components/ClockInOutCards";
import whiteBell from "../../Assets/Images/whiteBell.jpg";
import SearchBar from "./SearchBar";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { useMediaQuery } from "react-responsive";

const center = {
	lat: 20.5937,
	lng: 78.9629,
};

const markers = [
	{
		id: 1,
		name: "ASP",
		position: { lat: 20.881832, lng: 78.623177 },
	},
	{
		id: 2,
		name: "Deva",
		position: { lat: 20.739235, lng: 77.99025 },
	},
	{
		id: 3,
		name: "Maria",
		position: { lat: 21.052235, lng: 79.243683 },
	},
	{
		id: 4,
		name: "Nil",
		position: { lat: 20.712776, lng: 78.005974 },
	},
];

export default function Triangulate() {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyDMUBcXRG08RcGle0no7luNMqiozxyrH6k",
	});
	const [map, setMap] = React.useState(null);
	const onLoad = React.useCallback(function callback(map: any) {
		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);

		setMap(map);
	}, []);

	const onUnmount = React.useCallback(function callback(map: any) {
		setMap(null);
	}, []);

	const mediumDevices = useMediaQuery({ query: "(max-width: 1025px)" });
	const smallDevices = useMediaQuery({ query: "(max-width: 760px)" });
	const mobileDevices = useMediaQuery({ query: "(max-width: 320px)" });
	const largeDevices = useMediaQuery({ query: "(max-width: 1430px)" });
	return (
		<React.Fragment>
			{isLoaded && (
				<div className="relative-container p-lg-4 p-md-2">
					<SearchBar />

					<GoogleMap
						mapContainerStyle={{
							height: smallDevices ? "150vh" : "100vh",
							width: mediumDevices
								? "100%"
								: smallDevices
								? "100%"
								: mobileDevices
								? "100%"
								: largeDevices
								? "1440px"
								: "",
							borderRadius: "9px",
						}}
						center={center}
						zoom={3}
						onLoad={onLoad}
						onUnmount={onUnmount}>
						{markers.map(({ id, position }) => (
							<MarkerF key={id} position={position}></MarkerF>
						))}
					</GoogleMap>
					<ClockInOutCards height="35vh" img={whiteBell} />
				</div>
			)}
		</React.Fragment>
	);
}
