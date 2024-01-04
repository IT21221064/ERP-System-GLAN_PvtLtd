import { useEffect, useState, useRef } from "react";
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
import { useReactToPrint } from "react-to-print";

function InListing(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const componentPDF = useRef();

  useEffect(() => {
    props.loadinvoice();
  }, []);
  const handledelete = (code) => {
    if (window.confirm("Do you want to remove?")) {
      props.removeInvoice(code);
      props.loadinvoice();
    }
  };
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Warehouse Item list",
    OnAFterPrint: () => alert("Data saved in PDF"),
  });

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
        <div ref={componentPDF} style={{ width: "100%" }}>
          <h4>Glan International Pvt Limited</h4>
          <h6>No.551,Mihindu Mawatha,Malabe,Sri Lanaka</h6>
          <h6>glaninternational@gmail.com</h6>
          <center>
            <h4>Invoice Report</h4>
          </center>
          <h5></h5>
          <hr />
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
                      item.crDate
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
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
                    </tr>
                  ))}
            </tbody>
          </Table>
        </div>
        <button className="btn btn-success" onClick={generatePDF}>
          PDF Download
        </button>
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
