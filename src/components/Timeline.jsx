import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Stagger = () => {
  const box = useRef();
  const nav = useRef();
  useGSAP(
    () => {
      gsap.to("h1", {
        fontSize: "10vh",
        x: 200,
        stagger: 1,
        delay: 0.5,
        repeat: -1,
        yoyo: true,
      });

      var tl = gsap.timeline();
      tl.to(".box1", {
        x: 200,
        stagger: 1,
        delay: 0.5,
      });

      tl.to(".box2", {
        x: 400,
      });

      tl.to(".box3", {
        x: 600,
      });

      var navbar = gsap.timeline();

      navbar.from("h2", {
        y: -200,
        scale: 2,
        duration: 1,
      });

      navbar.from("h4", {
        scale: 0,
        y: -50,
        duration: 0.2,
        stagger: 0.2,
      });
    },
    { scope: box }
  );

  return (
    <>
      <div ref={box}>
        <nav className="flex bg-zinc-900 font-light text-3xl text-white justify-between p-6">
          <h2>Nayan</h2>
          <div className="flex gap-10">
            <h4>Home</h4>
            <h4>About</h4>
            <h4>Contact</h4>
            <h4>Blog</h4>
            <h4>News</h4>
          </div>
        </nav>
        <div className="w-full flex font-bold text-9xl text-center">
          <div className="w-1/2 text-center bg-black h-screen p-20 ">
            <h3 className="text-white">Frontend</h3>
          </div>
          <h5 className="text-black mt-60">Developer</h5>
        </div>

        <div className="box text-6xl">
          <div className="box1 size-48 bg-black mt-4"></div>
          <div className="box2 size-48 bg-blue-600 mt-4"></div>
          <div className="box3 size-48 bg-emerald-600 mt-4"></div>
        </div>
      </div>
    </>
  );
};

export default Stagger;
