"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useRef, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

export default function Home() {
  const [num, setNum] = useState(0);
  const projects = [
    {
      title: "던킨도너츠",
      period: "24.01.20 - 24.08.11",
      img: "/1.png",
      icon: "/donut.png",
    },
    {
      title: "배스킨라빈스",
      period: "24.01.20 - 24.08.11",
      img: "/1.png",
      icon: "/icecream.png",
    },
    {
      title: "삼성전자",
      period: "24.01.20 - 24.08.11",
      img: "/1.png",
      icon: "/icecream.png",
    },
    {
      title: "아이템티티",
      period: "24.01.20 - 24.08.11",
      img: "/1.png",
      icon: "/icecream.png",
    },
  ];
  const size = projects.length - 1;
  const stepSize = 1 / size;
  useGSAP(() => {
    gsap.fromTo(
      ".item",
      { x: 0 },
      {
        scrollTrigger: {
          trigger: ".item",
          scrub: 1,
          pin: ".bg",
          markers: true,
          onUpdate: (self) => {
            setNum(Math.floor(self.progress / stepSize));
          },
        },
        ease: "none",
        x: `-${100 * size}%`,
      }
    );
  });

  function handleClick(index) {
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: (innerHeight / size) * index + 1 },
      ease: "power2",
    });
  }
  return (
    <main className="text-[100px] bg bg-red-50">
      <div className="relative">
        <div className="item flex h-screen">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                id={project.title}
                className={`${project.title} flex-none overflow-hidden w-screen h-full box flex flex-col justify-center items-center`}>
                <Dialog>
                  <DialogTrigger className="w-1/2">
                    <div className="">
                      <h2 className="font-black italic text-[4vw] text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-50">
                        {project.title}
                      </h2>
                      <img
                        src={project.img}
                        className="w-full block rounded-2xl overflow-hidden shadow"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            );
          })}
        </div>
        <div className="absolute bottom-5 left-1/2 text-[20px] flex -translate-x-1/2 rounded-full py-[.3vw] px-[2.5vw] bg-white leading-none shadow">
          {projects.map((project, index) => {
            return (
              <div key={index}>
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger
                      onClick={() => handleClick(index)}
                      className={`transition-colors duration-300 rounded-md italic text-[1.5vw] px-[1vw] py-[.6vw] ${
                        index === num ? "bg-gray-200" : ""
                      }`}>
                      <img src={project.icon} className="w-[2vw] " />
                    </TooltipTrigger>
                    <TooltipContent className="bg-white text-[1vw] italic">
                      <p className="invert">{project.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
