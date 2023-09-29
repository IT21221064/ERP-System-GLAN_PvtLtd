import {
  CREATE_TASK,
  DELETE_TASK,
  FAIL_REQUEST,
  GET_TASK_LIST,
  GET_TASK_OBJ,
  MAKE_REQUEST,
  UPDATE_TASK,
} from "../constants/taskConstants";

const initState = {
  loading: true,
  tasklist: [],
  taskobj: {},
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
    case GET_TASK_LIST:
      return {
        loading: false,
        errmessage: "",
        tasklist: action.payload,
        taskobj: {},
      };
    case DELETE_TASK:
      return {
        ...state,
        loading: false,
      };
    case CREATE_TASK:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_TASK:
      return {
        ...state,
        loading: false,
      };
    case GET_TASK_OBJ:
      return {
        ...state,
        loading: false,
        taskobj: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
