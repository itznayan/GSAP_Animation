import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";

const Svg = () => {
  const [path, setPath] = useState();
  const [final, setFinal] = useState();

  const handleEnter = (e) => {
    const initialPath = `M 10 100 Q ${e.clientX} ${e.clientY} 990 100`;
    setPath(initialPath);
    gsap.to("svg path", {
      attr: { d: initialPath },
      duration: 2,
    });
  };
  const handleLeave = (e) => {
    var finalPath = `M 10 100 Q 250 100 990 100`;
    setFinal(finalPath);
  };

  return (
    <div className="h-screen w-full bg-zinc-900 ">
      <div
        id="string"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="bg-black"
      >
        <svg width="1000" height="200">
          <path
            d="M 10 100 Q 250 100 990 100"
            stroke="white"
            fill="transparent"
          />
        </svg>
      </div>
    </div>
  );
};

export default Svg;
