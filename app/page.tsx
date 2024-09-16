"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const [num, setNum] = useState(0);
  const [ss, setSs] = useState();
  const projects = [{
    title: "던킨도너츠",
    period: "24.01.20 - 24.08.11",
    img: '/1.png'
  }, {
    title: "배스킨라빈스",
    period: "24.01.20 - 24.08.11",
    img: '/1.png'
  },
  {
    title: "삼성전자",
    period: "24.01.20 - 24.08.11",
    img: '/1.png'
    },
    {
      title: "아이템티티",
      period: "24.01.20 - 24.08.11",
      img: '/1.png'
      },];
  const stepSize = 1 / (projects.length-1);
  useGSAP(() => {
    const a = gsap.fromTo('.item', {x: 0}, {
      scrollTrigger: {
        trigger: '.item',
        scrub: 2,
        pin: ".bg",
        markers: true,
        onUpdate: (self) => {
          setNum(Math.floor(self.progress / stepSize));
        }
      },
      ease: "none",
      x: `-${100*(projects.length-1)}%`
    });
    
    setSs(a);
  }, []); 


  function aa() {
    ss.progress(0.5)
  }

  return (
    <main className="text-[100px] bg">
      <div className="item flex h-screen w-full relative">
        {projects.map((project, index) => {
          return (
            <div key={index} id={project.title} className="flex-none overflow-hidden w-screen h-full box flex flex-col justify-center items-center bg-gradient-to-r from-[#C4366280] via-[#FE7C2660]">
              <h2 className="italic text-[#FE7C26]">{project.title}</h2>
              <h3>{num}</h3>
              <img src={project.img} className="w-1/2 block rounded-2xl overflow-hidden shadow" />
            </div>
          )
        }
        )}
        <div className="absolute bottom-2 left-1/2 text-[20px]">{projects.map((project, index) => {
          return (
            <div key={index}>
              <button onClick={aa} className="italic text-[20px]">{project.title}</button>
            </div>
          )
        })}</div>
      </div>
      <div className="flex h-full overflow-x-auto w-full">
        <div className="flex-none overflow-hidden w-screen h-full box flex justify-center items-center">
          <img src='/dunkin.png' className="w-1/2" />
        </div>
        <div className="flex-none overflow-hidden w-screen h-full box flex justify-center items-center">
          <img src='/dunkin.png' className="w-1/2" />
        </div>
        <div className="flex-none overflow-hidden w-screen h-full box flex justify-center items-center">
          <img src='/dunkin.png' className="w-1/2" />
        </div>
</div>
    </main>
  );
}
