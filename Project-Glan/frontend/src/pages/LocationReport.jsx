import { useReactToPrint } from "react-to-print"
import { connect } from "react-redux";
import { FetchLocationList, RemoveLocation } from "../redux/actions/LocationAction"
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import Header_bar_loc from "../components/Header_bar/Header_bar_loc";
import "../pages/Content.css"
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const LocationListing = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const componentPDF = useRef();

  useEffect(() => {
    props.loadlocation();
  }, [])

  const handleDelete = (code) => {
    if (window.confirm("Remove item ?")) {
      props.removelocation(code);
      props.loadlocation();
      toast.success("item removed successfully");
    }
  }
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Warehouse Item list",
    OnAFterPrint: () => alert("Data saved in PDF"),
  })

  return (

    props.location.loading ? <div><h2>Loading data...</h2></div> :
      props.location.errmessage ? <div><h2>{props.location.errmessage}</h2></div> :

        <div>
          <div>  <Header_bar_loc
             fun1="Dashboard"
             fun2="Location"
             fun3="Add Location"
             fun4="View Wastage"
             fun5="Add Wastage"
             fun6="Report"/>
          </div>
          <div className="search">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><BiSearchAlt /></InputGroup.Text>
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
            <t class="sub_header_topic">View Locations</t>
            <Link to="/location/add" className="page_link">Create</Link>
          </div>


          <div className="Content">

              <div ref={componentPDF} style={{ width: "100%" }}>
              <h4>Glan International Pvt Limited</h4>
              <h6>No.551,Mihindu Mawatha,Malabe,Sri Lanaka</h6>
              <h6>glaninternational@gmail.com</h6>
              <center><h4>Warehouse Location Report</h4></center>
              <hr />
              <Table striped hover className="table">
                <thead className="theader">
                  <tr>
                    <td>Item ID</td>
                    <td>Item Name</td>
                    <td>Item Area</td>
                    <td>Item Quantity</td>
                    <td>Item Category</td>
                    <td>Item Description</td>

                  </tr>
                </thead>
                <tbody className="tbody">
                  {props.location.locationlists && props.location.locationlists
                    .filter((item) =>
                      item.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      item.Category.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map(item =>
                      <tr key={item._id}>
                        <td>{item.itemID}</td>
                        <td>{item.itemName}</td>
                        <td>{item.area}</td>
                        <td>{item.Qty}</td>
                        <td>{item.Category}</td>
                        <td>{item.Description}</td>

                      </tr>
                    )}
                </tbody>
              </Table>
            </div>
            <button className="btn btn-success" onClick={generatePDF}>PDF Download</button>
          </div>





        </div>
  );
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadlocation: () => dispatch(FetchLocationList()),
    removelocation: (code) => dispatch(RemoveLocation(code))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LocationListing);
