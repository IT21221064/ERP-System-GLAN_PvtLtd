import {
    CREATE_VEHICLE,
    DELETE_VEHICLE,
    FAIL_REQUEST,
    GET_VEHICLE_LIST,
    GET_VEHICLE_OBJ,
    MAKE_REQUEST,
    UPDATE_VEHICLE,
  } from "../constants/vehicleConstants";
  
  const initState = {
    loading: true,
    vehiclelist: [],
    vehicleobj: {},
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
      case GET_VEHICLE_LIST:
        return {
          loading: false,
          errmessage: "",
          vehiclelist: action.payload,
          vehicleobj: {},
        };
      case DELETE_VEHICLE:
        return {
          ...state,
          loading: false,
        };
      case CREATE_VEHICLE:
        return {
          ...state,
          loading: false,
        };
      case UPDATE_VEHICLE:
        return {
          ...state,
          loading: false,
        };
      case GET_VEHICLE_OBJ:
        return {
          ...state,
          loading: false,
          vehicleobj: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default Reducer;
  