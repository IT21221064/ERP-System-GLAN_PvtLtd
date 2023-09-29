import axios from "axios";
import {
  MAKE_REQUEST,
  FAIL_REQUEST,
  GET_ITEM_LIST,
  ADD_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  GET_ITEM_OBJ,
} from "../constants/itemConstants";
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

export const getItemList = (data) => {
  return {
    type: GET_ITEM_LIST,
    payload: data,
  };
};

export const deleteItem = () => {
  return {
    type: DELETE_ITEM,
  };
};

export const addItem = () => {
  return {
    type: ADD_ITEM,
  };
};

export const updateItem = () => {
  return {
    type: UPDATE_ITEM,
  };
};

export const getItemObj = (data) => {
  return {
    type: GET_ITEM_OBJ,
    payload: data,
  };
};

export const FetchItemList = () => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .get("/api/item")
      .then((res) => {
        const itemlists = res.data;
        dispatch(getItemList(itemlists));
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

export const AddItem = (data) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .post("/api/item", data)
      .then((res) => {
        dispatch(addItem());
        toast.success("Item added successfully");
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

export const RemoveItem = (code) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .delete("/api/item/" + code)
      .then((res) => {
        dispatch(deleteItem());
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

export const UpdateItem = (code, data) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .put("/api/item/" + code, data)
      .then((res) => {
        dispatch(updateItem());
        toast.success("Item updated successfully");
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

export const FetchItemObj = (code) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .get("/api/item/" + code)
      .then((res) => {
        const itemlists = res.data;
        dispatch(getItemObj(itemlists));
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};
