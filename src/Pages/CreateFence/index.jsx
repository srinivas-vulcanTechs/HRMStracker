import React from "react";
import {
	GoogleMap,
	useJsApiLoader,
	Polygon,
	Marker,
} from "@react-google-maps/api";
import FenceCreationForm from "./FenceCreationForm";
import { useMediaQuery } from "react-responsive";
import { useFormik } from "formik";
import AssignUserForm from "./AssignUserForm";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { assignUserToFence, createFence } from "../../Redux/Actions/fence";
import toast from "react-hot-toast";

const center = {
	lat: 20.5937,
	lng: 78.9629,
};

function CreateFence() {
	const dispatch = useDispatch();

	const { success, message, error } = useSelector((state) => state.fence);
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyDMUBcXRG08RcGle0no7luNMqiozxyrH6k",
	});
	const [map, setMap] = React.useState(null);
	const [address, setAddress] = React.useState("");
	const [fenceCreated, setFenceCreated] = React.useState(false);

	const mediumDevices = useMediaQuery({ query: "(max-width: 1025px)" });
	const smallDevices = useMediaQuery({ query: "(max-width: 760px)" });
	const mobileDevices = useMediaQuery({ query: "(max-width: 320px)" });
	const largeDevices = useMediaQuery({ query: "(max-width: 1430px)" });

	const [allMarkers, setAllMarkers] = React.useState([]);
	const [allShapes, setAllShapes] = React.useState([]);

	const handleMapClick = (event) => {
		const latLng = event.latLng.toJSON();
		const newMarkers = [
			...(allMarkers.length ? allMarkers[allMarkers.length - 1] : []),
			latLng,
		];
		const newShapes = allShapes.slice(); // Copy the existing shapes array

		if (newMarkers.length === 1) {
			// First marker, add to the current set
			newShapes.push([]);
		} else if (newMarkers.length >= 2) {
			// Add new shape to the current set
			newShapes[newShapes.length - 1] = newMarkers;
		}

		// Update state with new markers and shapes
		setAllMarkers([...allMarkers, newMarkers]);
		setAllShapes(newShapes);
		console.log(allShapes);
	};

	const onLoad = React.useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);

		setMap(map);
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
	}, []);

	const createFenceFormik = useFormik({
		initialValues: {
			fenceName: "",
		},
		validate: (values) => {
			let errors = {};
			if (!values.fenceName) {
				errors.fenceName = "Fence Name is required";
			}
			return errors;
		},
		onSubmit: (values, { resetForm }) => {
			const body = {
				name: values.fenceName,
				paths: allShapes,
				place: address,
			};
			dispatch(createFence(body));
			resetForm();
		},
	});

	React.useEffect(() => {
		if (success && message?.includes("Successfully")) {
			toast.success(message);
			setAllShapes([]);
			setAllMarkers([]);
			setAddress("");
			setFenceCreated(!fenceCreated);
		} else if (message === "Failed to create fence") {
			toast.error(message);
		}
	}, [success, message]);

	const assignUserFormik = useFormik({
		initialValues: {
			fenceName: "",
			branch: "",
			department: "",
			user: "",
		},
		validate: (values) => {
			let errors = {};
			if (!values.fenceName) {
				errors.fenceName = "Select a Fence Name";
			}
			if (!values.branch) {
				errors.branch = "Select a Branch";
			}
			if (!values.department) {
				errors.department = "Select a Department";
			}
			if (!values.user) {
				errors.user = "Select a user";
			}
			return errors;
		},
		onSubmit: (values, { resetForm }) => {
			const body = {
				fenceName: values.fenceName,
				branch: values.branch,
				department: values.department,
				username: values.user,
			};
			dispatch(assignUserToFence(body));
			resetForm();
		},
	});

	return isLoaded ? (
		<div className="relative-container p-lg-4 p-md-2">
			<FenceCreationForm
				map={map}
				setAllShapes={setAllShapes}
				allShapes={allShapes}
				formik={createFenceFormik}
				setAllMarkers={setAllMarkers}
				address={address}
				setAddress={setAddress}
			/>
			<GoogleMap
				mapContainerStyle={{
					width: mediumDevices
						? "100%"
						: smallDevices
						? "100%"
						: mobileDevices
						? "100%"
						: largeDevices && "100%",
					height: smallDevices ? "150vh" : "100vh",
					borderRadius: "9px",
				}}
				center={center}
				zoom={7.5}
				onLoad={onLoad}
				onUnmount={onUnmount}
				onClick={handleMapClick}>
				{allMarkers.map((markers, index) => (
					<React.Fragment key={index}>
						{/* Render markers */}
						{markers.map((marker, markerIndex) => (
							<Marker key={markerIndex} position={marker} />
						))}

						{/* Render polygon */}
						{allShapes[index] && allShapes[index].length > 1 && (
							<Polygon
								paths={allShapes[index]}
								options={{
									fillColor: "#FF0000",
									fillOpacity: 0.35,
									strokeColor: "#FF0000",
									strokeOpacity: 0.8,
									strokeWeight: 2,
								}}
							/>
						)}
					</React.Fragment>
				))}
			</GoogleMap>
			<AssignUserForm fenceCreated={fenceCreated} formik={assignUserFormik} />
		</div>
	) : (
		<></>
	);
}

export default React.memo(CreateFence);
