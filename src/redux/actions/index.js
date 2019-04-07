import { HANDLE_SIGNUP } from './types';
import axios from "axios";

export function signup(signupState) {
    console.log("signupState:", signupState);
    return (dispatcher) => {
        axios.post(`https://poop-scooper.herokuapp.com/signup`, signupState).then((res) => {
            console.log("res.data:", res.data);
            dispatcher(handleSignup(res.data));
        }).catch(console.err);
    };
};

export const handleSignup = (user) => {
    console.log("in handleSignup");
    return {
        type: HANDLE_SIGNUP,
        payload: user,
        payload_error: false
    };
};