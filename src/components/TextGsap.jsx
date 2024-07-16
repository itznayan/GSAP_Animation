import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const TextGsap = () => {
  const text = "Nayan Mahera";

  useGSAP(() => {
    gsap.from(".a", {
      y: 100,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
    });

    gsap.from(".b", {
      y: 100,
      opacity: 0,
      duration: 0.6,
      stagger: -0.2,
    });
  });
  return (
    <div className="h-screen  w-screen flex justify-center items-center">
      <h1 className=" overflow-hidden text-[10vw] leading-none font-thin text-black">
        {text.split("").map((item, index) => (
          <span
            className={` ${index < text.length / 2 ? "a" : "b"}  inline-block`}
            key={index}
          >
            {item}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default TextGsap;
