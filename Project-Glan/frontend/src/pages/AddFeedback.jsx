import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CreateFeedback } from "../redux/actions/Feedback";
import Header_bar from "../components/Header_bar/Header_bar";
import "../pages/Content.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function AddFeedback() {

    const [fid, setfid] = useState("");
    const [cusName, setcusName] = useState("");
    const [date, setdate] = useState("");
    const [feed, setfeed] = useState("");
    const [response, setresponse] = useState("");
    const [status, setstatus] = useState("");
    const [assign, setassign] = useState("");
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const feedbackobj = {  fid, cusName, date,feed, response, status,assign};
      dispatch(CreateFeedback(feedbackobj));

      navigate("/viewFeedback");
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
                    <label class="form">Feedback Id :</label>
                    <input
                      className="form-control"
                      value={fid}
                      required
                      pattern="F\d{4}"
                      title="It should be stat with 'F' letter and must added 4 numbers"
                      onChange={(e) => setfid(e.target.value)}
                    />
                  </div>
                  <div >
                    <label class="form">Customer Name :</label>
                    <input
                      className="form-control"
                      value={cusName}
                      placeholder="Name with Initials"
                      required
                      onChange={(e) => setcusName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label  class="form">Create Date :</label>
                    <input
                      type="date"
                      className="form-control"
                      value={date}
                      onChange={(e) => setdate(e.target.value)}
                    />
                  </div>
                  <div>
                    <label  class="form">Feedback :</label>
                    <input
                      className="form-control"
                      value={feed}
                      required
                      onChange={(e) => setfeed(e.target.value)}
                    />
                  </div>
                  <div>
                    <label  class="form">Response :</label>
                    <input
                      className="form-control"
                      value={response}
                      onChange={(e) => setresponse(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label  class="form">Status:</label>
                    <input
                      className="form-control"
                      value={status}
                      onChange={(e) => setstatus(e.target.value)}
                    />
                  </div>
                  <div>
                    <label  class="form">Assign :</label>
                    <input
                      className="form-control"
                      value={assign}
                      onChange={(e) => setassign(e.target.value)}
                    />
                  </div>
            </div>
            <div>
              <button type="submit" className="submit">Submit</button>
              <Link to={"/viewFeedback"} className="clear">Back</Link>
            </div>
          </div>
        </form>
        </div>
      </div>
    );
}

export default AddFeedback