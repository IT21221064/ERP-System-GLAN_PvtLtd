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
import DashboardSE from "../components/Dashboard/DashboardSE";

function InListing(props) {
  let Invoicecount = 0;
  let subTot = 0;

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

      <div>
        {props.invoice.invoicelist &&
          props.invoice.invoicelist.map((item) => (
            <script>
              {item.inCode ? (Invoicecount = Invoicecount + 1) : null}
              {item.subTot ? (subTot = subTot + item.subTot) : null}
            </script>
          ))}
        <DashboardSE
          topic="Sales Dashboard"
          word1="Invoice Count"
          num1={<span>{Invoicecount.toFixed(0)}</span>}
          word2="subTotl Count"
          num2={<span> {subTot.toFixed(0)}</span>}
          word3="Invoice Count"
          num3={<span>{Invoicecount.toFixed(0)}</span>}
          cha1={
            <iframe
              style={
                ({ background: "#FFFFFF" },
                { borderradius: "2px" },
                { boxshadow: "0 2px 10px 0 rgba(70, 76, 79, .2)" })
              }
              width="380"
              height="250"
              src="https://charts.mongodb.com/charts-glaninternational-rccip/embed/charts?id=645c9f50-4a3f-4c66-8949-c06bf1e883e7&maxDataAge=3600&theme=light&autoRefresh=true"
            ></iframe>
          }
          view={
            <div className="itemTable">
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
          }
        />
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
