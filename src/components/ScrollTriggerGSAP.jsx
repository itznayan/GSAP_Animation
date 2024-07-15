import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerGSAP = () => {
  const box = useRef();
  useGSAP(() => {
    gsap.from("#page1 #box", {
      rotate: 360,
      marginBottom: 10,
      scale: 0,
    });

    gsap.from("#page2 h1", {
      opacity: 0,
      duration: 2,
      x: 500,
      scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "body",
        start: "top 50%",
      },
    });

    gsap.from("#page2 h2", {
      opacity: 0,
      duration: 2,
      x: -500,
      scrollTrigger: {
        trigger: "#page2 h2",
        scroller: "body",
        start: "top 60%",
      },
    });

    gsap.from("#page3 #box", {
      opacity: 0,
      duration: 2,
      rotate: 720,
      x: -500,
      scrollTrigger: {
        trigger: "#page3 #box",
        markers: true,
        scroller: "body",
        start: "top 60%",
        end: "top 10%",
        scrub: 2,
      },
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
          <div id="box" className=" box text-6xl text-center ">
            <h1 className="mb-10 bg-emerald-900 text-white p-4 rounded-2xl">
              Scroll Trigger
            </h1>
            <h2 className="bg-purple-800 text-white p-2 rounded-3xl">
              Hello Domsto
            </h2>
          </div>
        </div>
        <div
          id="page3"
          className="w-screen h-screen bg-teal-400 flex justify-center items-center"
        >
          <h1 className="text-6xl"> Scroll Trigger With Scrub</h1>
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

export default ScrollTriggerGSAP;
