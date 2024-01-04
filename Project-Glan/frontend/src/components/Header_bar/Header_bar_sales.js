import "../Header_bar/Header_bar.css"
import img1 from "./Images/menu.jpg"
import img3 from "./Images/profile.png"
import {NavLink} from "react-router-dom";
import * as React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { IoNotificationsSharp } from "react-icons/io5";


function CustomToggle({ icon, onClick }) {
  return (
    <div className="prof" onClick={onClick}>
      <img src={img3} alt="dropdown icon" />
    </div>
  );
}
function Header_bar(props) {

  const [open, setOpen] = useState(false);
    
  return (
    <div>
        <div className="headerBox">
            <div >
            <img src={img1} className="menu"/>
            </div>
            <div className="company">
            <span> Glan International</span>
            </div>
            <div className="system">
            <NavLink to="/taskDashboard" style={{ textDecoration: 'none' }}><span className="each_sys">Manufacture</span ></NavLink> 
            <NavLink to="/inDashboard" style={{ textDecoration: 'none' }}><span className="each_sys">Sales</span></NavLink>
            <NavLink to="/customer/Dashboard" style={{ textDecoration: 'none' }}><span className="each_sys">CRM</span></NavLink>
            <NavLink to="" style={{ textDecoration: 'none' }}><span className="each_sys">Finance</span></NavLink>
            <NavLink to="/employeeDashboard" style={{ textDecoration: 'none' }}><span className="each_sys">HRM</span></NavLink>
            <NavLink to="/itemDashboard" style={{ textDecoration: 'none' }}><span className="each_sys">Inventory</span></NavLink>
            <NavLink to="/locationDashboard" style={{ textDecoration: 'none' }}><span className="each_sys">Warehouse</span></NavLink>
            <NavLink to="/vehicleDashboard" style={{ textDecoration: 'none' }}><span className="each_sys">Transport</span></NavLink>
            <NavLink to="#" style={{ textDecoration: 'none' }}><span className="admin">Hi Admin</span></NavLink>
            <div className="profileDIV">
            <Dropdown show={open} onClick={() => setOpen(!open)}>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" />
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
            </div>
            <div className="noti"><IoNotificationsSharp size= "1.1rem" color="white"/></div>
            </div>
        </div>
        <div class ="sideBox">
            <div className="function">
            <NavLink to="/inDashboard" style={{ textDecoration: 'none' }}>
            <p className="each_fun">{props.fun1}</p>
            </NavLink>
            <NavLink to="/invoice" style={{ textDecoration: 'none' }}>
            <p className="each_fun">{props.fun2}</p>
            </NavLink>
            <NavLink to="/invoice/add" style={{ textDecoration: 'none' }}>
            <p className="each_fun">{props.fun3}</p>
            </NavLink>
            <NavLink to="/invoiceReport" style={{ textDecoration: 'none' }}>
            <p className="each_fun">{props.fun4}</p>
            </NavLink>
            <NavLink to="" style={{ textDecoration: 'none' }}>
            <p className="each_fun">{props.fun5}</p>
            </NavLink>
            <NavLink to="#" style={{ textDecoration: 'none' }}>
            <p className="each_fun">{props.fun6}</p>
            </NavLink>
            <NavLink to="#" style={{ textDecoration: 'none' }}>
            <p className="each_fun">{props.fun7}</p>
            </NavLink>
            <NavLink to="#" style={{ textDecoration: 'none' }}>
            <p className="each_fun">{props.fun8}</p>
            </NavLink>
            <NavLink to="#" style={{ textDecoration: 'none' }}>
            <p className="each_fun">{props.fun9}</p>
            </NavLink>
            <NavLink to="#" style={{ textDecoration: 'none' }}>
            <p className="each_fun">{props.fun10}</p>
            </NavLink>
            <NavLink to="#" style={{ textDecoration: 'none' }}>
            <p className="each_fun">{props.fun10}</p>
            </NavLink>
            </div>

        </div>
    </div>
  )
}

export default Header_bar;