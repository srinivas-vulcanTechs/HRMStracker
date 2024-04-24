import {
	CREATE_FENCE_START,
	CREATE_FENCE_SUCCESS,
	CREATE_FENCE_FAIL,
	GET_FENCES_START,
	GET_FENCES_SUCCESS,
	GET_FENCES_FAIL,
	GET_USERS_BY_DEPT_SUCCESS,
	GET_USERS_BY_DEPT_FAIL,
	GET_USERS_BY_NAMES_SUCCESS,
	GET_USERS_BY_NAMES_FAIL,
	ASSIGN_USER_START,
	ASSIGN_USER_SUCCESS,
	ASSIGN_USER_FAIL,
	GET_ALL_USERS_SUCCESS,
	GET_ALL_USERS_FAIL,
	GET_ACTIVE_USERS_SUCCESS,
	GET_ACTIVE_USERS_FAIL,
} from "./Types";
import Api from "../Api/Api";

type CreateFenceRequestBodyProps = {
	place: string;
	name: string;
	paths: {
		lat: number;
		lng: number;
	}[];
};
type AssignUserToFenceRequestBody = {
	fenceName: string;
	branch: string;
	department: string;
	user: string;
};

export const createFence =
	(requestBody: CreateFenceRequestBodyProps) => async (dispatch: any) => {
		dispatch({
			type: CREATE_FENCE_START,
		});
		try {
			const response = await Api.post("/fence", requestBody);
			if (response) {
				dispatch({
					type: CREATE_FENCE_SUCCESS,
					payload: response.data?.message,
				});
			}
		} catch (error: any) {
			dispatch({
				type: CREATE_FENCE_FAIL,
				payload: error.response?.data.message,
			});
		}
	};

export const getFencesByNames = () => async (dispatch: any) => {
	try {
		dispatch({
			type: GET_FENCES_START,
		});
		const res = await Api.get("/fences");
		if (res) {
			dispatch({
				type: GET_FENCES_SUCCESS,
				payload: res.data.results,
			});
		}
	} catch (err: any) {
		dispatch({
			type: GET_FENCES_FAIL,
			payload: err.response?.data.message,
		});
	}
};

export const getUsersByBranchDept = () => async (dispatch: any) => {
	try {
		const res = await Api.get("/users/branch/dept");
		if (res) {
			dispatch({
				type: GET_USERS_BY_DEPT_SUCCESS,
				payload: res.data?.results,
			});
		}
	} catch (err: any) {
		dispatch({
			type: GET_USERS_BY_DEPT_FAIL,
			payload: err.response?.data.message,
		});
	}
};

export const getUsersByNames =
	(branch: string, department: string) => async (dispatch: any) => {
		try {
			const res = await Api.get(`/users/names/${branch}/${department}`);
			if (res) {
				dispatch({
					type: GET_USERS_BY_NAMES_SUCCESS,
					payload: res.data?.results,
				});
			}
		} catch (err: any) {
			dispatch({
				type: GET_USERS_BY_NAMES_FAIL,
				payload: err.response?.data.message,
			});
		}
	};

export const assignUserToFence =
	(requestBody: AssignUserToFenceRequestBody) => async (dispatch: any) => {
		try {
			dispatch({
				type: ASSIGN_USER_START,
			});
			const res = await Api.post("/assignUserToFence", requestBody);
			if (res) {
				dispatch({
					type: ASSIGN_USER_SUCCESS,
					payload: res.data.message,
				});
			}
		} catch (err: any) {
			dispatch({
				type: ASSIGN_USER_FAIL,
				payload: err.response?.data.message,
			});
		}
	};

export const getAllUsers = () => async (dispatch: any) => {
	try {
		const res = await Api.get("/users");
		if (res) {
			dispatch({
				type: GET_ALL_USERS_SUCCESS,
				payload: res.data?.users,
			});
		}
	} catch (err: any) {
		dispatch({
			type: GET_ALL_USERS_FAIL,
			payload: err.response?.data.message,
		});
	}
};

export const getActiveUsers = (fenceName: string) => async (dispatch: any) => {
	try {
		const res = await Api.get(`/getActiveUsers/${fenceName}`);
		if (res) {
			dispatch({
				type: GET_ACTIVE_USERS_SUCCESS,
				payload: res.data,
			});
			// console.log(res.data?.users);
		}
	} catch (err: any) {
		dispatch({
			type: GET_ACTIVE_USERS_FAIL,
			payload: err.response?.data.message,
		});
	}
};
