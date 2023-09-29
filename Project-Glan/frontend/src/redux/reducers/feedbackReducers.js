import {
    CREATE_FEEDBACK,
    DELETE_FEEDBACK,
    FAIL_REQUEST,
    GET_FEEDBACK_LIST,
    GET_FEEDBACK_OBJ,
    MAKE_REQUEST,
    UPDATE_FEEDBACK,
} from "../constants/feedbackConstants";

const initState = {
    loading: true,
    feedbacklist: [],
    feedbackobj: {},
    errmessage: "",
};

export const Reducer = (state = initState, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errmessage: action.payload,
            };
        case GET_FEEDBACK_LIST:
            return {
                loading: false,
                errmessage: "",
                feedbacklist: action.payload,
                feedbackobj: {},
            };
        case DELETE_FEEDBACK:
            return {
                ...state,
                loading: false,
            };
        case CREATE_FEEDBACK:
            return {
                ...state,
                loading: false,
            };
        case UPDATE_FEEDBACK:
            return {
                ...state,
                loading: false,
            };
        case GET_FEEDBACK_OBJ:
            return {
                ...state,
                loading: false,
                customerobj: action.payload,
            };

        default:
            return state;
    }
};

export default Reducer;