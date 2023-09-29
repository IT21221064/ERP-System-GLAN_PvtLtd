import { ADD_INVOICE, DELETE_INVOICE, FAIL_REQUEST,GET_INVOICE_LIST, GET_INVOICE_OBJ, MAKE_REQUEST, UPDATE_INVOICE} from "../constants/InvoiceConstans"

const initialstate={
    loading:true,
    invoicelist:[],
    invoiceobj:{},
    errmessage:''
    


}

export const InvoiceReducer =(state=initialstate,action)=>{
    switch(action.type){
        case MAKE_REQUEST:
            return{
                ...state,
                loading: true
            }

  

            case FAIL_REQUEST:
                return{
                    ...state,
                    loading:false,
                    errmessage:action.payload
                }
           case GET_INVOICE_LIST:
                return{
                    
                    loading:false,
                    errmessage:'',
                    invoicelist: action.payload,
                    invoiceobj:{}
                }
            case DELETE_INVOICE:return{
                ...state,
                loading:false
            }

            case ADD_INVOICE:return{
                ...state,
                loading:false
            }

            case UPDATE_INVOICE:return{
                ...state,
                loading:false
            }

            case GET_INVOICE_OBJ:return{
                ...state,
                loading:false,
                invoiceobj: action.payload

            }

/*
            case GET_CREDIT_LIST:
                return{
                    
                    loading:false,
                    errmessage:'',
                    creditlist: action.payload,
                    creditobj:{}
                }
            
                case DELETE_CREDIT:return{
                    ...state,
                    loading:false
               
                }

                case ADD_CREDIT:return{
                    ...state,
                    loading:false
                }
                case UPDATE_CREDIT:return{
                    ...state,
                    loading:false
                }
                case GET_CREDIT_OBJ:return{
                    ...state,
                    loading:false,
                    creditobj: action.payload,
                    
                }

*/
        default: return state
    }
}
export default  InvoiceReducer;

