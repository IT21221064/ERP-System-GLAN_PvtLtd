import { connect } from "react-redux";
import { FetchTaskList, RemoveTask } from "../redux/actions/TaskAction";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Header_bar_menu from "../components/Header_bar/Header_bar_manu";
import "../pages/Content.css";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const TaskListing = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    props.loadtask();
  }, []);

  const handleDelete = (code) => {
    if (window.confirm(`Remove task ${code} ?`)) {
      props.removetask(code);
      props.loadtask();
      toast.success("Task removed successfully");
    }
  };

  return props.task.loading ? (
    <div>
      <h2>Loading data...</h2>
    </div>
  ) : props.task.errmessage ? (
    <div>
      <h2>{props.task.errmessage}</h2>
    </div>
  ) : (
    <div>
      <div>
        {" "}
        <Header_bar_menu
          fun1="Dashboard"
          fun2="Task"
          fun3="Add Task"
          fun4="Report"
        />
      </div>
      <div className="search">
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <BiSearchAlt />
          </InputGroup.Text>
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
        <t class="sub_header_topic">View Tasks</t>
        <Link to="/task/add" className="page_link">
          Create
        </Link>
      </div>
      <div className="Content">
        <div>
          <Table striped hover className="table">
            <thead className="theaderManuf">
              <tr>
                <td>Task Id</td>
                <td>Output Item Name</td>
                <td>Output Item Quantity</td>
                <td>Production Supervisor</td>
                <td>Start Date</td>
                <td>End Date</td>
                <td>Status</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody className="tbodyManuf">
              {props.task.tasklist &&
                props.task.tasklist
                  .filter(
                    (item) =>
                      item.tId
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      item.iName
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      item.sDate
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      item.prodSupe
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                  )
                  .map((item) => (
                    <tr key={item._id}>
                      <td>{item.tId}</td>
                      <td>{item.iName}</td>
                      <td>{item.iQty}</td>
                      <td>{item.prodSupe}</td>
                      <td>{item.sDate}</td>
                      <td>{item.eDate}</td>
                      <td>{item.tState}</td>
                      <td>
                        <td>
                          <Link to={"/task/edit/" + item._id}>
                            <FiEdit
                              size="1.3rem"
                              color="blue"
                              className="margin"
                            />
                          </Link>{" "}
                          <button
                            onClick={() => {
                              handleDelete(item._id);
                            }}
                            className="margin"
                          >
                            <FiTrash2 size="1.4rem" color="red" />
                          </button>
                        </td>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    task: state.task,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadtask: () => dispatch(FetchTaskList()),
    removetask: (code) => dispatch(RemoveTask(code)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskListing);
