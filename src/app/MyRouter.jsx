import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MartinComponent from './components/MartinComponent.jsx';
import MyMap from './components/MyMap.jsx';


const MyRouter = () => (
  <Router>
    <div>
      <div className="mainMenu">
        <ul>
          <li>
            <Link to="/">Welcome</Link>
          </li>
          <li>
            <Link to="/MyMap">MyMap</Link>
          </li>
        </ul>
      </div>
      <br /><br />
      <hr />
      <Route exact path="/" component={Welcome} />
      <Route exact path="/MyMap" component={MyMapRoute} />
    </div>
  </Router>
);

const Welcome = () =>(
  <div>
    <MartinComponent />
    <br />
  </div>
);
const MyMapRoute = () =>(
  <div>
    <MyMap />
    <br />
  </div>
);




export default MyRouter;
