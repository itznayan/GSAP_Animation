import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const NavbarAni = () => {
  const tl = useRef(gsap.timeline({ paused: true }));
  useGSAP(() => {
    tl.current.from(".parentNav", {
      x: 550,
      duration: 0.5,
    });
    tl.current.from(".navInfo h4", {
      x: 200,
      opacity: 0,
      stagger: 0.25,
    });
  });
  const handleClose = () => {
    tl.current.reverse();
  };
  const handleOpen = () => {
    tl.current.play();
  };

  return (
    <div className="overflow-x-hidden text-white h-screen w-screen bg-[url('https://images.unsplash.com/photo-1720975945110-6278215f280d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="flex justify-between text-5xl">
        <h1>Nayan Mahera</h1>{" "}
        <button onClick={handleOpen} className="p-10 text-white">
          Open
        </button>
        <div className="parentNav relative flex justify-between  font-semibold backdrop-blur-xl backdrop-brightness-50 p-20 w-1/3 h-screen text-white bg-white/10">
          <div className="navInfo space-y-10">
            <h4>About</h4>
            <h4>Contact</h4>
            <h4>Blog</h4>
            <h4>News</h4>
            <h4>Projects</h4>
          </div>
          <button
            className="absolute top-2 text-white bg-zinc-800 p-2 font-thin rounded-full left-[20vw]"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarAni;
