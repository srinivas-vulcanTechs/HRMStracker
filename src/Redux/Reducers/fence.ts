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
} from "../Actions/Types";

const initialState = {
	loading: false,
	message: "",
	success: false,
	fenceNamesList: [],
	branchDeptNames: [],
	userNames: [],
	users: {
		name: "",
		photo: "",
	},
	paths: [],
	place: "",
};

export default function fence(state = initialState, action: any) {
	const { type, payload } = action;
	switch (type) {
		case CREATE_FENCE_START:
			return {
				...state,
				loading: true,
			};
		case CREATE_FENCE_SUCCESS:
			return {
				...state,
				loading: false,
				message: payload,
				success: true,
			};
		case CREATE_FENCE_FAIL:
			return {
				...state,
				loading: false,
				success: false,
				message: payload,
			};
		case GET_FENCES_START:
			return {
				...state,
				loading: true,
			};
		case GET_FENCES_SUCCESS:
			return {
				...state,
				loading: false,
				fenceNamesList: payload,
			};
		case GET_FENCES_FAIL:
			return {
				...state,
				loading: false,
				success: false,
				message: payload,
			};
		case GET_USERS_BY_DEPT_SUCCESS:
			return {
				...state,
				branchDeptNames: payload,
				success: true,
			};
		case GET_USERS_BY_DEPT_FAIL:
			return {
				...state,
				success: false,
				message: payload,
			};
		case GET_USERS_BY_NAMES_SUCCESS:
			return {
				...state,
				userNames: payload,
				success: true,
			};
		case GET_USERS_BY_NAMES_FAIL:
			return {
				...state,
				success: false,
				message: payload,
			};
		case ASSIGN_USER_START:
			return {
				...state,
				loading: true,
			};
		case ASSIGN_USER_SUCCESS:
			return {
				...state,
				success: true,
				message: payload,
			};
		case ASSIGN_USER_FAIL:
			return {
				...state,
				success: false,
				message: payload,
			};
		case GET_ALL_USERS_SUCCESS:
			return {
				...state,
				success: true,
				userNames: payload,
			};
		case GET_ALL_USERS_FAIL:
			return {
				...state,
				success: false,
				userNames: [],
			};
		case GET_ACTIVE_USERS_SUCCESS:
			return {
				...state,
				success: true,
				users: payload.users,
				paths: [JSON.parse(payload.paths)],
				place: payload.place,
			};
		case GET_ACTIVE_USERS_FAIL:
			return {
				...state,
				success: false,
			};
		default:
			return state;
	}
}
