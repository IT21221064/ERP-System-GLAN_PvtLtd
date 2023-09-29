import axios from "axios";
import {
  CREATE_VEHICLE,
  DELETE_VEHICLE,
  FAIL_REQUEST,
  GET_VEHICLE_LIST,
  GET_VEHICLE_OBJ,
  MAKE_REQUEST,
  UPDATE_VEHICLE,
} from "../constants/vehicleConstants";
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

export const getVehicleList = (data) => {
  return {
    type: GET_VEHICLE_LIST,
    payload: data,
  };
};

export const deleteVehicle = () => {
  return {
    type: DELETE_VEHICLE,
  };
};

export const createVehicle = () => {
  return {
    type: CREATE_VEHICLE,
  };
};

export const updateVehicle = () => {
  return {
    type: UPDATE_VEHICLE,
  };
};

export const getVehicleObj = (data) => {
  return {
    type: GET_VEHICLE_OBJ,
    payload: data,
  };
};

export const FetchVehicleList = () => {
  return (dispatch) => {
    dispatch(makeRequest);
    axios
      .get("/api/vehicle")
      .then((res) => {
        const vehiclelist = res.data;
        dispatch(getVehicleList(vehiclelist));
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

export const RemoveVehicle = (code) => {
  return (dispatch) => {
    dispatch(makeRequest);
    axios
      .delete("/api/vehicle/" + code)
      .then((res) => {
        dispatch(deleteVehicle());
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

export const CreateVehicle = (data) => {
  return (dispatch) => {
    dispatch(makeRequest);
    axios
      .post("/api/vehicle", data)
      .then((res) => {
        dispatch(createVehicle());
        toast.success("Vehicle created successfully");
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

export const VehicleUpdate = (code, data) => {
  return (dispatch) => {
    dispatch(makeRequest);
    axios
      .put("/api/vehicle/" + code, data)
      .then((res) => {
        dispatch(updateVehicle());
        toast.success("Vehicle updated successfully");
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

export const FetchVehicleObj = (code) => {
  return (dispatch) => {
    dispatch(makeRequest);
    axios
      .get("/api/Vehicle/" + code)
      .then((res) => {
        const Vehiclelist = res.data;
        dispatch(getVehicleObj(Vehiclelist));
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};
