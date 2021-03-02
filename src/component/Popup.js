import React from "react";
import "./Popup.css";

export default function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="close-btn">
          <i
            class="fas fa-times"
            style={{
              width: "40px",
              height: "100%",
              color: "black",
              fontSize: "30px",
              cursor: "pointer",
            }}
            onClick={() => props.setTrigger(false)}
          />
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
