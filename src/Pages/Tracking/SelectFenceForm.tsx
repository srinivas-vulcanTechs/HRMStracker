import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Reducers";
import { getAllUsers, getFencesByNames } from "../../Redux/Actions/fence";

type SelectFenceFormProps = {
	formik: any;
};
const SelectFenceForm = (props: SelectFenceFormProps) => {
	const dispatch: any = useDispatch();
	const { formik } = props;
	const { fenceNamesList, userNames } = useSelector(
		(state: RootState) => state.fence
	);

	React.useEffect(() => {
		dispatch(getFencesByNames());
		dispatch(getAllUsers());
	}, [dispatch]);

	return (
		<React.Fragment>
			<div className="absolute-container">
				<form id="create-fence-form" onSubmit={formik.handleSubmit}>
					<div className="form-group mb-2">
						<select
							onChange={formik.handleChange}
							value={formik.values.fenceName}
							name="fenceName"
							className={
								formik.touched.fenceName && formik.errors.fenceName
									? "is-invalid form-control create-fields"
									: "form-control create-fields"
							}>
							<option value="">Select a Fence</option>
							{fenceNamesList.map((fence, idx) => {
								return (
									<option key={idx} value={fence.name}>
										{fence.name}
									</option>
								);
							})}
						</select>
						{formik.touched.fenceName && formik.errors.fenceName && (
							<div className="invalid-feedback">{formik.errors.fenceName}</div>
						)}
					</div>
					<div className="form-group mb-4">
						<select
							value={formik.values.users}
							onChange={formik.handleChange}
							name="users"
							className={
								formik.touched.users && formik.errors.users
									? "is-invalid form-control create-fields"
									: "form-control create-fields"
							}
							id="">
							<option value="">Select Users</option>
							<option value="active">Active Users</option>
						</select>
						{formik.touched.users && formik.errors.users && (
							<div className="invalid-feedback">{formik.errors.users}</div>
						)}
					</div>
					<div className="d-flex align-items-center gap-4">
						<button type="submit" className="primary-button w-100">
							Search
						</button>
					</div>
				</form>
			</div>
		</React.Fragment>
	);
};

export default SelectFenceForm;
