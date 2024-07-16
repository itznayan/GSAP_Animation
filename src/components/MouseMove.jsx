import gsap from "gsap";
import { useRef } from "react";

const MouseMove = () => {
  const refScale = useRef();
  const cursor = useRef();

  const handleMove = (e) => {
    gsap.to(".mouse", {
      x: e.clientX,
      y: e.clientY,
      stagger: 0.06,
      duration: 0.5,
      delay: 0.1,
      ease: "elastic",
    });
  };

  return (
    <>
      <div>
        <div ref={refScale} className="box bg-zinc-500 absolute size-96">
          Hello
        </div>
        <div
          ref={cursor}
          onMouseMove={handleMove}
          className="absolute h-screen w-screen flex "
        >
          <div className="absolute mouse size-8 bg-zinc-800 rounded-full"></div>
        </div>
      </div>
    </>
  );
};

export default MouseMove;
