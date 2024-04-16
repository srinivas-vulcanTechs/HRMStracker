import React from "react";
import GoogleMapReact from "google-map-react";
import SelectFenceForm from "./SelectFenceForm";
import MapSelection from "./MapSelection";

import "./styles.css";
import ClockInOutCards from "../../Components/ClockInOutCards";
import marker from "../../Assets/Images/marker.png";
import { useFormik } from "formik";

type SelectFenceValues = {
	fenceName: string;
	users: any;
};
export default function Tracking() {
	const defaultProps = {
		center: {
			lat: 10.99835602,
			lng: 77.01502627,
		},
		zoom: 11,
	};

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
	return (
		<React.Fragment>
			<div className="relative-container">
				<SelectFenceForm formik={selectFenceValues} />
				<GoogleMapReact
					bootstrapURLKeys={{ key: "" }}
					defaultCenter={defaultProps.center}
					defaultZoom={defaultProps.zoom}></GoogleMapReact>
				<MapSelection />
				<img src={marker} alt="" className="marker-img" />
				<ClockInOutCards height="35vh" />
			</div>
		</React.Fragment>
	);
}
