import React from "react";
import Widget from "./Widget";
import Reviews from "./Reviews";
import Customers from "./Customers";
import OnlineAnalysis from "./OnlineAnalysis";
import Settings from "./Settings";

function Dashboard(props) {
  return (
    <div>
    <div className="sidebar" >
          <Widget/>
          <Reviews/>
          <Customers/>
          <OnlineAnalysis/>
          <Settings/>
    </div> 
    <div className="mainContent">
    <div className="grid">
        <div className="panel">
        <Reviews/>
        <p>1,281</p>
        </div>
        <div className="panel">
        <OnlineAnalysis/>
        <p>960</p>
        <p>122</p>
        <p>321</p>
        </div>
        <div className="panel">
        <Settings/>
        <p>Color Theme</p>
        <p>Fees</p>
        <p>xyz</p>
        </div>
        <div className="customersPanel">
        <Customers/>
        <p>821 Visitors</p>
        </div>


    </div>
    </div>
    </div>
  );
}



export default Dashboard;
