import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CreateLocation } from "../redux/actions/LocationAction";
import Header_bar_loc from "../components/Header_bar/Header_bar_loc";
import "../pages/Content.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const AddLocation = () => {
  const [itemID, setitemID] = useState('');
  const [itemName, setitemName] = useState('');
  const [area, setarea] = useState('');
  const [Qty, setQty] = useState();
  const [Category, setCategory] = useState('');
  const [Description, setDescription] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const locationobj = { itemID, itemName, area, Qty, Category, Description };
    dispatch(CreateLocation(locationobj));
    navigate('/location');
  }

  return (
    <div>
      <div>  <Header_bar_loc
        fun1="Dashboard"
        fun2="Location"
        fun3="Add Location"
        fun4="View Wastage"
        fun5="Add Wastage"
        fun6="Report" />
      </div>  <t class="sub_header_topic">Create Location</t>
      <div className="search">
      </div>
      <div class="page_sub_header">
      <t class="sub_header_topic">Add Items</t>
      </div>
      <div className="ContentForm ">
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <div>
                <label className="required">Item Id :</label>
                <input className="form-control" value={itemID} onChange={e => setitemID(e.target.value)} />
              </div>
              <div class="form">
                <label className="required">Enter new Item Name :</label>
                <input className="form-control" value={itemName} onChange={e => setitemName(e.target.value)} />
              </div>

              <div className="form">
                <label className="required">Enter new Item Area :</label>
                <select className="form-control" value={area} onChange={e => setarea(e.target.value)} >
                  <option value="">Select...</option>
                  <option value="Zone A">Zone A</option>
                  <option value="Zone B">Zone B</option>
                  <option value="Zone C">Zone C</option>
                </select>
              </div>


              <div className="form">
                <label>Enter new item quantity :</label>
                <input className="form-control" value={Qty} onChange={e => setQty(e.target.value)} />
              </div>


              <div className="form">
                <label className="required">Select item Category :</label>
                <select className="form-control" value={Category} onChange={e => setCategory(e.target.value)}>
                  <option value="">Select...</option>
                  <option value="Raw Material">Raw Material</option>
                  <option value="Filling">Filling</option>
                  <option value="Finished">Finished</option>
                </select>
              </div>


              <div className="form">
                <label>Enter new Description :</label>
                <input className="form-control" value={Description} onChange={e => setDescription(e.target.value)} />
              </div>

            </div>
            {/* <div className="card-footer" style={{ textAlign: "left" }}>
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to={'/task'} className="btn btn-danger">Back</Link>

          </div> */}
            <div>
              <button type="submit" className="submit">Submit</button>
              <Link to={"/location"} className="clear">Back</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddLocation;
