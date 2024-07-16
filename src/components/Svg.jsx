import gsap from "gsap";
import { useRef } from "react";

const Svg = () => {
  const pathRef = useRef(null);

  const handleMove = (e) => {
    const path = `M 10 100 Q ${e.clientX} ${e.clientY * 2} 990 100`;
    gsap.to(pathRef.current, {
      attr: { d: path },
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    const finalPath = `M 10 100 Q 250 100 990 100`;
    gsap.to(pathRef.current, {
      attr: { d: finalPath },
      duration: 0.6,
      ease: "elastic.out(1,0.2)",
    });
  };

  return (
    <div className="h-screen w-full bg-zinc-900">
      <div
        id="string"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="bg-black"
      >
        <svg className="svg" width="1000" height="200">
          <path
            ref={pathRef}
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
