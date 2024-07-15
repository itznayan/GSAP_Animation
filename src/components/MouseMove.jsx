import gsap from "gsap";
import React from "react";

const MouseMove = () => {
  const handleMove = (e) => {
    gsap.to(".mouse", {
      x: e.clientX,
      y: e.clientY,
      duration: 0.5,
      delay: 0.2,
      ease: "elastic",
    });
  };
  return (
    <div className="h-screen w-screen" onMouseMove={handleMove}>
      <div className="mouse size-14 bg-zinc-800 rounded-full"></div>
    </div>
  );
};

export default MouseMove;
