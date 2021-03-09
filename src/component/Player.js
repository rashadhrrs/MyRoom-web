import React from "react";
import Actor from "../component/actor/Actor";
import useKeyPress from "../hooks/use-key-press/index";
import useWalk from "../hooks/use-walk/index";

export default function Player({ skin }) {
  const { dir, step, walk, position } = useWalk(3);
  const data = {
    h: 32,
    w: 32,
  };

  useKeyPress((e) => {
    const dir = e.key.replace("Arrow", "").toLowerCase();
    //   if(directions.hasOwnProperty(dir)) console.log(dir);
    walk(dir);
    e.preventDefault();
  });
  return (
    <div>
      <Actor sprite={`../assets/image/m1.png`} data={data} step ={step} dir={dir} position={position} />
    </div>
  );
}
