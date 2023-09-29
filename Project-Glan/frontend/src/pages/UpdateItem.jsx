import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchItemObj, UpdateItem } from "../redux/actions/ItemActions";
import Header_bar_inv from "../components/Header_bar/Header_bar_inv";
import "../pages/Content.css"

const Updateitem = () => {
  const [_id, set_id] = useState(0);
  const [itemcode, setitemcode] = useState("");
  const [itemname, setitemname] = useState("");
  const [unitprice, setunitprice] = useState(0);
  const [quantity, setquantity] = useState(0);
  const [itemimage, setitemimage] = useState("");
  const [itemdescript, setitemdescript] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { code } = useParams();

  const itemobj = useSelector((state) => state.Item.itemobj);

  useEffect(() => {
    dispatch(FetchItemObj(code));
  }, []);

  useEffect(() => {
    if (itemobj) {
      set_id(itemobj._id);
      setitemcode(itemobj.itemcode);
      setitemname(itemobj.itemname);
      setunitprice(itemobj.unitprice);
      setquantity(itemobj.quantity);
      setitemimage(itemobj.itemimage);
      setitemdescript(itemobj.itemdescript);
    }
  }, [itemobj]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const itemobj = {
      _id,
      itemcode,
      itemname,
      unitprice,
      quantity,
      itemimage,
      itemdescript,
    };
    dispatch(UpdateItem(_id, itemobj));
    navigate("/itemlist");
  };

  return (
    <div>
        <div>  <Header_bar_inv 
                fun1="Dashboard"
                fun2="Items"
                fun3="Add Item"
                fun4="Report"/>
        </div>
        <div className="search">
        </div>
        <div class="page_sub_header">
        <t class="sub_header_topic">Update Item</t>
        </div>
      <div className="ContentForm">
        <section>
          <form onSubmit={handleSubmit}>
            <div >
              <lable class="required">Item Code : </lable>
              <input
                type="text"
                className="form-control"
                id="itemcode"
                name="itemcode"
                value={itemcode}
                placeholder="Enter item code"
                onChange={(e) => setitemcode(e.target.value)}
              />
            </div>
            <div >
              <lable class="required">Item Name : </lable>
              <input
                type="text"
                className="form-control"
                id="itemname"
                name="itemname"
                value={itemname}
                placeholder="Enter item name"
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
                value={quantity}
                placeholder="Enter quantity"
                onChange={(e) => setquantity(e.target.value)}
              />
            </div>
            <div>
              <lable class="required">item description : </lable>
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
            <Link
              to={"/itemlist"}
              style={{ textDecoration: "none" }}
              className="clear"
            >
              Back
            </Link>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Updateitem;
