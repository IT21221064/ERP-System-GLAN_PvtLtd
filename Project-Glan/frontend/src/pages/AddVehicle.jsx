import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CreateVehicle } from "../redux/actions/VehicleAction";
import Header_bar_vehi from "../components/Header_bar/Header_bar_vehi";
import "../pages/Content.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const AddVehicle = () => {

  const [vType, setVtype] = useState("");
  const [numPlate, setNumplate] = useState("");
  const [insurance, setInsurance] = useState("");
  const [capacity, setCapacity] = useState("");
  const [vStatus, setVstatus] = useState("");


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const vehicleobj = { vType, numPlate, insurance, capacity, vStatus };
    dispatch(CreateVehicle(vehicleobj));
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
        <t class="sub_header_topic">Create Vehicle User</t>
      </div>
      <div className="ContentForm ">
        <form onSubmit={handleSubmit}>
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
              <div>
                <div>
                  <div>
                    <label class="required">Vehicle NumPlate :</label>
                    <input
                      className="form-control"
                      value={numPlate}
                      onChange={(e) => setNumplate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <label class="form">Vehicle Insurance :</label>
                    <input
                      className="form-control"
                      value={insurance}
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
                      value={capacity}
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
              <button type="submit" className="submit">Submit</button>
              <Link to={"/vehicle"} className="clear">Back</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );

}

export default AddVehicle