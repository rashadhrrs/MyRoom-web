


import React, {useEffect, useState} from 'react'
import tv from '../assets/images/tv.png'
import './Room1.css'
import Header from "../component/Header";



export default function Room1(props) {
    const [position, setPosition] =useState({
        x: 0, 
        y: 0
    })

    useEffect(()=> {
        const handle = document.getElementById("handle")
        // var theThing = document.getElementById("thing")
        // var theContainer = document.getElementById("container")

        // theContainer.addEventListener("click", getClickPosition, false)

        // function getClickPosition(e){
        //     var xPosition = e.clientX;
        //     var yPosition = e.clientY

        //     var translate3dValue = "translate3d(" + xPosition + "px," + yPosition + "px, 0)"
        //     theThing.style.transform = translate3dValue;
        //     alert(translate3dValue)
        // }

        handle.addEventListener("mousedown", function(e){
            e.preventDefault()
            handle.style.pointerEvents = "none"

            document.body.addEventListener("mousemove", move)
            document.body.addEventListener("mouseup", ()=> {
                document.body.removeEventListener("mousemove", move)
                handle.style.pointerEvents = "initial"
            })
        })

        return () => {
            document.body.removeEventListener("mousedown", move)
            document.body.removeEventListener("mouseup", move)
            document.body.removeEventListener("mousemove", move)
        }
    }, [])

    function move(e) {
        const pos = {
            x: e.clientX,
            y: e.clientY,
        }
        setPosition(pos)
    }
    return (
        <>
    <Header {...props} />
        <div className="room1">
        <div style={{
            position: "relative",
            width: "1600px",
            height: "500px",
            overflow: "hidden", margin:0
        }}>
  <div 
        style={{
            position: "absolute",
            top: position.y,
            left: position.x,
            zIndex: 100,
            width:200,
            height:200, margin:0 
        }}>
            <img id="handle" src={tv} style={{width:"100%"}}></img>
        </div>
        </div>
        </div>
        </>
    )
}