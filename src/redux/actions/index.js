import { HANDLE_SIGNUP } from './types';
import axios from "axios";

export function signup(signupState) {
    console.log("signupState:", signupState);
    return (dispatcher) => {
        axios.post(`https://poop-scooper.herokuapp.com/auth/signup`, signupState, { 'Access-Control-Allow-Origin': true
        }).then((res) => {
            console.log("res.data:", res.data.resp);
            dispatcher(handleSignup(res.data.resp.user, res.data.resp.token));
        }).catch(console.err);
    };
};

export const handleSignup = (user, token) => {
    console.log("in handleSignup");
    return {
        type: HANDLE_SIGNUP,
        user_payload: user,
        token_payload: token,
        payload_error: false
    };
};