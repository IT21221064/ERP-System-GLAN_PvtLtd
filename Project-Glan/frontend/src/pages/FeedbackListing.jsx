import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import Header_bar from "../components/Header_bar/Header_bar";
import "../pages/Content.css"
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiEdit } from "react-icons/fi";
import { FiTrash2} from "react-icons/fi";
import { BiSearchAlt} from "react-icons/bi";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FetchFeedbackList, RemoveFeedback } from "../redux/actions/Feedback";



function FeedbackListing(props) {
  const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        props.loadfeedback();
      }, []);
    
      const handleDelete = (code) => {
        if (window.confirm(`Remove feedback ${code} ?`)) {
          props.removefeedback(code);
          props.loadfeedback();
          toast.success("Customer Feedback removed successfully");
        }
      };

      return props.feedback.loading ? (
        <div>
          <h2>Loading data...</h2>
        </div>
      ) : props.feedback.errmessage ? (
        <div>
          <h2>{props.feedback.errmessage}</h2>
        </div>
      ) : (
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
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><BiSearchAlt/></InputGroup.Text>
            <Form.Control
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            </InputGroup>
          </div>
          <div class="page_sub_header">
            <t class="sub_header_topic">View Customer Feedback</t>
            <Link to="/feedback/add" className="page_link">Create</Link>
          </div>
            <div className="Content">
                <Table striped hover className="table">
                <thead className="theader">
                <tr>
                  <th>Object ID</th>
                  <th>Feedback ID</th>
                  <th>Customer Name</th>
                  <th>Create Date</th>
                  <th>Feedback</th>
                  <th>Response</th>
                  <th>Status</th>
                  <th>Assign</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody className="tbody">
                  {props.feedback.feedbacklist && 
                  props.feedback.feedbacklist
                  .filter((item) =>
                    item.cusName.toLowerCase().includes(searchTerm.toLowerCase())||
                    item.status.toLowerCase().includes(searchTerm.toLowerCase())||
                    item.assign.toLowerCase().includes(searchTerm.toLowerCase())||
                    item.fid.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((item) => (
                    <tr key={item._id}>
                      <td className="nowrap">{item._id}</td>
                      <td>{item.fid}</td>
                      <td>{item.cusName}</td>
                      <td>{item.date}</td>
                      <td>{item.feed}</td>
                      <td>{item.response}</td>
                      <td>{item.status}</td>
                      <td>{item.assign}</td>
                      <td>
                        <Link to={"/feedback/edit/" + item._id}><FiEdit size= "1.3rem" color="blue"/></Link>{" "}
                        <button onClick={() => {
                          handleDelete(item._id);
                          }} className="margin"><FiTrash2 size= "1.4rem" color="red"/></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
           </div>
        </div>
      );
}

const mapStateToProps = (state) => {
    return {
      feedback: state.feedback,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      loadfeedback: () => dispatch(FetchFeedbackList()),
      removefeedback: (code) => dispatch(RemoveFeedback(code)),
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(FeedbackListing);