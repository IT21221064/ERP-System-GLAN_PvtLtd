import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CreateCustomer } from "../redux/actions/Customer";
import Header_bar from "../components/Header_bar/Header_bar";
import "../pages/Content.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function AddCustomer() {

    const [cusId, setcusId] = useState("");
    const [cusName, setcusName] = useState("");
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");
    const [dob, setdob] = useState("");
    const [conInfo, setconInfo] = useState("");
    const [user, setuser] = useState("");
    const [password, setpassword] = useState("");
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const customerobj = { cusId, cusName, email,address, dob, conInfo,user,password };
      dispatch(CreateCustomer(customerobj));
      navigate("/viewCustomer");
    };
  
    return (
      <div>
         <div>  <Header_bar 
          fun1="Dashboard"
          fun2="Customer"
          fun3="Customer Privilege"
          fun4="Customer Feedback"
          fun5="Notifications"
          fun6="Report"/>
        </div>
        <div className="search">
        </div>
        <div class="page_sub_header">
        <t class="sub_header_topic">Create Customer</t>
        </div>
        <div className="ContentForm ">
        <form onSubmit={handleSubmit}>
          <div>
            <div>
                  <div>
                    <label class="required">Customer Id :</label>
                    <input
                      className="form-control"
                      value={cusId}
                      required
                      pattern="C\d{4}"
                      title="It should be stat with 'C' letter and must added 4 numbers"
                      onChange={(e) => setcusId(e.target.value)}
                    />
                  </div>
                  <div >
                    <label class="required">Customer Name :</label>
                    <input
                      className="form-control"
                      value={cusName}
                      placeholder="Name with Initials"
                      required
                      onChange={(e) => setcusName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label  class="required">Customer Email :</label>
                    <input
                      className="form-control"
                      value={email}
                      placeholder="email@gmail.com"
                      pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|org|net|edu|gov|mil|info|biz|co.uk|us)$"
                      title="It should be a valid email address!"
                      required
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label  class="form">Customer Address :</label>
                    <input
                      className="form-control"
                      value={address}
                      placeholder="Address"
                      onChange={(e) => setaddress(e.target.value)}
                    />
                  </div>
                  <div>
                    <label  class="form">Date of birth :</label>
                    <input
                      type="date"
                      className="form-control"
                      value={dob}
                      onChange={(e) => setdob(e.target.value)}
                    />
                  </div>
                  <div>
                    <label  class="required">Mobile Number :</label>
                    <input
                      className="form-control"
                      value={conInfo}
                      placeholder="Mobile No"
                      pattern="[0-9]{10}"
                      title="Mobile No should be 10 numbers"
                      required
                      onChange={(e) => setconInfo(e.target.value)}
                    />
                  </div>
                  <div>
                    <label  class="required">User Name :</label>
                    <input
                      className="form-control"
                      value={user}
                      placeholder="User Name"
                      pattern="^[A-Za-z0-9]{3,16}$"
                      title="Username should be 3-16 characters and shouldn't include any special character!"
                      required
                      onChange={(e) => setuser(e.target.value)}
                    />
                  </div>
                  <div>
                    <label  class="required">User Password :</label>
                    <input
                      className="form-control"
                      value={password}
                      placeholder="Password"
                      pattern= "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
                      title="Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!"
                      required
                      onChange={(e) => setpassword(e.target.value)}
                    />
                  </div>
            </div>
            <div>
              <button type="submit" className="submit">Submit</button>
              <Link to={"/viewCustomer"} className="clear">Back</Link>
            </div>
          </div>
        </form>
        </div>
      </div>
    );
}

export default AddCustomer