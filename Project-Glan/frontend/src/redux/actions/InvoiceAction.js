import { GET_INVOICE_LIST, MAKE_REQUEST, FAIL_REQUEST, DELETE_INVOICE, ADD_INVOICE, UPDATE_INVOICE, GET_INVOICE_OBJ } from "../constants/InvoiceConstans"
import axios from "axios"



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

//===========invoice====================

export const getInvoiceList = (data) => {
    return {
        type: GET_INVOICE_LIST,
        payload: data
    }
}

export const deleteInvoice = () => {
    return {
        type: DELETE_INVOICE
    }
}

export const addInvoice = () => {
    return {
        type: ADD_INVOICE
    }
}

export const updateInvoice = () => {
    return {
        type: UPDATE_INVOICE
    }
}

export const getInvoiceobj = (data) => {
    return {
        type: GET_INVOICE_OBJ,
        payload: data
    }
}

export const FetchInvoiceList = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        // setTimeout(()=> {
        axios.get('/api/invoice').then(res => {
            const invoicelist = res.data;
            dispatch(getInvoiceList(invoicelist));
        }).catch(err => {
            dispatch(failRequest())
        })

        //  },2000);

    }
}

export const Removeinvoice = (code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        // setTimeout(()=> {
        axios.delete('/api/invoice/' + code).then(res => {
            dispatch(deleteInvoice());
        }).catch(err => {
            dispatch(failRequest())
        })

        //  },2000);


    }
}

export const FunctionAddInvoice = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        // setTimeout(()=> {
        axios.post('/api/invoice', data).then(res => {
            dispatch(addInvoice());
        }).catch(err => {
            dispatch(failRequest(err.message))
        })

        //  },2000);


    }
}

export const FunctionUpdateInvoice = (data, code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        // setTimeout(()=> {
        axios.put('/api/invoice/' + code, data).then(res => {
            dispatch(updateInvoice());
        }).catch(err => {
            dispatch(failRequest(err.message))
        })

        //  },2000);


    }
}

export const FetchInvoiceObj = (code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        // setTimeout(()=> {
        axios.get('/api/invoice/' + code).then(res => {
            const invoicelist = res.data;
            dispatch(getInvoiceobj(invoicelist));
        }).catch(err => {
            dispatch(failRequest())
        })

        //  },2000);


    }
}
/*
//======== credit=============

export const getCreditList = (data) => {
    return {
        type: GET_CREDIT_LIST,
        payload: data
    }
}

export const deleteCredit = () => {
    return {
        type: DELETE_CREDIT
    }
}

export const addCredit = () => {
    return {
        type: ADD_CREDIT
    }
}

export const updateCredit = () => {
    return {
        type: UPDATE_CREDIT
    }
}
export const getCreditObj = (data) => {
    return {
        type: GET_CREDIT_OBJ,
        payload: data
    }
}




export const FetchCreditList = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        //setTimeout(()=> {
        axios.get('/api/credit').then(res => {
            const creditlist = res.data;
            dispatch(getCreditList(creditlist));
        }).catch(err => {
            dispatch(failRequest(err.message))
        })

        // },2000);


    }
}

export const Removecredit = (code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        // setTimeout(()=> {
        axios.delete('/api/credit/' + code).then(res => {
            dispatch(deleteCredit());
        }).catch(err => {
            dispatch(failRequest())
        })

        //  },2000);


    }
}

export const FunctionAddCredit = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        // setTimeout(()=> {
        axios.post('/api/credit', data).then(res => {
            dispatch(addCredit());
            //tooast.success('user add successfully)
        }).catch(err => {
            dispatch(failRequest())
        })

        //  },2000);


    }
}

export const FunctionUpdateCredit = (data, code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        // setTimeout(()=> {
        axios.put('/api/credit/' + code, data).then(res => {
            dispatch(updateCredit());
            //tooast.success('user updated successfully)
        }).catch(err => {
            dispatch(failRequest())
        })

        //  },2000);


    }
}

export const FetchCrediObj = (code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        //setTimeout(()=> {
        axios.get('/api/credit/' + code).then(res => {
            const creditlist = res.data;
            dispatch(getCreditObj(creditlist));
        }).catch(err => {
            dispatch(failRequest(err.message))
        })

        // },2000);


    }
}
*/