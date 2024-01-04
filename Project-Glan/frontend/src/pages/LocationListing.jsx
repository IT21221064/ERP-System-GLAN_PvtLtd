import { connect } from "react-redux";
import { FetchLocationList, RemoveLocation } from "../redux/actions/LocationAction"
import { useEffect, useState } from "react"
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
             fun6="Report"
             />
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
            <t class="sub_header_topic">View Warehouse Items</t>
            <Link to="/location/add" className="page_link">Create</Link>
          </div>
          <div className="Content">
            <Table striped hover className="table">
              <thead className="theader">
                <tr>
                  <td>Item ID</td>
                  <td>Item Name</td>
                  <td>Item Area</td>
                  <td>Item Quantity</td>
                  <td>Item Category</td>
                  <td>Item Description</td>
                  <td>Action</td>
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
                      <td>
                        <Link to={"/location/edit/" + item._id}><FiEdit size="1.3rem" color="blue" /></Link>{" "}
                        <button onClick={() => {
                          handleDelete(item._id);
                        }} className="margin"><FiTrash2 size="1.4rem" color="red" /></button>
                      </td>

                    </tr>
                  )}
              </tbody>
            </Table>
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
