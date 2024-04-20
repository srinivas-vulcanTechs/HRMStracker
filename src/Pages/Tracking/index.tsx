import React from "react";
import SelectFenceForm from "./SelectFenceForm";
import MapSelection from "./MapSelection";
import {
	GoogleMap,
	useJsApiLoader,
	MarkerF,
	InfoWindow,
} from "@react-google-maps/api";

import "./styles.css";
import ClockInOutCards from "../../Components/ClockInOutCards";
import { useFormik } from "formik";
import { useMediaQuery } from "react-responsive";

type SelectFenceValues = {
	fenceName: string;
	users: any;
};
const center = {
	lat: 20.5937,
	lng: 78.9629,
};
const markers = [
	{
		id: 1,
		name: "ASP",
		position: { lat: 20, lng: 78 },
	},
	{
		id: 2,
		name: "Deva",
		position: { lat: 20, lng: 77 },
	},
	{
		id: 3,
		name: "Maria",
		position: { lat: 21, lng: 73 },
	},
	{
		id: 4,
		name: "Nil",
		position: { lat: 20, lng: 78 },
	},
];
export default function Tracking() {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyDMUBcXRG08RcGle0no7luNMqiozxyrH6k",
	});
	const [map, setMap] = React.useState(null);

	const selectFenceValues = useFormik({
		initialValues: {
			fenceName: "",
			users: [""],
		},
		validate: (values: SelectFenceValues) => {
			let errors: Partial<SelectFenceValues> = {};
			if (!values.fenceName) {
				errors.fenceName = "Select a Fence";
			}
			if (!values.users) {
				errors.users = "Please select users !";
			}
			return errors;
		},
		onSubmit: (values: SelectFenceValues) => {
			console.log(values);
		},
	});
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

	const [activeMarker, setActiveMarker] = React.useState(null);

	const handleActiveMarker = (marker: any) => {
		if (marker === activeMarker) {
			return;
		}
		setActiveMarker(marker);
	};

	return (
		<React.Fragment>
			{isLoaded && (
				<div className="relative-container p-lg-4 p-md-2">
					<SelectFenceForm formik={selectFenceValues} />

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
						}}
						center={center}
						zoom={3}
						onLoad={onLoad}
						onUnmount={onUnmount}>
						{markers.map(({ id, name, position }) => (
							<MarkerF key={id} position={position}></MarkerF>
						))}
					</GoogleMap>
					<MapSelection />
					<ClockInOutCards height="35vh" />
				</div>
			)}
		</React.Fragment>
	);
}
