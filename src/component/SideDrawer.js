import React from "react";
import "./SideDrawer.css";


const sideDrawer = (props) => (
  <nav className="side-drawer">
    <ul>
      <li>
        <a href="/">
          History
        </a>
      </li>
      <li>
        <a href="/"> 
        Video
        </a>
      </li>
    </ul>
  </nav>
);

export default sideDrawer;
