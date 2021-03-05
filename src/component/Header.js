import React from "react";
import "./Header.css";

export default function Header(props) {
  const { history } = props;
  return (
    <div className="navbar">
      <div className="left-content">
        {props.location.pathname === "/RecRoom" || props.location.pathname === "/Room1"  ? (
          <i
          class="fas fa-arrow-left"
          style={{
            width: "40px",
            height: "100%",
            color: "black",
            fontSize: "30px",
            cursor: "pointer",
          }}
          onClick={() => history.push("/")}
        />
        ) : (<i
          class="fas fa-times"
          style={{
            width: "40px",
            height: "100%",
            color: "black",
            fontSize: "30px",
            cursor: "pointer",
          }}
        />)}
        <span style={{ marginLeft: "40px" }}>IPLAYESRI'S BASE</span>
      </div>
      <div style={{ display: "flex" }}>
        <ul className="navbar-list">
          <li><i class="fas fa-gamepad"></i><input disabled placeholder="GAME INFO"/></li>
          <li><i class="fas fa-bolt"></i><input disabled placeholder="STAMINA"/></li>
          <li><i class="fas fa-tree"></i><input disabled placeholder="RESOURCES"/></li>
          <li><i class="fas fa-tree"></i><input disabled placeholder="RESOURCES"/></li>
          <li><i class="fas fa-tree"></i><input disabled placeholder="RESOURCES"/></li>
          <li><i class="fas fa-gem"></i><input disabled placeholder="CRYSTAL"/></li>
          <li><i class="fas fa-coins"></i><input disabled placeholder="COIN"/></li>
        </ul>
      </div>
    </div>
  );
}
