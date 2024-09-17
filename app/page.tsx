"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { useState } from "react";
import { Draggable } from "gsap/Draggable";
import Donuts  from "@/components/Donuts";

gsap.registerPlugin(
  useGSAP,
  ScrollTrigger,
  ScrollToPlugin,
  TextPlugin,
  Draggable
);

export default function Home() {
  const [num, setNum] = useState(0);
  const projects = [
    {
      title: "던킨도너츠",
      period: "2023.10 ~ 2024.07",
      img: "/1.png",
      icon: "/donut.png",
      color: "#FFC0CB",
    },
    {
      title: "카카오 뉴스룸",
      period: "2023.07 ~ 2023.08",
      img: "/1.png",
      icon: "/icecream.png",
      color: "#FF6347",
    },
    {
      title: "BBQ 치킨대학",
      period: "2023.04 ~ 2023.05",
      img: "/1.png",
      icon: "/icecream.png",
      color: "#FFD700",
    },
    {
      title: "더에스엠씨그룹",
      period: "2023.06 ~ 2023.06",
      img: "/1.png",
      icon: "/icecream.png",
      color: "#FF69B4",
    },
    {
      title: "던킨허브",
      period: "2023.01 ~ 2023.02",
      img: "/1.png",
      icon: "/icecream.png",
      color: "#FF69B4",
    },
    {
      title: "배라매거진",
      period: "2023.03 ~ 2023.04",
      img: "/1.png",
      icon: "/icecream.png",
      color: "#FF69B4",
    },
    {
      title: "SK에코플랜트 뉴스룸",
      period: "2022.09 ~ 2022.10",
      img: "/1.png",
      icon: "/icecream.png",
      color: "#FF69B4",
    },
    {
      title: "고구마팜",
      period: "2022.11 ~ 2023.01",
      img: "/1.png",
      icon: "/icecream.png",
      color: "#FF69B4",
    },
    {
      title: "현대백화점 블로그",
      period: "2024.04 ~ 2024.04",
      img: "/1.png",
      icon: "/icecream.png",
      color: "#FF69B4",
    },
    {
      title: "MBNC 메타버즈네스트클럽",
      period: "2022.04 ~ 2022.05",
      img: "/1.png",
      icon: "/icecream.png",
      color: "#FF69B4",
    },
  ];
  const maintenance = [
    {
      title: "삼성반도체 뉴스룸",
      img: "/1.png",
      icon: "/donut.png",
      color: "#FFC0CB",
    },
    {
      title: "롯데월드 마이크로사이트",
      img: "/1.png",
      icon: "/donut.png",
      color: "#FFC0CB",
    },
    {
      title: "서울대 경영대 뉴스룸",
      img: "/1.png",
      icon: "/donut.png",
      color: "#FFC0CB",
    },
    {
      title: "배스킨라빈스",
      img: "/1.png",
      icon: "/donut.png",
      color: "#FFC0CB",
    },
    {
      title: "아이스크림 콘테스트",
      img: "/1.png",
      icon: "/donut.png",
      color: "#FFC0CB",
    },
    {
      title: "아이템티티",
      img: "/1.png",
      icon: "/donut.png",
      color: "#FFC0CB",
    },
  ];
  const size = projects.length - 1;
  const stepSize = 1 / size;
  useGSAP(() => {
    const horizontal = gsap.to(".item", {
      scrollTrigger: {
        trigger: ".item",
        scrub: 1,
        pin: ".bg",
        onUpdate: (self) => {
          setNum(Math.floor(self.progress / stepSize));
        },
      },
      ease: "none",
      x: `-${100 * size}%`,
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        containerAnimation: horizontal,
        trigger: ".donuts",
        scrub: 1,
        markers: true,
      },
    });
    tl.fromTo(
      ".title",
      { scale: 0.1, opacity: 0, y: "100%" },
      {
        scale: 1,
        opacity: 1,
        y: 0,
      },
      ">50%"
    ).to(".title", { scale: 0.1, opacity: 0, y: "-100%" }, ">90%");
    Draggable.create(".donut", {
      bounds: ".donuts",
    });

    gsap.fromTo(".donut", {opacity:0, y: "10%"}, {
      scrollTrigger: {
        trigger: ".donuts",
        start: "50%",
        containerAnimation: horizontal,
        scrub: 1,
        end: "center"
      },
      opacity: 1,
      stagger: 0.1,
    y: 0})
  });

  function handleClick(index : number) {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: (innerHeight / size) * index + 1 },
    });
  }

  return (
    <main
      className="text-[100px] bg transition-colors duration-500"
      style={{ backgroundColor: projects[num].color }}>
      <div className="relative">
        <div className="item h-screen">
          <Donuts project={projects[0]} index={0} />
        </div>
        <div className="w-max absolute bottom-5 left-1/2 text-[20px] flex -translate-x-1/2 rounded-full py-[.4vw] px-[2vw] bg-white/70 backdrop-blur-lg leading-none shadow">
          {projects.map((project, index) => {
            return (
              <div key={index}>
                <div
                  onClick={() => handleClick(index)}
                  className={`flex-none transition-colors duration-300 rounded-md italic text-[1vw] px-[1vw] py-[.6vw] ${
                    index === num ? "bg-gray-50/80" : ""
                  }`}>
                  <img src={project.icon} className="w-[1.5vw]" alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
