"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    title: "Earth Points",
    category: "frontend",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis culpa odio blanditiis eligendi soluta modi atque eum corporis itaque unde!",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Js" }],
    image: "/assets/work/project1.png",
    live: "https://earthpoints.vercel.app/",
    github: "https://github.com/No-Country/s11-20-m-typescript-react.git",
  },
  {
    num: "02",
    title: "Pet Care",
    category: "frontend",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis culpa odio blanditiis eligendi soluta modi atque eum corporis itaque unde!",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Js" }],
    image: "/assets/work/project2.png",
    live: "https://petcare-pied.vercel.app/",
    github: "https://github.com/mjParedes/proyFinal-JS-Coder-MJP.git",
  },
  {
    num: "03",
    title: "Planet Book",
    category: "frontend",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis culpa odio blanditiis eligendi soluta modi atque eum corporis itaque unde!",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Js" }],
    image: "/assets/work/project3.png",
    live: "https://planetbook-app.vercel.app/",
    github: "https://github.com/mjParedes/proyReactJs-Coder-PlanetBook-MJP.git",
  },
  {
    num: "04",
    title: "Skill Swap",
    category: "frontend",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis culpa odio blanditiis eligendi soluta modi atque eum corporis itaque unde!",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Js" }],
    image: "/assets/work/project4.png",
    live: "https://s9-13-m-express-react.vercel.app/",
    github: "https://github.com/mjParedes/s9-13-skill-swap.git",
  },
  {
    num: "05",
    title: "Sol y Luna - Restaurant",
    category: "frontend",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis culpa odio blanditiis eligendi soluta modi atque eum corporis itaque unde!",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Js" }],
    image: "/assets/work/project5.png",
    live: "https://www.solylunasancristobal.com/",
    github: "https://github.com/mjParedes/SOL_Y_LUNA_RESTAURANT.git",
  },
  {
    num: "06",
    title: "Travellers",
    category: "frontend",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis culpa odio blanditiis eligendi soluta modi atque eum corporis itaque unde!",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Js" }],
    image: "/assets/work/project6.png",
    live: "https://travellers-proyecto-desarrollo-web-matudev.vercel.app/",
    github:
      "https://github.com/mjParedes/travellersProyectoFinalParedesMatias.git",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline ">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons  */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover-bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
