import React from "react";
import "./Header.css";

export default function Header(props) {
  const { history } = props;
  return (
    <div className="navbar">
      <div className="left-content">
        <i
          class="fas fa-times"
          style={{
            width: "40px",
            height: "100%",
            color: "black",
            fontSize: "30px",
            cursor: "pointer",
          }}
          onClick={() => history.push("/")}
        />
        <span style={{ marginLeft: "40px" }}>IPLAYESRI'S BASE</span>
      </div>
      <div style={{ display: "flex" }}>
        <ul className="navbar-list">
          <li>GAME INFO</li>
          <li>STAMINA</li>
          <li>RESOURCES</li>
          <li>RESOURCES</li>
          <li>RESOURCES</li>
          <li>CRYSTAL</li>
          <li>COIN</li>
        </ul>
      </div>
    </div>
  );
}
