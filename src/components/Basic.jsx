import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Basic = () => {
  useGSAP(() => {
    gsap.to(".box", {
      x: 1200,
      rotate: 360,
      duration: 1,
      delay: 1,
      borderRadius: "50%",
      scale: 0.5,
      backgroundColor: "red",
    });
    gsap.from("h2", {
      opacity: 0,
      duration: 1,
      y: 1000,
      stagger: 0.2,
    });
    gsap.to("h2", {
      fontSize: "10vh",
      color: "blue",
      delay: 1,
      y: 0,
      duration: 2,
    });
  });
  return (
    <div>
      <h1 className="text-6xl p-10">GSAP Basic</h1>
      <div id="box" className="box size-40 bg-black"></div>
      <div className="flex">
        {" "}
        {"Hello  ".split("").map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))}
        &nbsp;{" "}
        {"Friends".split("").map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))}
      </div>

      <h2>Hello Guyz</h2>
      <h2>Hello Mitro</h2>
    </div>
  );
};

export default Basic;
