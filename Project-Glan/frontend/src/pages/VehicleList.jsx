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

const VehicleList = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

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
      <div className="search">
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <BiSearchAlt />
          </InputGroup.Text>
          <Form.Control
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
      </div>
      <div class="page_sub_header">
        <t class="sub_header_topic">View Vehicle User</t>
        <Link to="/vehicle/add" className="page_link">
          Create
        </Link>
      </div>
      <div className="Content">
        <Table striped hover className="table">
          <thead className="theader">
            <tr>
              <td>Vehicle Type</td>
              <td>Vehicle NumPlate </td>
              <td>Vehicle Insurance</td>
              <td>Vehicle Capacity</td>
              <td>Vehicle Status</td>
              <td>Action</td>
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
                    <td>
                      <Link to={"/vehicle/edit/" + item._id}>
                        <FiEdit size="1.3rem" color="blue" />
                      </Link>{" "}
                      <button
                        onClick={() => {
                          handleDelete(item._id);
                        }}
                        className="margin"
                      >
                        <FiTrash2 size="1.4rem" color="red" />
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </Table>
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
