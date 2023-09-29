import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CreateEmp } from "../redux/actions/employeeAction";
import Header_bar_emp from "../components/Header_bar/Header_bar_emp";
import "../pages/Content.css"

const AddEmployee = () => {
    const [empId, setempId] = useState('');
    const [Name, setName] = useState('');
    const [nic, setNic] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const [contactInfo, setContactInfo] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const empobj = { empId, Name, nic, dob, address, contactInfo };
        dispatch(CreateEmp(empobj));
        navigate('/emp');
    }

    return (
        <div>
              <div>  <Header_bar_emp 
                        fun1="Dashboard"
                        fun2="Employee"
                        fun3="Add Employee"
                        fun4="Report"/>
        </div>
        <div className="search">
        </div>
        <div class="page_sub_header">
        <t class="sub_header_topic">Create Employee</t>
        </div>
        <div className="ContentForm ">
            <form onSubmit={handleSubmit}>
                        <div>
                            <div>
                                <div>
                                    <label  class="required">Employee Id :</label>
                                    <input className="form-control" value={empId} onChange={e => setempId(e.target.value)} />
                                </div>
                        <div>
                            <div>
                                <div>
                                    <label class="required">Employee Name :</label>
                                    <input className="form-control" value={Name} onChange={e => setName(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <label class="required">NIC :</label>
                                    <input className="form-control" value={nic} onChange={e => setNic(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <label class="form">Date of Birth :</label>
                                    <input className="form-control" value={dob} onChange={e => setDob(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <label class="form">Employee Address :</label>
                                    <input className="form-control" value={address} onChange={e => setAddress(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <label  class="required">Employee Mobile Number :</label>
                                    <input className="form-control" value={contactInfo} onChange={e => setContactInfo(e.target.value)} />
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <div className="card-footer" style={{ textAlign: "left" }}>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link to={'/'} className="btn btn-danger">Back</Link>

                    </div> */}
                    <div>
                        <button type="submit" className="submit">Submit</button>
                        <Link to={"/emp"} className="clear">Back</Link>
                    </div>
                </div>
            </form>
            </div>
        </div>
    );
}

export default AddEmployee