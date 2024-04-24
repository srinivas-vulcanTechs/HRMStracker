import React from "react";
import PlacesAutocomplete, {
	geocodeByAddress,
	getLatLng,
} from "react-places-autocomplete";

type FenceCreationFormProps = {
	formik: any;
	allShapes: {
		lat: number;
		lng: number;
	}[];
	setAllShapes: any;
	setAllMarkers: any;
	map: any;
	address: string;
	setAddress: any;
};
const FenceCreationForm = (props: FenceCreationFormProps) => {
	const {
		formik,
		allShapes,
		setAllShapes,
		setAllMarkers,
		map,
		address,
		setAddress,
	} = props;

	const handleSelect = async (selectedAddress: any) => {
		setAddress(selectedAddress);
		try {
			const results = await geocodeByAddress(selectedAddress);
			const latLng = await getLatLng(results[0]);
			console.log("Lat lng:", latLng);
			map.setCenter(latLng);
		} catch (error) {
			console.error("Error", error);
		}
	};

	return (
		<React.Fragment>
			<div className="absolute-container">
				<form id="create-fence-form" onSubmit={formik.handleSubmit}>
					<div className="form-group mb-2">
						<PlacesAutocomplete
							value={address}
							onChange={setAddress}
							onSelect={handleSelect}>
							{({
								getInputProps,
								suggestions,
								getSuggestionItemProps,
								loading,
							}) => (
								<div>
									<input
										{...getInputProps({
											placeholder: "Search Place",
											className:
												formik.errors.place && formik.touched.place
													? "is-invalid form-control create-fields"
													: "form-control create-fields",
										})}
									/>
									<div>
										{loading ? <div>Loading...</div> : null}
										{suggestions.map((suggestion, idx) => {
											const style = {
												backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
											};
											return (
												<div {...getSuggestionItemProps(suggestion, { style })}>
													{suggestion.description}
												</div>
											);
										})}
									</div>
								</div>
							)}
						</PlacesAutocomplete>
						{formik.errors.place && formik.touched.place && (
							<div className="invalid-feedback">{formik.errors.place}</div>
						)}
					</div>
					<div className="form-group mb-2">
						<input
							name="fenceName"
							type="text"
							placeholder="Fence Name"
							className={
								formik.errors.fenceName && formik.touched.fenceName
									? "is-invalid form-control create-fields"
									: "form-control create-fields"
							}
							value={formik.values.fenceName}
							onChange={formik.handleChange}
						/>
						{formik.errors.fenceName && formik.touched.fenceName && (
							<div className="invalid-feedback">{formik.errors.fenceName}</div>
						)}
					</div>
					<div className="d-flex align-items-center gap-4">
						<button
							disabled={allShapes.length === 0}
							className="primary-button w-50"
							type="submit">
							Save
						</button>
						<button
							onClick={() => {
								setAllShapes([]);
								setAllMarkers([]);
							}}
							className="secondary-button w-50"
							type="reset">
							Clear
						</button>
					</div>
				</form>
			</div>
		</React.Fragment>
	);
};

export default FenceCreationForm;
