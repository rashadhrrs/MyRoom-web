import React from "react";
import "./MyRoom.css";
import Header from "../component/Header";

export default function MyRoom(props) {
  return (
    <>
      <Header {...props} />
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
            style={{
              backgroundColor: "#1e2a42",
              width: "20%",
              height: "120px",
            }}
          >
            Lift
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
            Room2
          </div>
          <a
            href="/Room1"
            style={{
              marginRight: "30px",
              backgroundColor: "#1e2a42",
              width: "39%",
            }}
          >
            Room 1
          </a>
          <div
            style={{
              backgroundColor: "#1e2a42",
              width: "20%",
              height: "120px",
            }}
          >
            Lift
          </div>
        </div>
      </div>
    </>
  );
}
