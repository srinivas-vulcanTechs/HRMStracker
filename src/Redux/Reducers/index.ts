import { combineReducers } from "redux";
import toggleSidebar from "./toggleSidebar";

export const rootReducer = combineReducers({
	toggleSidebar,
});

export interface RootState {
	toggleSidebar: {
		open: boolean;
	};
}
