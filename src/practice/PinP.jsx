import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PinP = () => {
  useGSAP(() => {
    gsap.to(".box h1", {
      transform: "translateX(-120%)",
      opacity: 1,
      duration: 2,

      scrollTrigger: {
        trigger: ".box",
        markers: true,
        scroller: "body",
        start: "top 10%",
        end: "top -100%",
        scrub: 2,
        pin: true,
      },
    });
  });
  return (
    <div className="h-full w-full overflow-x-hidden">
      <div className="h-screen w-screen"></div>
      <div className="box flex font-thin bg-black text-white items-center p-20 h-screen w-screen text-[40vw]">
        <h1 className="">Hello&nbsp;Friends</h1>
      </div>

      <div className="h-screen w-screen"></div>
    </div>
  );
};

export default PinP;
