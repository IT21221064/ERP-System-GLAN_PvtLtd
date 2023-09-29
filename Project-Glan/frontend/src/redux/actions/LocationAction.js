import axios from "axios";
import { CREATE_LOCATION, DELETE_LOCATION , FAIL_REQUEST , GET_LOCATION_LIST, GET_LOCATION_OBJ , MAKE_REQUEST, UPDATE_LOCATION } from "../constants/locationConstants"
import { toast } from "react-toastify";

export const makeRequest = () => {
    return {
        type: MAKE_REQUEST
    }
}

export const failRequest = (err) => {
    return{
        type:FAIL_REQUEST,
        payload:err
    }
}

export const getLocationList = (data) => {
    return{
        type: GET_LOCATION_LIST,
        payload: data
    }
}

export const deleteLocation = () => {
    return{
        type: DELETE_LOCATION
    }
}

export const createLocation= () => {
    return{
        type:CREATE_LOCATION
    }
}

export const updateLocation = () => {
    return{
        type:UPDATE_LOCATION
    }
}

export const getLocationObj = (data) => {
    return{
        type:GET_LOCATION_OBJ,
        payload:data
    }
}

export const FetchLocationList =() => {
    return (dispatch) => {
        dispatch (makeRequest);
        axios.get('/api/location').then(res => {
            const locationlists = res.data;
            dispatch(getLocationList(locationlists));
        }).catch(err => {
            dispatch(failRequest(err.message));
        })
    }
}

export const RemoveLocation = (code) => {
    return(dispatch) => {
        dispatch(makeRequest);
        axios.delete('/api/location/'+ code).then(res=> {
            dispatch(deleteLocation());
        }).catch(err=> {
            dispatch(failRequest(err.message));
        })
    }
}

export const CreateLocation = (data) => {
    return (dispatch) => {
        dispatch(makeRequest);
        axios.post('/api/location', data).then(res => {
            dispatch(createLocation());
            toast.success('item created succesfully')
        }).catch(err => {
            dispatch(failRequest(err.message));
        })
    }
}

export const LocationUpdate = (code,data) => {
    return(dispatch) => {
        dispatch(makeRequest);
        axios.put('/api/location/'+ code,data).then(res => {
            dispatch(updateLocation());
            toast.success('item updated succesfully')
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
    }
}

export const FetchLocationObj = (code) => {
    return (dispatch)=> {
        dispatch(makeRequest);
        axios.get('/api/location/'+ code).then(res => {
            const locationlists =res.data;
            dispatch(getLocationObj(locationlists));
        }).catch(err => {
            dispatch(failRequest(err.message));
        })
    }
}