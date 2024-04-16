import React from "react";

type AssignUserFormProps = {
	formik: any;
};
const AssignUserForm = (props: AssignUserFormProps) => {
	const { formik } = props;
	return (
		<React.Fragment>
			<div className="absolute-container-2">
				<form id="assign-user-form" onSubmit={formik.handleSubmit}>
					<div className="mb-3 text-decoration-underline fs-5 fw-bold text-white">
						Assign User to Fence
					</div>
					<div className="form-group mb-3">
						<select
							value={formik.values.fenceName}
							onChange={formik.handleChange}
							name="fence-name"
							id=""
							className={
								formik.touched.fenceName && formik.errors.fenceName
									? "is-invalid form-control create-fields"
									: "form-control create-fields"
							}>
							<option value="">Select a Fence Name</option>
						</select>
						{formik.errors.fenceName && formik.touched.fenceName && (
							<div className="invalid-feedback">{formik.errors.fenceName}</div>
						)}
					</div>
					<div className="form-group mb-3">
						<select
							value={formik.values.branch}
							onChange={formik.handleChange}
							name="branch-name"
							id=""
							className={
								formik.touched.branch && formik.errors.branch
									? "is-invalid form-control create-fields"
									: "form-control create-fields"
							}>
							<option value="">Select Branch</option>
						</select>
						{formik.errors.branch && formik.touched.branch && (
							<div className="invalid-feedback">{formik.errors.branch}</div>
						)}
					</div>
					<div className="form-group mb-3">
						<select
							value={formik.values.department}
							onChange={formik.handleChange}
							name="department-name"
							id=""
							className={
								formik.touched.department && formik.errors.department
									? "is-invalid form-control create-fields"
									: "form-control create-fields"
							}>
							<option value="">Select Department</option>
						</select>
						{formik.errors.department && formik.touched.department && (
							<div className="invalid-feedback">{formik.errors.department}</div>
						)}
					</div>
					<div className="form-group mb-3">
						<select
							value={formik.values.user}
							onChange={formik.handleChange}
							name="user-name"
							id=""
							className={
								formik.touched.user && formik.errors.user
									? "is-invalid form-control create-fields"
									: "form-control create-fields"
							}>
							<option value="">Select a User</option>
						</select>
						{formik.errors.user && formik.touched.user && (
							<div className="invalid-feedback">{formik.errors.user}</div>
						)}
					</div>
					<button type="submit" className="btn btn-primary w-100">
						Assign
					</button>
				</form>
			</div>
		</React.Fragment>
	);
};

export default AssignUserForm;
