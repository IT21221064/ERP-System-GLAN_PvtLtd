import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FetchVehicleList,
  RemoveVehicle,
} from "../redux/actions/VehicleAction";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Header_bar_vehi from "../components/Header_bar/Header_bar_vehi";
import "../pages/Content.css";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dashboard from "../components/Dashboard/Dashboard";

const VehicleList = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  let Avehiclecount = 0;
  let Rvehiclecount = 0;
  let Vehiclecount = 0;

  useEffect(() => {
    props.loadvehicle();
  }, []);

  const handleDelete = (code) => {
    if (window.confirm(`Remove task ${code} ?`)) {
      props.removevehicle(code);
      props.loadvehicle();
      toast.success("Vehicle removed successfully");
    }
  };

  return props.vehicle.loading ? (
    <div>
      <h2>Loading data...</h2>
    </div>
  ) : props.vehicle.errmessage ? (
    <div>
      <h2>{props.vehicle.errmessage}</h2>
    </div>
  ) : (
    <div>
      <div>
        {" "}
        <Header_bar_vehi
          fun1="Dashboard"
          fun2="Vehicles"
          fun3="Add Vehicle"
          fun4="Orders"
          fun5="Warehouse"
          fun6="Report"
        />
      </div>
      <div>
        {props.vehicle.vehiclelist &&
          props.vehicle.vehiclelist.map((item) => (
            <script>
              {item.vStatus === "Available"
                ? (Avehiclecount = Avehiclecount + 1)
                : null}
              \
              {item.vStatus === "Repair"
                ? (Rvehiclecount = Rvehiclecount + 1)
                : null}
              {item ? (Vehiclecount = Vehiclecount + 1) : null}
            </script>
          ))}

        <Dashboard
          topic="Transport Dashboard"
          word1="Available Vehicle Count"
          num1={<span>{Avehiclecount.toFixed(0)}</span>}
          word2="Repair Vehicle Count"
          num2={<span> {Rvehiclecount.toFixed(0)}</span>}
          word3="Total Vehicle Count"
          num3={<span>{Vehiclecount.toFixed(0)}</span>}
          cha1={
            <iframe
              style={
                ({ background: "#FFFFFF" },
                { borderradius: "2px" },
                { boxshadow: "0 2px 10px 0 rgba(70, 76, 79, .2)" })
              }
              width="380"
              height="250"
              src="https://charts.mongodb.com/charts-glaninternational-rccip/embed/charts?id=645bc348-d3ec-4b31-8b0b-6b93edec8cd0&maxDataAge=3600&theme=light&autoRefresh=true"
            ></iframe>
          }
          cha2={
            <iframe
              style={
                ({ background: "#FFFFFF" },
                { borderradius: "2px" },
                { boxshadow: "0 2px 10px 0 rgba(70, 76, 79, .2)" })
              }
              width="380"
              height="250"
              src="https://charts.mongodb.com/charts-glaninternational-rccip/embed/charts?id=645ccd94-4ef3-40d5-8975-70a469e20595&maxDataAge=3600&theme=light&autoRefresh=true"
            ></iframe>
          }
          view={
            <div className="itemTable">
              <Table striped hover className="table">
                <thead className="theader">
                  <tr>
                    <td>Vehicle Type</td>
                    <td>Vehicle NumPlate </td>
                    <td>Vehicle Insurance</td>
                    <td>Vehicle Capacity</td>
                    <td>Vehicle Status</td>
                  </tr>
                </thead>
                <tbody className="tbody">
                  {props.vehicle.vehiclelist &&
                    props.vehicle.vehiclelist
                      .filter(
                        (item) =>
                          item.insurance
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                          item.vType
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                          item.vStatus
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                      )
                      .map((item) => (
                        <tr key={item._id}>
                          <td>{item.vType}</td>
                          <td>{item.numPlate}</td>
                          <td>{item.insurance}</td>
                          <td>{item.capacity}</td>
                          <td>{item.vStatus}</td>
                        </tr>
                      ))}
                </tbody>
              </Table>
            </div>
          }
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    vehicle: state.vehicle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadvehicle: () => dispatch(FetchVehicleList()),
    removevehicle: (code) => dispatch(RemoveVehicle(code)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VehicleList);
