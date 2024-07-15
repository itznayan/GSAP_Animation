import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const WhileInView = () => {
  const box = useRef();
  useGSAP(() => {
    gsap.from("#page1 #box", {
      rotate: 360,
      marginBottom: 10,
      scale: 0,
    });

    gsap.from("#page2 #box", {
      rotate: 360,
      scale: 0,
      scrollTrigger: "#page2 #box",
    });
  });
  return (
    <>
      <main className="main-box" ref={box}>
        <div
          id="page1"
          className="w-screen h-screen bg-zinc-800 flex justify-center items-center"
        >
          <div id="box" className=" box size-48 bg-white"></div>
        </div>
        <div
          id="page2"
          className="w-screen h-screen bg-emerald-600 flex justify-center items-center"
        >
          <div id="box" className=" box size-48 bg-white"></div>
        </div>
        <div
          id="page3"
          className="w-screen h-screen bg-teal-400 flex justify-center items-center"
        >
          <div id="box" className=" box size-48 bg-white"></div>
        </div>
        <div
          id="page4"
          className="w-screen h-screen bg-purple-800 flex justify-center items-center"
        >
          <div id="box" className="box size-48 bg-white"></div>
        </div>
      </main>
    </>
  );
};

export default WhileInView;
