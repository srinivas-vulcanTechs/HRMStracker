import React from "react";
import SelectFenceForm from "./SelectFenceForm";
import MapSelection from "./MapSelection";
import {
	GoogleMap,
	useJsApiLoader,
	MarkerF,
	Polygon,
} from "@react-google-maps/api";
import UsersList from "../../Components/UsersList";

import "./styles.css";
import ClockInOutCards from "../../Components/ClockInOutCards";
import { useFormik } from "formik";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { getActiveUsers } from "../../Redux/Actions/fence";
import { RootState } from "../../Redux/Reducers";

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

const dummyUsers = [
	{
		id: 1,
		name: "Sia Soul",
		profilePicture:
			"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais",
	},
	{
		id: 2,
		name: "Sia Soul",
		profilePicture:
			"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais",
	},
	{
		id: 3,
		name: "Sia Soul",
		profilePicture:
			"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais",
	},
	{
		id: 4,
		name: "Sia Soul",
		profilePicture:
			"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais",
	},
	{
		id: 5,
		name: "Sia Soul",
		profilePicture:
			"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais",
	},
	{
		id: 6,
		name: "Sia Soul",
		profilePicture:
			"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais",
	},
	{
		id: 7,
		name: "Sia Soul",
		profilePicture:
			"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais",
	},
	{
		id: 8,
		name: "Sia Soul",
		profilePicture:
			"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais",
	},
	{
		id: 9,
		name: "Sia Soul",
		profilePicture:
			"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais",
	},
	{
		id: 19,
		name: "Sia Soul",
		profilePicture:
			"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais",
	},
	{
		id: 11,
		name: "Sia Soul",
		profilePicture:
			"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais",
	},
	{
		id: 12,
		name: "Sia Soul",
		profilePicture:
			"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais",
	},
	{
		id: 13,
		name: "Sia Soul",
		profilePicture:
			"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais",
	},
	{
		id: 14,
		name: "Sia Soul",
		profilePicture:
			"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais",
	},
];
export default function Tracking() {
	const dispatch = useDispatch();
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyDMUBcXRG08RcGle0no7luNMqiozxyrH6k",
	});
	const [map, setMap] = React.useState(null);
	const { users, paths, place } = useSelector((state) => state.fence);

	console.log(paths);
	const [userClicked, setUserClicked] = React.useState(false);

	// console.log(users);
	const selectFenceValues = useFormik({
		initialValues: {
			fenceName: "",
			users: [""],
		},
		validate: (values) => {
			let errors = {};
			if (!values.fenceName) {
				errors.fenceName = "Select a Fence";
			}
			if (!values.users) {
				errors.users = "Please select users !";
			}
			return errors;
		},
		onSubmit: (values) => {
			if (values.fenceName && values.users === "active") {
				dispatch(getActiveUsers(values.fenceName));
			}
		},
	});

	React.useEffect(() => {
		if (map && paths && paths.length > 0 && paths[0]?.length > 0) {
			// Extracting the first path from paths array
			const firstPath = paths[0][0];

			// Calculating the bounds of the polygon
			const bounds = new window.google.maps.LatLngBounds();
			firstPath.forEach((point) => bounds.extend(point));

			// Getting the center of the bounds
			const center = bounds.getCenter();

			// Panning the map to the center of the bounds
			map.panTo(center);
		}
	}, [map, paths]);

	const onLoad = React.useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);

		setMap(map);
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
	}, []);

	const mediumDevices = useMediaQuery({ query: "(max-width: 1025px)" });
	const smallDevices = useMediaQuery({ query: "(max-width: 760px)" });
	const mobileDevices = useMediaQuery({ query: "(max-width: 320px)" });
	const largeDevices = useMediaQuery({ query: "(max-width: 1430px)" });

	const [activeMarker, setActiveMarker] = React.useState(null);

	const handleActiveMarker = (marker) => {
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
							borderRadius: "9px",
						}}
						center={center}
						zoom={paths ? 5 : 10}
						onLoad={onLoad}
						onUnmount={onUnmount}>
						{markers.map(({ id, name, position }) => (
							<MarkerF key={id} position={position}></MarkerF>
						))}
						{users && userClicked && paths && (
							<Polygon
								paths={paths.flat()}
								options={{
									fillColor: "#FF0000",
									fillOpacity: 0.35,
									strokeColor: "#FF0000",
									strokeOpacity: 0.8,
									strokeWeight: 2,
								}}
							/>
						)}
					</GoogleMap>
					<MapSelection />
					<ClockInOutCards height="35vh" />
					{users && users.length > 0
						? users.map((user, idx) => {
								return (
									<UsersList
										key={idx}
										user={user}
										userClicked={userClicked}
										setUserClicked={setUserClicked}
									/>
								);
						  })
						: null}
				</div>
			)}
		</React.Fragment>
	);
}
