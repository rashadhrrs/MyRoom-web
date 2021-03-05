





import React, {useEffect, useState} from 'react'
import tv from '../assets/images/tv.png'
import './Room1.css'

export default function Room1() {
    const [position, setPosition] =useState({
        x: 130, 
        y: 530,
        a: 130, 
        b: 530,
    })

    useEffect(()=> {
        const handle = document.getElementById("handle")
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
            a: e.clientA,
            b: e.clientB,
        }
        setPosition(pos)
    }
    
    return (
        <>
        <div className="room1">
        <div style={{
            position: "relative",
            width: "1000px",
            height: "500px",
            overflow: "hidden", margin:0
        }}>
        
        </div>
        </div>
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
        </>
    )
}
