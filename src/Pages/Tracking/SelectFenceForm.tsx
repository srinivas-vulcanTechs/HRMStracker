import React from "react";

type SelectFenceFormProps = {
	formik: any;
};
const SelectFenceForm = (props: SelectFenceFormProps) => {
	const { formik } = props;
	return (
		<React.Fragment>
			<div className="absolute-container">
				<form id="create-fence-form" onSubmit={formik.handleSubmit}>
					<div className="form-group mb-2">
						<select
							onChange={formik.handleChange}
							value={formik.values.fenceName}
							name="select-fence"
							className={
								formik.touched.fenceName && formik.errors.fenceName
									? "is-invalid form-control create-fields"
									: "form-control create-fields"
							}>
							<option value="">Select a Fence</option>
						</select>
						{formik.touched.fenceName && formik.errors.fenceName && (
							<div className="invalid-feedback">{formik.errors.fenceName}</div>
						)}
					</div>
					<div className="form-group mb-4">
						<select
							value={formik.values.users}
							onChange={formik.handleChange}
							name="select-users"
							className={
								formik.touched.users && formik.errors.users
									? "is-invalid form-control create-fields"
									: "form-control create-fields"
							}
							id="">
							<option value="">Select Users</option>
						</select>
						{formik.touched.users && formik.errors.users && (
							<div className="invalid-feedback">{formik.errors.users}</div>
						)}
					</div>
					<div className="d-flex align-items-center gap-4">
						<button className="btn btn-primary w-100">Search</button>
					</div>
				</form>
			</div>
		</React.Fragment>
	);
};

export default SelectFenceForm;
