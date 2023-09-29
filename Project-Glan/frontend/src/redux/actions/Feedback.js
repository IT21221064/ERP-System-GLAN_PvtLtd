import axios from "axios";
import {
    CREATE_FEEDBACK,
    DELETE_FEEDBACK,
    FAIL_REQUEST,
    GET_FEEDBACK_LIST,
    GET_FEEDBACK_OBJ,
    MAKE_REQUEST,
    UPDATE_FEEDBACK,
} from "../constants/feedbackConstants";
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

export const getFeedbackList = (data) => {
    return {
        type: GET_FEEDBACK_LIST,
        payload: data,
    };
};

export const deleteFeedback = () => {
    return {
        type: DELETE_FEEDBACK,
    };
};

export const createFeedback = () => {
    return {
        type: CREATE_FEEDBACK,
    };
};

export const updateFeedback = () => {
    return {
        type: UPDATE_FEEDBACK,
    };
};

export const getFeedbackObj = (data) => {
    return {
        type: GET_FEEDBACK_OBJ,
        payload: data,
    };
};

export const FetchFeedbackList = () => {
    return (dispatch) => {
        dispatch(makeRequest);
        axios
            .get("/api/feedback")
            .then((res) => {
                const feedbacklist = res.data;
                dispatch(getFeedbackList(feedbacklist));
            })
            .catch((err) => {
                dispatch(failRequest(err.message));
            });
    };
};

export const RemoveFeedback = (code) => {
    return (dispatch) => {
        dispatch(makeRequest);
        axios
            .delete("/api/feedback/" + code)
            .then((res) => {
                dispatch(deleteFeedback());
            })
            .catch((err) => {
                dispatch(failRequest(err.message));
            });
    };
};

export const CreateFeedback = (data) => {
    return (dispatch) => {
        dispatch(makeRequest);
        axios
            .post("/api/feedback", data)
            .then((res) => {
                dispatch(createFeedback());
                toast.success("Customer Feedback created successfully");
            })
            .catch((err) => {
                dispatch(failRequest(err.message));
            });
    };
};

export const FeedbackUpdate = (code, data) => {
    return (dispatch) => {
        dispatch(makeRequest);
        axios
            .put("/api/feedback/" + code, data)
            .then((res) => {
                dispatch(updateFeedback());
                toast.success("Customer Feedback updated successfully");
            })
            .catch((err) => {
                dispatch(failRequest(err.message));
            });
    };
};

export const FetchFeedbackObj = (code) => {
    return (dispatch) => {
        dispatch(makeRequest);
        axios
            .get("/api/feedback/" + code)
            .then((res) => {
                const feedbacklist = res.data;
                dispatch(getFeedbackObj(feedbacklist));
            })
            .catch((err) => {
                dispatch(failRequest(err.message));
            });
    };
};