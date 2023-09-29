import { CREATE_LOCATION, DELETE_LOCATION , FAIL_REQUEST , GET_LOCATION_LIST, GET_LOCATION_OBJ , MAKE_REQUEST, UPDATE_LOCATION} from "../constants/locationConstants";

const initState = {
    loading:true,
    locationlists: [],
    locationobj : {},
    errmessage: ''
}

export const Reducer = (state = initState, action ) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return{
                ...state,
                loading:true,
            }
        case FAIL_REQUEST:
            return{
                ...state,
                loading:false,
                errmessage:action.payload
            }
        case GET_LOCATION_LIST:
            return{
                loading:false,
                errmessage: '',
                locationlists: action.payload,
                locationobj: {}
            }
        case DELETE_LOCATION:
            return{
                ...state,
                loading:false
            }
        case CREATE_LOCATION:
            return{
                ...state,
                loading:false
            }
        case UPDATE_LOCATION:
            return{
                ...state,
                loading:false
            }
        case GET_LOCATION_OBJ:
            return{
                ...state,
                loading:false,
                locationobj: action.payload
            }
        default: return state
    }
}
export default Reducer;