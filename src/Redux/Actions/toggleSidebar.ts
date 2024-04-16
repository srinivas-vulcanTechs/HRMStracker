import { TOGGLE_SIDEBAR } from "./Types";

export const toggleSidebar = () => (dispatch: any) => {
	dispatch({
		type: TOGGLE_SIDEBAR,
	});
};
