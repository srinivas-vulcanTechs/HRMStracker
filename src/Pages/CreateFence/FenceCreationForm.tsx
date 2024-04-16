import React from "react";

type FenceCreationFormProps = {
	formik: any;
};
const FenceCreationForm = (props: FenceCreationFormProps) => {
	const { formik } = props;
	return (
		<React.Fragment>
			<div className="absolute-container">
				<form id="create-fence-form" onSubmit={formik.handleSubmit}>
					<div className="form-group mb-2">
						<input
							type="text"
							placeholder="Search Place"
							className={
								formik.errors.place && formik.touched.place
									? "is-invalid form-control create-fields"
									: "form-control create-fields"
							}
							value={formik.values.place}
							onChange={formik.handleChange}
						/>
						{formik.errors.place && formik.touched.place && (
							<div className="invalid-feedback">{formik.errors.place}</div>
						)}
					</div>
					<div className="form-group mb-2">
						<input
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
						<button className="btn btn-primary w-50" type="submit">
							Save
						</button>
						<button className="btn btn-secondary w-50" type="reset">
							Clear
						</button>
					</div>
				</form>
			</div>
		</React.Fragment>
	);
};

export default FenceCreationForm;
