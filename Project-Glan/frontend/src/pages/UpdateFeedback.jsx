import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FeedbackUpdate, FetchFeedbackObj } from "../redux/actions/Feedback";
import { useEffect, useState } from "react";
import Header_bar from "../components/Header_bar/Header_bar";
import "../pages/Content.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function UpdateFeedback() {
    const [_id, set_id] = useState(0);
    const [fid, setfid] = useState();
    const [cusName, setcusName] = useState("");
    const [date, setdate] = useState("");
    const [feed, setfeed] = useState("");
    const [response, setresponse] = useState("");
    const [status, setstatus] = useState("");
    const [assign, setassign] = useState("");
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { code } = useParams();
  
    const feedbackobj = useSelector((state) => state.feedback.feedbackobj);
  
    useEffect(() => {
      dispatch(FetchFeedbackObj(code));
    }, []);
  
    useEffect(() => {
      if (feedbackobj) {
        set_id(feedbackobj._id);
        setfid(feedbackobj.fid);
        setcusName(feedbackobj.cusName);
        setdate(feedbackobj.date);
        setfeed(feedbackobj.feed);
        setresponse(feedbackobj.response);
        setstatus(feedbackobj.status);
        setassign(feedbackobj.assign);
      }
    }, [feedbackobj]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const feedbackobj = { _id, fid, cusName, date,feed, response, status,assign};
      dispatch(FeedbackUpdate(_id, feedbackobj));
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
          <span>Search bar</span>
        </div>
        <div class="page_sub_header">
        <t class="sub_header_topic">Update Customer</t>
        </div>
        <div className="ContentForm ">
        <form onSubmit={handleSubmit}>
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
                  <div className="form-group">
                    <label class="form">Feedback Id :</label>
                    <input
                      className="form-control"
                      value={fid || ""}
                      disabled="disabled"
                    />
                  </div>
                  <div className="form-group">
                    <label class="form">Customer Name :</label>
                    <input
                      className="form-control"
                      value={cusName || ""}
                      disabled="disabled"
                    />
                  </div>
                  <div className="form-group">
                    <label class="form">Create Date :</label>
                    <input
                      className="form-control"
                      value={date || ""}
                      disabled="disabled"
                    />
                  </div>
             
                  <div className="form-group">
                    <label class="form">Feedback :</label>
                    <input
                      className="form-control"
                      value={feed || ""}
                      disabled="disabled"
                    />
                  </div>
           
                  <div className="form-group">
                    <label class="form">Response :</label>
                    <input
                      className="form-control"
                      value={response || ""}
                      onChange={(e) => setresponse(e.target.value)}
                    />
                  </div>
              
              
                  <div className="form-group">
                    <label class="form">Status :</label>
                    <input
                      className="form-control"
                      value={status || ""}
                      onChange={(e) => setstatus(e.target.value)}
                    />
                  </div>
              
              
                  <div className="form-group">
                    <label class="form">Assign :</label>
                    <input
                      className="form-control"
                      value={assign || ""}
                      onChange={(e) => setassign(e.target.value)}
                    />
                  </div>
            </div>
            <div>
              <button type="submit" className="submit">Update</button>
              <Link to={"/viewFeedback"} className="clear">Back</Link>
            </div>
          </div>
        </form>
        </div>
      </div>
    );
}

export default UpdateFeedback