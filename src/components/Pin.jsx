import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Pin = () => {
  useGSAP(() => {
    gsap.to("#page2 h1", {
      opacity: 1,
      color: "red",
      transform: "translateX(-150%)",
      scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true,
      },
    });
  });
  return (
    <div className="w-['100%'] h-['100%'] overflow-x-hidden">
      <div className="page1 w-screen h-screen bg-zinc-800">
        <h1></h1>
      </div>

      <div
        id="page2"
        className="page2 flex items-center  w-screen h-screen bg-purple-950"
      >
        <h1 className="text-[40vw] text-zinc-300">Experiences</h1>
      </div>

      <div className="page3 w-screen h-screen bg-teal-800">
        <h1></h1>
      </div>
    </div>
  );
};

export default Pin;
