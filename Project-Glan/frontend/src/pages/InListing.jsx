import { useEffect, useState } from "react";
import {
  FetchInvoiceList,
  Removeinvoice,
} from "../redux/actions/InvoiceAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header_bar_sales from "../components/Header_bar/Header_bar_sales";
import "../pages/Content.css";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function InListing(props) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    props.loadinvoice();
  }, []);
  const handledelete = (code) => {
    if (window.confirm("Do you want to remove?")) {
      props.removeInvoice(code);
      props.loadinvoice();
    }
  };
  return props.invoice.loading ? (
    <div>
      <h2>Loading....</h2>
    </div>
  ) : props.invoice.errmessage ? (
    <div>
      <h2>{props.invoice.errmessage}</h2>
    </div>
  ) : (
    <div>
      <div>
        <Header_bar_sales
          fun1="Dashboard"
          fun2="Invoices"
          fun3="Add Invoice"
          fun4="Report"
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
        <t class="sub_header_topic">View Invoices</t>
        <Link to="/invoice/add" className="page_link">
          Create
        </Link>
      </div>
      <div className="Content">
        <Table striped hover className="table">
          <thead className="theaderInvoice">
            <tr>
              <th>Invoice Code</th>
              <th>Invoice Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Item Discount</th>
              <th>Total</th>
              <th>Sub Total</th>
              <th>Invoice Discount</th>
              <th>Net Total</th>
              <th>Create Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="tbodyInvoice">
            {props.invoice.invoicelist &&
              props.invoice.invoicelist
                .filter(
                  (item) =>
                    item.iName
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    item.inCode
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    item.crDate.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((item) => (
                  <tr key={item._id}>
                    <td>{item.inCode}</td>
                    <td>{item.iName}</td>
                    <td>{item.Qty}</td>
                    <td>{item.unitP}</td>
                    <td>{item.itDis}</td>
                    <td>{item.Tot}</td>
                    <td>{item.subTot}</td>
                    <td>{item.inDis}</td>
                    <td>{item.netTot}</td>
                    <td>{item.crDate}</td>
                    <td>
                      <Link to={"/invoice/edit/" + item._id}>
                        <FiEdit size="1.3rem" color="blue" />
                      </Link>{" "}
                      <button
                        onClick={() => {
                          handledelete(item._id);
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
    invoice: state.invoice,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadinvoice: () => dispatch(FetchInvoiceList()),
    removeInvoice: (code) => dispatch(Removeinvoice(code)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InListing);
