import axios from "axios";
import {
  CREATE_TASK,
  DELETE_TASK,
  FAIL_REQUEST,
  GET_TASK_LIST,
  GET_TASK_OBJ,
  MAKE_REQUEST,
  UPDATE_TASK,
} from "../constants/taskConstants";
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

export const getTaskList = (data) => {
  return {
    type: GET_TASK_LIST,
    payload: data,
  };
};

export const deleteTask = () => {
  return {
    type: DELETE_TASK,
  };
};

export const createTask = () => {
  return {
    type: CREATE_TASK,
  };
};

export const updateTask = () => {
  return {
    type: UPDATE_TASK,
  };
};

export const getTaskObj = (data) => {
  return {
    type: GET_TASK_OBJ,
    payload: data,
  };
};

export const FetchTaskList = () => {
  return (dispatch) => {
    dispatch(makeRequest);
    axios
      .get("/api/task")
      .then((res) => {
        const tasklist = res.data;
        dispatch(getTaskList(tasklist));
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

export const RemoveTask = (code) => {
  return (dispatch) => {
    dispatch(makeRequest);
    axios
      .delete("/api/task/" + code)
      .then((res) => {
        dispatch(deleteTask());
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

export const CreateTask = (data) => {
  return (dispatch) => {
    dispatch(makeRequest);
    axios
      .post("/api/task", data)
      .then((res) => {
        dispatch(createTask());
        toast.success("Task created successfully");
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

export const TaskUpdate = (code, data) => {
  return (dispatch) => {
    dispatch(makeRequest);
    axios
      .put("/api/task/" + code, data)
      .then((res) => {
        dispatch(updateTask());
        toast.success("Task updated successfully");
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

export const FetchTaskObj = (code) => {
  return (dispatch) => {
    dispatch(makeRequest);
    axios
      .get("/api/task/" + code)
      .then((res) => {
        const tasklist = res.data;
        dispatch(getTaskObj(tasklist));
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};
