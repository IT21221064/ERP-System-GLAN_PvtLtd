import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FetchItemList, RemoveItem } from "../redux/actions/ItemActions";
import Header_bar_inv from "../components/Header_bar/Header_bar_inv";
import "../pages/Content.css";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dashboard from "../components/Dashboard/Dashboard";

const ItemListing = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  let lowquant = 0;
  let totalquant = 0;
  let totalexpens = 0;

  useEffect(() => {
    props.loaditem();
  }, []);

  const handleDelete = (code) => {
    if (window.confirm("Remove item ?")) {
      props.removeitem(code);
      props.loaditem();
      toast.success("Item remove successfully");
    }
  };

  return props.Item.loading ? (
    <div>
      <h2>Loading data...</h2>
    </div>
  ) : props.Item.errmessage ? (
    <div>
      <h2>{props.Item.errmessage}</h2>
    </div>
  ) : (
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
      <div>
        {props.Item.itemlists &&
          props.Item.itemlists.map((iitem) => (
            <script>
              {iitem.quantity == 0 ? (lowquant = lowquant + 1) : null}
              {iitem.quantity
                ? (totalquant = totalquant + iitem.quantity)
                : null}
              {iitem.quantity && iitem.unitprice
                ? (totalexpens = totalexpens + iitem.quantity * iitem.unitprice)
                : null}
            </script>
          ))}
          <Dashboard
           topic ="Inventory Dashboard"
            word1= "Out of Stock Count"
            num1={<span>{lowquant.toFixed(0)}</span>}
            word2="Total Quantity Count"
            num2={<span> {totalquant.toFixed(0)}</span>}
            word3="Total Stock Value"
            num3= {<span>{totalexpens.toFixed(0)}</span>}

            cha1={<iframe
            style={
              ({ background: "#FFFFFF" },
              { borderradius: "2px" },
              { boxshadow: "0 2px 10px 0 rgba(70, 76, 79, .2)" })
            }
            width="380"
            height="250"
            src="https://charts.mongodb.com/charts-glaninternational-rccip/embed/charts?id=645d0bb9-7aa3-4f3d-8c3c-36fc05a12030&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe>}

          cha2={
            <iframe
          style={
            ({ background: "#FFFFFF" },
            { borderradius: "2px" },
            { boxshadow: "0 2px 10px 0 rgba(70, 76, 79, .2)" })
          }
          width="380"
          height="250"
          src="https://charts.mongodb.com/charts-glaninternational-rccip/embed/charts?id=645ba979-9cc7-41f7-86ab-3ce8be56e10a&maxDataAge=3600&theme=light&autoRefresh=true"
        ></iframe>
          }

       view={
        <div className="itemTable">
        <Table striped hover className="table">
          <thead className="theader">
            <tr>
              <th>Item Code</th> 
              <th>Item Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
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
                  </tr>
                ))}
          </tbody>
        </Table>
        </div>}/>
      </div>
    </div>
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
    removeitem: (code) => dispatch(RemoveItem(code)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemListing);
