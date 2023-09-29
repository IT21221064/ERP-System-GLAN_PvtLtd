import { useReactToPrint } from "react-to-print"
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FetchVehicleList, RemoveVehicle } from "../redux/actions/VehicleAction";
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
  const conponentPDF = useRef();
  useEffect(() => {
    props.loadvehicle();
  }, []);


  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "itemlists",
    onAfterPrint: () => alert("Data saved in PDF"),
  });

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
        <t class="sub_header_topic"><h3>View Vehicle User</h3></t>
        <Link to="/vehicle/add" className="page_link">
          Create
        </Link>
      </div>



      <div className="Content">
            
            
                
                
      <div ref={conponentPDF} style={{ width: "100%" }}>
          <h4>Glan International Pvt Limited</h4>
          <h6>No.551,Mihindu Mawatha,Malabe,Sri Lanaka</h6>
          <h6>glaninternational@gmail.com</h6>
          <center><h4>Vehicle List Report</h4></center>
          <hr />
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
                    <tr>

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
        <button className="btn btn-success" onClick={generatePDF}>
          PDF DOWNLOADS
        </button>
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


}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleList)