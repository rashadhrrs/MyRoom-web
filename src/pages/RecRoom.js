import React, { useState } from "react";
import "./RecRoom.css";
import Popup from "../component/Popup";
import SideDrawer from "../component/SideDrawer";
import { Button } from "@material-ui/core";
import Header from "../component/Header";


export default function ReceptionRoom(props) {
  const { history } = props;
  const [openPopup, setOpenPopup] = useState(false);
  const [popupTv, setPopupTv] = useState(false);
  return (
    <>
    <Header {...props} />
    <div className="recRoom">
      <div style={{ flexDirection: "row", marginRight: "20px" }}>
        <div
          onClick={() => {
            setOpenPopup(true);
          }}
          style={{
            backgroundColor: "#1e2a42",
            width: "100px",
            height: "80px",
            cursor: "pointer",
          }}
        >
          Bulletin Billboard
        </div>
        <div
          style={{
            backgroundColor: "#1e2a42",
            width: "100px",
            height: "80px",
            marginTop: "20px",
          }}
        >
          Gift Box
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#1e2a42",
          width: "120px",
          height: "100px",
          marginRight: "20px",
          cursor: "pointer"
        }}
        onClick={() => {
            setPopupTv(true);
          }}
      >
        TV
      </div>
      <div style={{ flexDirection: "row", marginRight: "20px" }}>
        <div
          style={{
            backgroundColor: "#1e2a42",
            width: "100px",
            height: "120px",
          }}
        >
          Poster
        </div>
        <div
          style={{
            backgroundColor: "#1e2a42",
            width: "100px",
            height: "80px",
            marginTop: "20px",
          }}
        >
          Meja Party
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#1e2a42",
          width: "100px",
          height: "160px",
          marginRight: "20px",
        }}
      >
        Bookshelf
      </div>
      <div style={{ flexDirection: "row", marginRight: "20px" }}>
        <div
          style={{ backgroundColor: "#1e2a42", width: "100px", height: "60px" }}
        >
          Wall of Achievement
        </div>
        <div
          style={{
            backgroundColor: "#1e2a42",
            width: "100px",
            height: "100px",
            marginTop: "20px",
          }}
        >
          Thropy
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#1e2a42",
          width: "100px",
          height: "160px",
          marginRight: "20px",
        }}
      >
        Figurine
      </div>
      <div
        style={{
          backgroundColor: "#1e2a42",
          width: "100px",
          height: "160px",
          marginRight: "20px",
        }}
      >
        Wardrobe
      </div>
      <div
        style={{ backgroundColor: "#1e2a42", width: "100px", height: "160px" }}
      >
        Lift
      </div>
      <Popup trigger={openPopup} setTrigger={setOpenPopup}>
      <h3>IPLAYER'S BULLETIN BILLBOARD</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              width: "100px",
              height: "100px",
              color: "black",
            }}
          >
            Blablabla
          </div>
          <div
            style={{
              backgroundColor: "white",
              width: "100px",
              height: "100px",
              color: "black",
            }}
          >
            Blablabla
          </div>
          <div
            style={{
              backgroundColor: "white",
              width: "100px",
              height: "100px",
              color: "black",
            }}
          >
            Blablabla
          </div>
        </div>
      </Popup>
      <Popup trigger={popupTv} setTrigger={setPopupTv}>
      <h3>TV</h3>
      <SideDrawer></SideDrawer>
      <div style={{display: "flex", justifyContent:"space-between", marginLeft:"200px"}}>
         <div style={{backgroundColor: "white", width:"60px", height:"50px", color:"black"}}>Video</div>
         <div>Duration</div>
         <div>KDA</div>
         <Button variant="contained" color="primary">PLAY</Button>
      </div>
      </Popup>
    </div>
  </>);
}
