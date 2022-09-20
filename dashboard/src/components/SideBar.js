import React from "react";
import Widget from "./Widget";
import Reviews from "./Reviews";
import Customers from "./Customers";
import OnlineAnalysis from "./OnlineAnalysis";
import Settings from "./Settings";

function SideBar(props) {
  return (
    <div className="sidebar" >
          <Widget/>
          <Reviews/>
          <Customers/>
          <OnlineAnalysis/>
          <Settings/>
    </div>
  );
}



export default SideBar;
