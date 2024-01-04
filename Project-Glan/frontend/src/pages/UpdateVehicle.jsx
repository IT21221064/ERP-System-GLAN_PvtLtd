import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FetchVehicleObj, VehicleUpdate } from "../redux/actions/VehicleAction";
import Header_bar_vehi from "../components/Header_bar/Header_bar_vehi";
import "../pages/Content.css"



const UpdateVehicle = () => {
    const [_id, set_id] = useState(0);
    const [vType, setVtype] = useState("");
    const [numPlate, setNumplate] = useState("");
    const [insurance, setInsurance] = useState("");
    const [capacity, setCapacity] = useState("");
    const [vStatus, setVstatus] = useState("");


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { code } = useParams();
    const vehicleobj = useSelector((state) => state.vehicle.vehicleobj);
    useEffect(() => {
        dispatch(FetchVehicleObj(code));
    }, []);

    useEffect(() => {

        if (vehicleobj) {

            set_id(vehicleobj._id);

            setVtype(vehicleobj.vType);

            setNumplate(vehicleobj.numPlate);

            setInsurance(vehicleobj.insurance);

            setCapacity(vehicleobj.capacity);

            setVstatus(vehicleobj.vStatus);



        }

    }, [vehicleobj]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const vehicleobj = { _id, vType, numPlate, insurance, capacity, vStatus };
        dispatch(VehicleUpdate(_id, vehicleobj));
        navigate("/vehicle");
    };

    return (
        <div>
            <div>  <Header_bar_vehi
               fun1="Dashboard"
               fun2="Vehicles"
               fun3="Add Vehicle"
               fun4="Orders"
               fun5="Warehouse"
               fun6="Report" />
            </div>
            <div className="search">
            </div>
            <div class="page_sub_header">
                <t class="sub_header_topic">Update Vehicle User</t>
            </div>
            <div className="ContentForm ">
                <form onSubmit={handleSubmit}>
                    <div className="card-body" style={{ textAlign: "left" }}>
                        <div>

                            <div>

                                <div>

                                    <label class="form">Obj Id :</label>

                                    <input

                                        className="form-control"

                                        value={_id || ""}

                                        disabled="disabled"

                                    />

                                </div>



                            </div>
                            <div>
                                <div>
                                    <div>
                                        <label class="required">Vehicle Type:</label>
                                        <select
                                            className="form-control"
                                            value={vType}
                                            onChange={(e) => setVtype(e.target.value)}>
                                            <option value="">Select...</option>
                                            <option value="VAN">VAN</option>
                                            <option value="CAR">CAR</option>
                                            <option value="Lorry">Lorry</option>
                                            <option value="BIC">BIC</option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <label class="required">Vehicle NumPlate :</label>
                                        <input
                                            className="form-control"
                                            value={numPlate || ""}
                                            onChange={(e) => setNumplate(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div >
                                        <label class="form">Vehicle Insurance :</label>
                                        <input
                                            className="form-control"
                                            value={insurance || ""}
                                            onChange={(e) => setInsurance(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <label class="form">Vehicle Capacity:</label>
                                        <input
                                            className="form-control"
                                            value={capacity || ""}
                                            onChange={(e) => setCapacity(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <label class="required">Vehicle Status :</label>
                                        <select
                                            className="form-control"
                                            value={vStatus}
                                            onChange={(e) => setVstatus(e.target.value)}>
                                            <option value="">Select...</option>
                                            <option value="Available">Available</option>
                                            <option value="Repair">Repair</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div>
                            <button type="submit" className="submit">Update</button>
                            <Link to={"/vehicle"} className="clear">Back</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default UpdateVehicle