import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AddItem } from "../redux/actions/ItemActions";
import Header_bar_inv from "../components/Header_bar/Header_bar_inv";
import "../pages/Content.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Additem = () => {
  const [itemcode, setitemcode] = useState("");
  const [itemname, setitemname] = useState("");
  const [unitprice, setunitprice] = useState(0);
  const [quantity, setquantity] = useState(0);
  const [itemimage, setitemimage] = useState("");
  const [itemdescript, setitemdescript] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const itemobj = {
      itemcode,
      itemname,
      unitprice,
      quantity,
      itemimage,
      itemdescript,
    };
    dispatch(AddItem(itemobj));
    navigate("/itemlist");
  };

  return (
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
      <div className="search"></div>
      <div class="page_sub_header">
        <t class="sub_header_topic">Create Item</t>
      </div>
      <div className="ContentForm ">
        <section>
          <form onSubmit={onSubmit}>
            <div>
              <lable class="required">Item Code : </lable>
              <input
                type="text"
                className="form-control"
                id="itemcode"
                name="itemcode"
                value={itemcode}
                placeholder="Enter item code"
                required
                onChange={(e) => setitemcode(e.target.value)}
              />
            </div>
            <div>
              <lable class="required">Item Name : </lable>
              <input
                type="text"
                className="form-control"
                id="itemname"
                name="itemname"
                value={itemname}
                placeholder="Enter item name"
                required
                onChange={(e) => setitemname(e.target.value)}
              />
            </div>
            <div>
              <lable class="required">Unit Price : </lable>
              <input
                type="text"
                className="form-control"
                id="unitprice"
                name="unitprice"
                required
                value={unitprice}
                placeholder="Enter unit price"
                onChange={(e) => setunitprice(e.target.value)}
              />
            </div>
            <div>
              <lable class="required">quantity : </lable>
              <input
                type="text"
                className="form-control"
                id="quantity"
                name="quantity"
                required
                value={quantity}
                placeholder="Enter quantity"
                onChange={(e) => setquantity(e.target.value)}
              />
            </div>

            <div>
              <lable class="form">item description : </lable>
              <input
                type="textarea"
                className="form-control"
                id="itemdescript"
                name="itemdescript"
                value={itemdescript}
                onChange={(e) => setitemdescript(e.target.value)}
              />
            </div>
            <button type="submit" className="submit">
              Submit
            </button>
            <Link to={"/itemlist"} className="clear">
              Back
            </Link>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Additem;
