import { combineReducers } from "redux";
import toggleSidebar from "./toggleSidebar";
import fence from "./fence";

export const rootReducer = combineReducers({
	toggleSidebar,
	fence,
});

export interface RootState {
	toggleSidebar: {
		open: boolean;
	};
	fence: {
		loading: boolean;
		message: string;
		success: boolean;
		fenceNamesList: {
			name: string;
		}[];
		branchDeptNames: {
			branch: string;
			department: string;
		}[];
		userNames: {
			name: string;
		}[];
		users: {
			name: string;
			photo: string;
		}[];
		paths: [];
		place: string;
	};
}
