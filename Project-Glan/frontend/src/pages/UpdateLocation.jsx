import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchLocationObj, LocationUpdate } from "../redux/actions/LocationAction";
import Header_bar_loc from "../components/Header_bar/Header_bar_loc";
import "../pages/Content.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const UpdateLocation = () => {
    const [_id, set_id] = useState(0);
    const [itemID, setitemID] = useState(0);
    const [itemName, setitemName] = useState('');
    const [area, setarea] = useState('');
    const [Qty, setQty] = useState('');
    const [Category, setCategory] = useState('');
    const [Description, setDescription] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { code } = useParams();

    const locationobj = useSelector((state) => state.location.locationobj);

    useEffect(() => {
        dispatch(FetchLocationObj(code))
    }, []);

    useEffect(() => {
        if (locationobj) {
            set_id(locationobj._id)
            setitemID(locationobj.itemID);
            setitemName(locationobj.itemName);
            setarea(locationobj.area);
            setQty(locationobj.Qty);
            setCategory(locationobj.Category);
            setDescription(locationobj.Description);
        }
    }, [locationobj]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const locationobj = { _id, itemID, itemName, area, Qty, Category, Description };
        dispatch(LocationUpdate(_id, locationobj));
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
            </div>
            <div className="search">
            </div>
            <div class="page_sub_header">
                <t class="sub_header_topic">Update Warehouse Items</t>
            </div>
            <div className="ContentForm ">
                <form onSubmit={handleSubmit}>
                    <div className="card-body" style={{ textAlign: "left" }}>
                        <div>
                            <div>
                                <div>
                                    <label class="form">object Id :</label>
                                    <input className="form-control" value={_id || ''} disabled="disabled" />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <label class="required">Location Id :</label>
                                        <input className="form-control" value={itemID || ''} disabled="disabled" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <label class="required">Output Item Name :</label>
                                        <input className="form-control" value={itemName || ''} onChange={e => setitemName(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <label class="required">Output Item Area :</label>
                                        <select className="form-control" value={area} onChange={e => setarea(e.target.value)} >
                                            <option value="">Select...</option>
                                            <option value="Zone A">Zone A</option>
                                            <option value="Zone B">Zone B</option>
                                            <option value="Zone C">Zone C</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <label class="form">Output item quantity :</label>
                                        <input className="form-control" value={Qty || ''} onChange={e => setQty(e.target.value)} />
                                    </div>
                                </div>
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
                            <div>
                                <div>
                                    <div>
                                        <label class="form">item Description :</label>
                                        <input className="form-control" value={Description || ''} onChange={e => setDescription(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="submit">Update</button>
                            <Link to={"/location"} className="clear">Back</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateLocation;