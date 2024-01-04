import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchEmpObj, empupdate } from "../redux/actions/employeeAction";
import Header_bar_emp from "../components/Header_bar/Header_bar_emp";
import "../pages/Content.css"

const UpdateEmp = () => {
  const [_id, setID] = useState(0);
  const [empId, setempId] = useState('');
  const [Name, setName] = useState('');
  const [nic, setNic] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {code}=useParams();

  const empobj = useSelector((state)=>state.emp.empobj);

  useEffect(() => {
    dispatch(FetchEmpObj(code));
  }, []);

  useEffect(()=>{
    if(empobj){
      setID(empobj._id);
      setempId(empobj.empId);
      setName(empobj.Name);
      setNic(empobj.nic);
      setDob(empobj.dob);
      setAddress(empobj.address);
      setContactInfo(empobj.contactInfo);
    }
  }, [empobj])

  const handleSubmit = (e) => {
    e.preventDefault();
    const empobj = { _id, empId, Name, nic, dob, address, contactInfo };
    dispatch(empupdate(_id, empobj));
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
        <t class="sub_header_topic">Update Employee</t>
        </div>
        <div className="ContentForm ">
      <form onSubmit={handleSubmit}>

          <div>
              <div>
                <div>
                  <label class="form">Code :</label>
                  <input className="form-control" value={_id} disabled="disabled" />
                </div>

            <div>
              <div>
                <div>
                  <label class="required">Employee Id :</label>
                  <input className="form-control" value={empId} disabled="disabled" />
                </div>
              </div>
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
                  <label class="required">Employee Mobile Number :</label>
                  <input className="form-control" value={contactInfo} onChange={e => setContactInfo(e.target.value)} />
                </div>
              </div>
            </div>

          </div>
           <div>
              <button type="submit" className="submit">Update</button>
              <Link to={"/emp"} className="clear">Back</Link>
            </div>
        </div>
      </form>
      </div>
    </div>
  );
}

export default UpdateEmp;
