import { HANDLE_SIGNUP } from '../actions/types.js';

const initialState = {
	user: "",
	locations: [],
	error: false,
};

function rootReducer(state = initialState, action) {
	switch(action.type) {
		case HANDLE_SIGNUP:
			return {...state, user: action.user_payload, token: action.token_payload, error: action.payload_error}
		default:
        	return state;
	}
};

export default rootReducer;