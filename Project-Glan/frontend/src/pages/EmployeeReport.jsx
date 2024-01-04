import { useReactToPrint } from "react-to-print"
import { connect } from "react-redux";
import { FetchEmpList, RemoveEmp } from "../redux/actions/employeeAction"
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Header_bar_emp from "../components/Header_bar/Header_bar_emp";
import "../pages/Content.css"
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const EmployeeTable = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const componentPDF = useRef();

  useEffect(() => {
    props.loadEmp();
  }, [])

  const handleDelete = (code) => {
    if (window.confirm("Remove Employee ?")) {
      props.removeEmp(code);
      props.loadEmp();
      toast.success("Employee removed successfully");
    }
  }
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Employee list",
    OnAFterPrint: () => alert("Data saved in PDF"),
  })

  return (

    props.emp.loading ? <div><h2>Loading data...</h2></div> :
      props.emp.errmessage ? <div><h2>{props.emp.errmessage}</h2></div> :

        <div>
          <div>  <Header_bar_emp
            fun1="Dashboard"
            fun2="Employee"
            fun7="Report" />
          </div>
          <div className="search">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><BiSearchAlt /></InputGroup.Text>
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
            <t class="sub_header_topic">View Employees</t>
            <Link to="/emp/add" className="page_link">Create</Link>
          </div>
          <div className="Content">


            <div ref={componentPDF} style={{ width: "100%" }}>
            <h4>Glan International Pvt Limited</h4>
              <h6>No.551,Mihindu Mawatha,Malabe,Sri Lanaka</h6>
              <h6>glaninternational@gmail.com</h6>
              <center><h4>Employee List Report</h4></center>
              <hr />
              <Table striped hover className="table">
                <thead className="theader">
                  <tr>

                    <td>Emp Id</td>
                    <td>Employee Name</td>
                    <td>NIC</td>
                    <td>DOB</td>
                    <td>Address</td>
                    <td>Mobile No</td>

                  </tr>
                </thead>
                <tbody className="tbody">
                  {props.emp.empList && props.emp.empList
                    .filter((item) =>
                      item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      item.empId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      item.address.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map(item =>
                      <tr key={item._id}>

                        <td>{item.empId}</td>
                        <td>{item.Name}</td>
                        <td>{item.nic}</td>
                        <td>{item.dob}</td>
                        <td>{item.address}</td>
                        <td>{item.contactInfo}</td>

                      </tr>
                    )}
                </tbody>
              </Table>
            </div>
            <button className="btn btn-success" onClick={generatePDF}>PDF Download</button>
          </div>



        </div>
  );
}

const mapStateToProps = (state) => {
  return {
    emp: state.emp
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadEmp: () => dispatch(FetchEmpList()),
    removeEmp: (code) => dispatch(RemoveEmp(code))
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(EmployeeTable);
