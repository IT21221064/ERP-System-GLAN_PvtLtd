import axios from "axios";
import {
    CREATE_CUSTOMER,
    DELETE_CUSTOMER,
    FAIL_REQUEST,
    GET_CUSTOMER_LIST,
    GET_CUSTOMER_OBJ,
    MAKE_REQUEST,
    UPDATE_CUSTOMER,
} from "../constants/customerConstants";
import { toast } from "react-toastify";

export const makeRequest = () => {
    return {
        type: MAKE_REQUEST,
    };
};

export const failRequest = (err) => {
    return {
        type: FAIL_REQUEST,
        payload: err,
    };
};

export const getCustomerList = (data) => {
    return {
        type: GET_CUSTOMER_LIST,
        payload: data,
    };
};

export const deleteCustomer = () => {
    return {
        type: DELETE_CUSTOMER,
    };
};

export const createCustomer = () => {
    return {
        type: CREATE_CUSTOMER,
    };
};

export const updateCustomer = () => {
    return {
        type: UPDATE_CUSTOMER,
    };
};

export const getCustomerObj = (data) => {
    return {
        type: GET_CUSTOMER_OBJ,
        payload: data,
    };
};

export const FetchCustomerList = () => {
    return (dispatch) => {
        dispatch(makeRequest);
        axios
            .get("/api/customer")
            .then((res) => {
                const customerlist = res.data;
                dispatch(getCustomerList(customerlist));
            })
            .catch((err) => {
                dispatch(failRequest(err.message));
            });
    };
};

export const RemoveCustomer = (code) => {
    return (dispatch) => {
        dispatch(makeRequest);
        axios
            .delete("/api/customer/" + code)
            .then((res) => {
                dispatch(deleteCustomer());
            })
            .catch((err) => {
                dispatch(failRequest(err.message));
            });
    };
};

export const CreateCustomer = (data) => {
    return (dispatch) => {
        dispatch(makeRequest);
        axios
            .post("/api/customer", data)
            .then((res) => {
                dispatch(createCustomer());
                toast.success("Customer created successfully");
            })
            .catch((err) => {
                dispatch(failRequest(err.message));
            });
    };
};

export const CustomerUpdate = (code, data) => {
    return (dispatch) => {
        dispatch(makeRequest);
        axios
            .put("/api/customer/" + code, data)
            .then((res) => {
                dispatch(updateCustomer());
                toast.success("Customer updated successfully");
            })
            .catch((err) => {
                dispatch(failRequest(err.message));
            });
    };
};

export const FetchCustomerObj = (code) => {
    return (dispatch) => {
        dispatch(makeRequest);
        axios
            .get("/api/customer/" + code)
            .then((res) => {
                const customerlist = res.data;
                dispatch(getCustomerObj(customerlist));
            })
            .catch((err) => {
                dispatch(failRequest(err.message));
            });
    };
};