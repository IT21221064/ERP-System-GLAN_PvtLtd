import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTask from "./pages/AddTask";
import UpdateTask from "./pages/UpdateTask";
import TaskListing from "./pages/TaskListing";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import Store from "./redux/Store";

import Loging from "./pages/login";
import ItemDashboard from "./pages/ItemDashboard";
import ItemList from "./pages/ItemList";
import AddItem from "./pages/AddItem";
import UpdateItem from "./pages/UpdateItem";
import ItemReport from "./pages/ItemReport";

import UpdateEmp from "./pages/UpdateEmployee";
import EmployeeTable from "./pages/employeeTable";
import AddEmployee from "./pages/AddEmployee";

import AddVehicle from "./pages/AddVehicle";
import UpdateVehicle from "./pages/UpdateVehicle";
import VehicleList from "./pages/VehicleList";
import VehicleDashboard from "./pages/VehicleDashboard";

import AddInv from "./pages/AddInv";
import UpdateInv from "./pages/UpdateInv";
import InListing from "./pages/InListing";

import Dashboard from "./pages/Dashboard";
import Locationlisting from "./pages/LocationListing";
import Addlocation from "./pages/AddLocation";
import Updatelocation from "./pages/UpdateLocation";
import LocationReport from "./pages/LocationReport";

import CustomerListing from "./pages/CustomerListing";
import AddCustomer from "./pages/AddCustomer";
import UpdateCustomer from "./pages/UpdateCustomer";

import VehicleReport from "./pages/VehicleReport";
import EmployeeReport from "./pages/EmployeeReport";
import CustomerReport from "./pages/CustomerReport";
import TaskReport from "./pages/TaskReport";
import TaskDashboard from "./pages/TaskDashboard";
import LocationDashboard from "./pages/LocationDashboard";

import AddFeedback from "./pages/AddFeedback";
import FeedbackListing from "./pages/FeedbackListing";
import UpdateFeedback from "./pages/UpdateFeedback";
import InDashboard from "./pages/InDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import InvoiceReport from "./pages/InvoiceReport";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Loging />} />
            <Route path="/task" element={<TaskListing />} />
            <Route path="/task/add" element={<AddTask />} />
            <Route path="/task/edit/:code" element={<UpdateTask />} />
            <Route path="/Items" element={<ItemList />} />
            <Route path="/AddItem" element={<AddItem />} />
            <Route path="/UpdateItem/:code" element={<UpdateItem />} />
            <Route path="/vehicle/add" element={<AddVehicle />} />
            <Route path="/vehicle/edit/:code" element={<UpdateVehicle />} />
            <Route path="/vehicle" element={<VehicleList />} />
            <Route path="/location" element={<Locationlisting />} />
            <Route path="/location/add" element={<Addlocation />} />
            <Route path="/location/edit/:code" element={<Updatelocation />} />
            <Route path="/location/Report" element={<LocationReport />} />
            <Route path="/emp" element={<EmployeeTable />} />
            <Route path="/emp/edit/:code" element={<UpdateEmp />} />
            <Route path="/emp/add" element={<AddEmployee />} />
            <Route path="/invoice" element={<InListing />} />
            <Route path="/invoice/add" element={<AddInv />}></Route>
            <Route path="/invoice/edit/:code" element={<UpdateInv />}></Route>
            <Route path="/customer/add" element={<AddCustomer />} />
            <Route path="/viewCustomer" element={<CustomerListing />} />
            <Route path="/customer/edit/:code" element={<UpdateCustomer />} />
            <Route path="/itemreport" element={<ItemReport />} />
            <Route path="/vehicle/report" element={<VehicleReport />} />
            <Route path="/itemDashboard" element={<ItemDashboard />} />
            <Route path="/emp/report" element={<EmployeeReport />} />
            <Route path="/customer/report" element={<CustomerReport />} />
            <Route path="/vehicleDashboard" element={<VehicleDashboard />} />
            <Route path="/task/report" element={<TaskReport />} />
            <Route path="/taskDashboard" element={<TaskDashboard />} />\
            <Route path="/locationDashboard" element={<LocationDashboard />} />
            <Route path="/itemlist" element={<ItemList />} />
            <Route path="/feedback/add" element={<AddFeedback />} />
            <Route path="/viewFeedback" element={<FeedbackListing />} />
            <Route path="/feedback/edit/:code" element={<UpdateFeedback />} />
            <Route path="/inDashboard" element={<InDashboard />} />
            <Route path="/customer/Dashboard" element={<CustomerDashboard />} />
            <Route path="/employeeDashboard" element={<EmployeeDashboard />} />
            <Route path="/invoiceReport" element={<InvoiceReport />} />
          </Routes>
        </Router>
        <ToastContainer />
      </div>
    </Provider>
  );
}

export default App;
