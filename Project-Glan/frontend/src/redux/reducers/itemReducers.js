import {
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
  FAIL_REQUEST,
  GET_ITEM_LIST,
  MAKE_REQUEST,
  GET_ITEM_OBJ,
} from "../constants/itemConstants";

const initState = {
  loading: true,
  itemlists: [],
  itemobj: {},
  errmessage: "",
};

export const ItemReducer = (state = initState, action) => {
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
    case GET_ITEM_LIST:
      return {
        loading: false,
        itemlists: action.payload,
        errmessage: "",
        itemobj: {},
      };
    case DELETE_ITEM:
      return {
        ...state,
        loading: false,
      };
    case ADD_ITEM:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_ITEM:
      return {
        ...state,
        loading: false,
      };
    case GET_ITEM_OBJ:
      return {
        ...state,
        loading: false,
        itemobj: action.payload,
      };

    default:
      return state;
  }
};

export default ItemReducer;
