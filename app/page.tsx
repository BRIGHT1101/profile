"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const container = useRef(null);
  useGSAP(() => {
    gsap.from('.box', {
      scrollTrigger: {
        trigger: '.box',
        scrub: 2,
        start: "top bottom",
        end: "top 10%",
        markers: true,
        snap: {snapTo: "labels", duration: 0.3, delay: 0.1, ease: "power1.inOut"}
      },
      opacity: 0,
      filter: "blur(20px)",
      scale: 0.9,
      borderRadius: "100px",
  });
  
  }, { scope: container }); 

  return (
    <main className="text-[100px]" ref={container}>
      <div className="overflow-hidden h-screen ">
      </div>
      <div className="overflow-hidden h-screen box blur-[2px]">
        <img src='/dunkin.png' className="w-full" />
      </div>
    </main>
  );
}
