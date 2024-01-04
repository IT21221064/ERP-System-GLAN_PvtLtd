import {
    CREATE_CUSTOMER,
    DELETE_CUSTOMER,
    FAIL_REQUEST,
    GET_CUSTOMER_LIST,
    GET_CUSTOMER_OBJ,
    MAKE_REQUEST,
    UPDATE_CUSTOMER,
} from "../constants/customerConstants";

const initState = {
    loading: true,
    customerlist: [],
    customerobj: {},
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
        case GET_CUSTOMER_LIST:
            return {
                loading: false,
                errmessage: "",
                customerlist: action.payload,
                customerobj: {},
            };
        case DELETE_CUSTOMER:
            return {
                ...state,
                loading: false,
            };
        case CREATE_CUSTOMER:
            return {
                ...state,
                loading: false,
            };
        case UPDATE_CUSTOMER:
            return {
                ...state,
                loading: false,
            };
        case GET_CUSTOMER_OBJ:
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