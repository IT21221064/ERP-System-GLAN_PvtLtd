import React, { useEffect, useRef, useState } from "react";

// npm install react-to-print (please install)
import { useReactToPrint } from "react-to-print";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FetchItemList } from "../redux/actions/ItemActions";
import Header_bar_inv from "../components/Header_bar/Header_bar_inv";
import "../pages/Content.css";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const ItemListing = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const conponentPDF = useRef();
  let totalexpens = 0;
  useEffect(() => {
    props.loaditem();
  }, []);

  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "itemlists",
    onAfterPrint: () => alert("Data saved in PDF"),
  });

  return props.Item.loading ? (
    <div>
      <h2>Loading data...</h2>
    </div>
  ) : props.Item.errmessage ? (
    <div>
      <h2>{props.Item.errmessage}</h2>
    </div>
  ) : (
    <React.Fragment>
      <div>
        <div>
          {" "}
          <Header_bar_inv
            fun1="Dashboard"
            fun2="Items"
            fun3="Add Item"
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
          <t class="sub_header_topic">View Items</t>
          <Link to="/AddItem" className="page_link">
            Create
          </Link>
        </div>
        <div className="Content">
          {props.Item.itemlists &&
            props.Item.itemlists.map((iitem) => (
              <script>
                {iitem.quantity && iitem.unitprice
                  ? (totalexpens =
                      totalexpens + iitem.quantity * iitem.unitprice)
                  : null}
              </script>
            ))}

          <div ref={conponentPDF} style={{ width: "100%" }}>
          <h4>Glan International Pvt Limited</h4>
            <h6>No.551,Mihindu Mawatha,Malabe,Sri Lanaka</h6>
            <h6>glaninternational@gmail.com</h6>
            <center/>
            <h5></h5>
            <hr />
            <Table striped hover className="table">
              <thead className="theader">
                <tr>
                  <th>Item Code</th>
                  <th>Item Name</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Total Value</th>
                </tr>
              </thead>
              <tbody className="tbody">
                {props.Item.itemlists &&
                  props.Item.itemlists
                    .filter(
                      (iitem) =>
                        iitem.itemcode
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        iitem.itemname
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                    )
                    .map((iitem) => (
                      <tr key={iitem._id}>
                        <td>{iitem.itemcode}</td>
                        <td>{iitem.itemname}</td>
                        <td>{iitem.unitprice}</td>
                        <td>{iitem.quantity}</td>
                        <td>{iitem.quantity * iitem.unitprice}</td>
                      </tr>
                    ))}
              </tbody>
            </Table>
            <h5>
              <span>Total Stock Value : {totalexpens.toFixed(0)}</span>
            </h5>
          </div>
          <button className="btn btn-success" onClick={generatePDF}>
            PDF/Download
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    Item: state.Item,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loaditem: () => dispatch(FetchItemList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemListing);
