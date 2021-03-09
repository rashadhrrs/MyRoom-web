import React, { useEffect, useState } from "react";
import tv from "../assets/images/tv.png";
import styles from "./Room1.css";
import Header from "../component/Header";
import Actor from "../component/actor/Actor";
import Player from "../component/Player";

export default function Room1() {
 
  return (
    <div className="zone-container">
        <Player/>
    </div>);
}
