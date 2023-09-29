import axios from "axios";
import { CREATE_EMP, DELETE_EMP, FAIL_REQUEST, GET_EMP_LIST, GET_EMP_OBJ, MAKE_REQUEST, UPDATE_EMP } from "../constants/employeeConstants"
import { toast } from "react-toastify";

export const makeRequest = () => {
    return {
        type: MAKE_REQUEST
    }
}

export const failRequest = (err) => {
    return {
        type: FAIL_REQUEST,
        payload: err
    }
}

export const getEmpList = (data) => {
    return {
        type: GET_EMP_LIST,
        payload: data
    }
}

export const deleteEmp = () => {
    return {
        type: DELETE_EMP
    }
}

export const createEmp = () => {
    return {
        type: CREATE_EMP
    }
}

export const updateEmp = () => {
    return {
        type: UPDATE_EMP
    }
}

export const getEmpObj = (data) => {
    return {
        type: GET_EMP_OBJ,
        payload: data
    }
}


export const FetchEmpList = () => {
    return (dispatch) => {
        dispatch(makeRequest);
        axios.get('/api/employee').then(res => {
            const empList = res.data;
            dispatch(getEmpList(empList));
        }).catch(err => {
            dispatch(failRequest(err.message));
        })
    }
}

export const RemoveEmp = (code) => {
    return (dispatch) => {
        dispatch(makeRequest);
        axios.delete('/api/employee/' + code).then(res => {
            dispatch(deleteEmp());
        }).catch(err => {
            dispatch(failRequest(err.message));
        })
    }
}

export const CreateEmp = (data) => {
    return (dispatch) => {
        dispatch(makeRequest);
        axios.post('/api/employee', data).then(res => {
            dispatch(createEmp());
            toast.success('Employee created successfully')
        }).catch(err => {
            dispatch(failRequest(err.message));
        })
    }
}

export const empupdate = (code, data) => {
    return (dispatch) => {
        dispatch(makeRequest);
        axios.put('/api/employee/' + code, data).then(res => {
            dispatch(updateEmp());
            toast.success('Employee updated successfully')
        }).catch(err => {
            dispatch(failRequest(err.message));
        })
    }
}

export const FetchEmpObj = (code) => {
    return (dispatch) => {
        dispatch(makeRequest);
        axios.get('/api/employee/' + code).then(res => {
            const emplist = res.data;
            dispatch(getEmpObj(emplist));
        }).catch(err => {
            dispatch(failRequest(err.message));
        })
    }
}