import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Text from "./components/Text";
const App = () => {
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
      duration: 2,
      y: 1000,
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
    <>
      <div id="box" className="box size-40 bg-black"></div>
      <h2>Hello Friends</h2>
      <h2>Hello Guyz</h2>
      <h2>Hello Mitro</h2>
    </>
  );
};

export default App;
