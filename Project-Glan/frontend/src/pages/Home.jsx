import Header_bar from "../components/Header_bar/Header_bar";
import "../pages/Content.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "../components/Dashboard/Dashboard";

function Home() {
  return (
    <div>
         <div>  <Header_bar 
          fun1="Dashboard"
          fun2="Customer"
          fun3="Customer Privilege"
          fun4="Customer Feedback"
          fun5="Purchase History"
          fun6="Notifications"
          fun7="Report"/>
        </div>
        <div>
          <Dashboard/>
        </div>
        
    </div>
  );
}

export default Home;
