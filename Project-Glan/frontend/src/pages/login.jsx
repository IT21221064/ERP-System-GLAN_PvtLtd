import { Link } from "react-router-dom";
import "../pages/Content.css";

const login = () => {
  return (
    <div>
      <form>
        <div>
          <div className="topiclogin">
            <span className="loginc">Login Page</span>
          </div>
          <div className="logincontent">
            <input type="text" placeholder="name" />
            <br />
            <br />
            <input type="email" placeholder="email" />
            <br />
            <br />
            <input type="password" placeholder="password" />
            <br />
            <br />
            <br />
            <div className="submit">
              <Link to={"/taskDashboard"}>Go</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default login;
