import React from "react";
import "./MyRoom.css";

export default function MyRoom() {
  return (
    <div className="myRoom">
      <div className="upper-content">
        <a
          href="/RecRoom"
          style={{
            marginRight: "30px",
            backgroundColor: "#1e2a42",
            width: "80%",
          }}
        >
          Reception Room
        </a>
        <div
          style={{ backgroundColor: "#1e2a42", width: "20%", height: "120px" }}
        >
          lift
        </div>
      </div>
      <div className="bottom-content">
        <div
          style={{
            marginRight: "30px",
            backgroundColor: "#1e2a42",
            width: "39%",
          }}
        >
          room2
        </div>
        <div
          style={{
            marginRight: "30px",
            backgroundColor: "#1e2a42",
            width: "39%",
          }}
        >
          room 1
        </div>
        <div
          style={{ backgroundColor: "#1e2a42", width: "20%", height: "120px" }}
        >
          lift
        </div>
      </div>
    </div>
  );
}
