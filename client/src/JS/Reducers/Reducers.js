const {
    LOAD_USER,
    REGISTER_USER,
    LOGIN_USER,
    LOG_OUT,
    FAIL_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAILURE,
} = require("../ActionType/ActionType");

//initialisation
const initialState = {
    user: null,
    load: false,
    auth: false,
    error: null,
};

//pur function
const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case LOAD_USER:
        return { ...state, load: true };

    case REGISTER_USER:
        localStorage.setItem("token", payload.token);
        return { ...state, user: payload.newUser, auth: true, load: false };

    case LOGIN_USER:
        localStorage.setItem("token", payload.token);
        return { ...state, user: payload.findUser, auth: true, load: false };

    case LOG_OUT:
        localStorage.removeItem("token");
        return { ...state, user: null, auth: false, load: false };

    case FAIL_USER:
        return { ...state, error: payload };

    case DELETE_USER_SUCCESS :
        localStorage.removeItem("token");

    case DELETE_USER_FAILURE:
        return { ...state, error: payload };

    case EDIT_USER_SUCCESS:
        return { ...state, user: payload.EditUser , load: false };
        
    case EDIT_USER_FAILURE:
        return { ...state, error: payload };

    default:
        return state
    }
};
export default userReducer;
