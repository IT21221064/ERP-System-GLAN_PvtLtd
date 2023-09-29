import { useEffect, useState } from "react";
import { FetchCustomerList, RemoveCustomer } from "../redux/actions/Customer";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import Header_bar from "../components/Header_bar/Header_bar";
import "../pages/Content.css";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function CustomerListing(props) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    props.loadcustomer();
  }, []);

  const handleDelete = (code) => {
    if (window.confirm(`Remove customer ${code} ?`)) {
      props.removecustomer(code);
      props.loadcustomer();
      toast.success("Customer removed successfully");
    }
  };

  return props.customer.loading ? (
    <div>
      <h2>Loading data...</h2>
    </div>
  ) : props.customer.errmessage ? (
    <div>
      <h2>{props.customer.errmessage}</h2>
    </div>
  ) : (
    <div>
      <div>
        {" "}
        <Header_bar
          fun1="Dashboard"
          fun2="Customer"
          fun3="Customer Privilege"
          fun4="Customer Feedback"
          fun5="Notifications"
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
        <t class="sub_header_topic">View Customers</t>
        <Link to="/customer/add" className="page_link">
          Create
        </Link>
      </div>
      <div className="Content">
        <Table striped hover className="table">
          <thead className="theader">
            <tr>
              <th>Customer ID</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Date of Birthday</th>
              <th>Contact Number</th>
              <th>User Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {props.customer.customerlist &&
              props.customer.customerlist
                .filter(
                  (item) =>
                    item.cusName
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    item.cusId
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    item.address
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    item.dob.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((item) => (
                  <tr key={item._id}>
                    <td>{item.cusId}</td>
                    <td>{item.cusName}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>{item.dob}</td>
                    <td>{item.conInfo}</td>
                    <td>{item.user}</td>
                    <td>
                      <Link to={"/customer/edit/" + item._id}>
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
}

const mapStateToProps = (state) => {
  return {
    customer: state.customer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadcustomer: () => dispatch(FetchCustomerList()),
    removecustomer: (code) => dispatch(RemoveCustomer(code)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerListing);
