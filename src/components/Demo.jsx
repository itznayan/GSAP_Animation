import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Demo = () => {
  useGSAP(() => {
    var tl = gsap.timeline();
    tl.from("nav .logo,nav h4,nav button", {
      y: -30,
      opacity: 0,
      delay: 1,
      stagger: 0.2,
    });

    tl.from(".center h1", {
      x: -350,
      opacity: 0,
      duration: 0.55,
    });

    tl.from(".center p", {
      x: -220,
      opacity: 0,
      duration: 0.25,
    });

    tl.from(".center button", {
      x: -220,
      opacity: 0,
      duration: 0.35,
    });

    tl.from(
      ".image img",
      {
        opacity: 0,
        duration: 0.35,
      },
      "-=1"
    );

    tl.from(".company-banner img", {
      opacity: 0,
      duration: 0.8,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".company-banner",
        start: "top 80%",
        end: "top 30%",
        scroller: "body",
        scrub: 2,
      },
    });

    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".services",
        start: "top 60%",
        end: "top 30%",
        scroller: "body",
        scrub: 2,
      },
    });

    tl2.from(".Services,p", {
      stagger: 0.5,
      opacity: 0,
      x: -200,
    });

    var tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".banner",
        markers: true,
        start: "top 40%",
        end: "bottom 80%",
        scroller: "body",
        scrub: 2,
      },
    });

    tl3.from(
      ".banner1 ",
      {
        x: 400,
        stagger: 0.5,
        opacity: 0,
      },
      "anim"
    );

    tl3.from(
      ".banner2",
      {
        x: -400,
        stagger: 0.5,
        opacity: 0,
      },
      "anim"
    );

    tl3.from(
      ".banner3 ",
      {
        x: 400,
        stagger: 0.5,
        opacity: 0,
      },
      "anim1"
    );

    tl3.from(
      ".banner4",
      {
        x: -400,
        stagger: 0.5,
        opacity: 0,
      },
      "anim1"
    );
  });
  return (
    <div className="px-20 py-6 ">
      <nav className="flex items-center justify-between text-xl">
        <div className="logo flex gap-2 font-semibold">
          <i className="inline-block scale-150 rotate-45 ri-shining-2-fill "></i>
          <h1>WizardZ</h1>
        </div>

        <div className="flex items-center gap-10 part2">
          <h4>About us</h4>
          <h4>Services</h4>
          <h4>Use Cases</h4>
          <h4>Pricing</h4>
          <h4>Blog</h4>
          <button className="border-[#929292] border-2 px-4 py-2 rounded-xl">
            Request a quote
          </button>
        </div>
      </nav>

      <main className="grid grid-cols-2 max-sm:grid-cols-1  px-20 ">
        <div className="center space-y-10 py-32">
          <h1 className="text-6xl w-[35vw] font-semibold leading-[70px]">
            Navigating the digital landsscape for success
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo neque
            minima eos, dignissimos doloremque doloribus est odit ea laudantium
            enim modi, obcaecati ab quibusdam? Temporibus deleniti culpa ducimus
            corporis dolores similique ea iusto voluptates quas.
          </p>

          <button className="bg-[#1F1F1F] px-14 tracking-widest py-4 text-white rounded-3xl font-semibold">
            Book A Consulation
          </button>
        </div>
        <div className="image py-14">
          <img
            src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?w=740&t=st=1721132824~exp=1721133424~hmac=0ebdee2f23c0677f4f307de5dc66c9fb4629cb8d32cf74ebde6ff641378034da"
            alt="illtration"
          />
        </div>
      </main>

      <div className="company-banner grid grid-cols-6">
        <img
          src="https://img.freepik.com/free-vector/abstract-orange-triangle-logo_1043-120.jpg?t=st=1721133039~exp=1721136639~hmac=5b47cb88783070da8827f15abd2875efca6c853d2dcb26f4dc2567c4e8fe0deb&w=740"
          alt="firstcompany"
        />
        <img
          src="https://img.freepik.com/free-vector/friends-logo-template_23-2149505594.jpg?t=st=1721133044~exp=1721136644~hmac=bfd359a705989733b4bea7673033aee59e8265d051c5ba95fb45964619aa9616&w=740"
          alt="firstcompany"
        />
        <img
          src="https://img.freepik.com/free-vector/abstract-orange-triangle-logo_1043-120.jpg?t=st=1721133039~exp=1721136639~hmac=5b47cb88783070da8827f15abd2875efca6c853d2dcb26f4dc2567c4e8fe0deb&w=740"
          alt="firstcompany"
        />
        <img
          src="https://img.freepik.com/free-vector/creative-letter-colorful-icon-logo-design_474888-3287.jpg?t=st=1721133048~exp=1721136648~hmac=c6b3242a88a6fe2314cb6577cb4cc6a5be952054430287c48287eb58dd110904&w=740"
          alt="firstcompany"
        />
        <img
          src="https://img.freepik.com/premium-vector/abstract-interconnect-square-logo-design-template_76712-205.jpg?w=740"
          alt="firstcompany"
        />
        <img
          src="https://img.freepik.com/free-vector/abstract-orange-triangle-logo_1043-120.jpg?t=st=1721133039~exp=1721136639~hmac=5b47cb88783070da8827f15abd2875efca6c853d2dcb26f4dc2567c4e8fe0deb&w=740"
          alt="firstcompany"
        />
      </div>
      <div className="services px-20 py-28">
        <div className="flex items-center gap-10">
          <h1 className="Services bg-[#FFB603] text-3xl items-center flex px-6 py-1">
            Services
          </h1>

          <p className="w-1/2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            dignissimos cupiditate molestiae, autem error vero at ipsum,
            molestias ad ea veritatis placeat eius.
          </p>
        </div>

        <div className="banner grid grid-cols-2 gap-8 py-20 ">
          <div className="banner1 h-[40vh] w-[35vw] grid grid-cols-2 rounded-3xl border-b-8 items-center place-items-center border-black bg-zinc-300"></div>
          <div className="banner2  h-[40vh] w-[35vw] grid grid-cols-2 rounded-3xl border-b-8 border-black bg-zinc-900"></div>
          <div className="banner3 h-[40vh] w-[35vw] grid grid-cols-2 rounded-3xl border-b-8 border-black bg-zinc-900"></div>
          <div className="banner4 h-[40vh] w-[35vw] grid grid-cols-2 rounded-3xl border-b-8 border-black bg-zinc-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
