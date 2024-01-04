import { CREATE_EMP, DELETE_EMP, FAIL_REQUEST, GET_EMP_LIST, GET_EMP_OBJ, MAKE_REQUEST, UPDATE_EMP } from "../constants/employeeConstants"

const initialstate = {
    loading: true,
    empList: [],
    empobj: {},
    errmessage: ''
}


export const EmployeeReducer = (state = initialstate, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errmessage: action.payload

            }
        case GET_EMP_LIST:
            return {
                loading: false,
                errmessage: '',
                empList: action.payload,
                empobj: {}
            }
        case DELETE_EMP:
            return {
                ...state,
                loading: false
            }
        case CREATE_EMP:
            return {
                ...state,
                loading: false
            }
        case UPDATE_EMP:
                return {
                    ...state,
                    loading: false
                }
        case GET_EMP_OBJ:
            return{
                loading: false,
                errmessage: '',
                empobj: action.payload
            }
    

        default: return state
    }
}
export default EmployeeReducer;
