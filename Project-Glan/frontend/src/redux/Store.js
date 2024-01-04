import { configureStore, combineReducers } from "@reduxjs/toolkit";
import TaskReducer from "./reducers/taskReducers";
import ItemReducer from "./reducers/itemReducers";
import CustomerReducer from "./reducers/customerReducers";
import thunk from "redux-thunk";
import logger from "redux-logger";
import VehicleReducer from "./reducers/VehicleReducers";
import FeedbackReducer from "./reducers/feedbackReducers";
import LocationReducer from "./reducers/locationReducers";
import EmployeeReducer from "./reducers/employeeReducer";
import InvoiceReducer from "./reducers/invoiceReducers";
const rootreducer = combineReducers({
    task: TaskReducer,
    Item: ItemReducer,
    location: LocationReducer,
    emp: EmployeeReducer,
    invoice: InvoiceReducer,
    vehicle: VehicleReducer,
    customer: CustomerReducer,
    feedback: FeedbackReducer
});
const Store = configureStore({
    reducer: rootreducer,
    middleware: [thunk, logger],
});

export default Store;