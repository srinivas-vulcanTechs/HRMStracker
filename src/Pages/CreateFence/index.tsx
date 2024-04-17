import React from "react";
import GoogleMapReact from "google-map-react";
import FenceCreationForm from "./FenceCreationForm";

import "./styles.css";
import AssignUserForm from "./AssignUserForm";
import { useFormik } from "formik";
import PolygonDrawer from "./PolygonDrawer";

type CreateFenceValues = {
	place: string;
	fenceName: string;
};

type AssignUserValues = {
	fenceName: string;
	branch: string;
	department: string;
	user: string;
};

export default function CreateFence() {
	const createFenceFormik = useFormik({
		initialValues: {
			place: "",
			fenceName: "",
		},
		validate: (values: CreateFenceValues) => {
			let errors: Partial<CreateFenceValues> = {};
			if (!values.place) {
				errors.place = "Place is required";
			}
			if (!values.fenceName) {
				errors.fenceName = "Fence Name is required";
			}
			return errors;
		},
		onSubmit: (values: CreateFenceValues) => {
			console.log(values);
		},
	});
	const assignUserFormik = useFormik({
		initialValues: {
			fenceName: "",
			branch: "",
			department: "",
			user: "",
		},
		validate: (values: AssignUserValues) => {
			let errors: Partial<AssignUserValues> = {};
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
		onSubmit: (values: AssignUserValues) => {
			console.log(values);
		},
	});

	const defaultProps = {
		center: {
			lat: 10.99835602,
			lng: 77.01502627,
		},
		zoom: 11,
	};

	const [map, setMap] = React.useState<any>(null);

	const handleApiLoaded = ({ map }: any) => {
		setMap(map);
	};

	return (
		<React.Fragment>
			<div className="relative-container">
				<FenceCreationForm formik={createFenceFormik} />
				<GoogleMapReact
					bootstrapURLKeys={{ key: "" }}
					defaultCenter={defaultProps.center}
					defaultZoom={defaultProps.zoom}
					yesIWantToUseGoogleMapApiInternals
					onGoogleApiLoaded={({ map }: any) => handleApiLoaded(map)}>
					{map && <PolygonDrawer map={map} />}
				</GoogleMapReact>
				<AssignUserForm formik={assignUserFormik} />
			</div>
		</React.Fragment>
	);
}
