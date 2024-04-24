import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getFencesByNames,
	getUsersByBranchDept,
	getUsersByNames,
} from "../../Redux/Actions/fence";
import { RootState } from "../../Redux/Reducers";

type AssignUserFormProps = {
	formik: any;
	fenceCreated: boolean;
};
const AssignUserForm = (props: AssignUserFormProps) => {
	const { formik, fenceCreated } = props;
	const dispatch: any = useDispatch();

	const { fenceNamesList, branchDeptNames, userNames } = useSelector(
		(state: RootState) => state.fence
	);

	console.log(userNames);
	React.useEffect(() => {
		dispatch(getFencesByNames());
		dispatch(getUsersByBranchDept());
	}, [dispatch, fenceCreated]);

	React.useEffect(() => {
		if (formik.values.branch && formik.values.department) {
			dispatch(getUsersByNames(formik.values.branch, formik.values.department));
		}
	}, [formik.values, dispatch]);

	// Function to filter unique branch names
	const uniqueBranchNames = branchDeptNames.reduce(
		(uniqueNames: string[], { branch }: { branch: string }) => {
			if (!uniqueNames.includes(branch)) {
				uniqueNames.push(branch);
			}
			return uniqueNames;
		},
		[]
	);

	// Function to filter unique department names
	const uniqueDepartmentNames = branchDeptNames.reduce(
		(uniqueNames: string[], { department }: { department: string }) => {
			if (!uniqueNames.includes(department)) {
				uniqueNames.push(department);
			}
			return uniqueNames;
		},
		[]
	);

	return (
		<React.Fragment>
			<div className="absolute-container-2">
				<form id="assign-user-form" onSubmit={formik.handleSubmit}>
					<div className="mb-3 text-decoration-underline fs-5 fw-bold text-black">
						Assign User to Fence
					</div>
					<div className="form-group mb-3">
						<select
							value={formik.values.fenceName}
							name="fenceName"
							onChange={formik.handleChange}
							id=""
							className={
								formik.touched.fenceName && formik.errors.fenceName
									? "is-invalid form-control create-fields"
									: "form-control create-fields"
							}>
							<option value="">Select a Fence Name</option>
							{fenceNamesList.map((fence: { name: string }, idx: number) => {
								return (
									<option key={idx} value={fence.name}>
										{fence.name}
									</option>
								);
							})}
						</select>
						{formik.errors.fenceName && formik.touched.fenceName && (
							<div className="invalid-feedback">{formik.errors.fenceName}</div>
						)}
					</div>
					<div className="form-group mb-3">
						<select
							value={formik.values.branch}
							onChange={formik.handleChange}
							name="branch"
							id=""
							className={
								formik.touched.branch && formik.errors.branch
									? "is-invalid form-control create-fields"
									: "form-control create-fields"
							}>
							<option value="">Select Branch</option>
							{uniqueBranchNames.map((each, idx) => {
								return (
									<option key={idx} value={each}>
										{each}
									</option>
								);
							})}
						</select>
						{formik.errors.branch && formik.touched.branch && (
							<div className="invalid-feedback">{formik.errors.branch}</div>
						)}
					</div>
					<div className="form-group mb-3">
						<select
							value={formik.values.department}
							onChange={formik.handleChange}
							name="department"
							id=""
							className={
								formik.touched.department && formik.errors.department
									? "is-invalid form-control create-fields"
									: "form-control create-fields"
							}>
							<option value="">Select Department</option>
							{uniqueDepartmentNames.map((each, idx) => {
								return (
									<option key={idx} value={each}>
										{each}
									</option>
								);
							})}
						</select>
						{formik.errors.department && formik.touched.department && (
							<div className="invalid-feedback">{formik.errors.department}</div>
						)}
					</div>
					<div className="form-group mb-3">
						<select
							value={formik.values.user}
							onChange={formik.handleChange}
							name="user"
							id=""
							className={
								formik.touched.user && formik.errors.user
									? "is-invalid form-control create-fields"
									: "form-control create-fields"
							}>
							<option value="">Select a User</option>
							{userNames.map((user, idx) => {
								return (
									<option key={idx} value={user.name}>
										{user.name}
									</option>
								);
							})}
						</select>
						{formik.errors.user && formik.touched.user && (
							<div className="invalid-feedback">{formik.errors.user}</div>
						)}
					</div>
					<button type="submit" className="primary-button w-100">
						Assign
					</button>
				</form>
			</div>
		</React.Fragment>
	);
};

export default AssignUserForm;
