import { TOGGLE_SIDEBAR } from "../Actions/Types";

const initialState = {
	open: false,
};

export default function toggleSidebar(state = initialState, action: any) {
	switch (action.type) {
		case TOGGLE_SIDEBAR:
			return {
				...state,
				open: !state.open,
			};
		default:
			return state;
	}
}
