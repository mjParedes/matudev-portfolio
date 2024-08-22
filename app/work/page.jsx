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

const projects = [
  {
    num: "01",
    title: "Earth Points",
    category: "frontend",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis culpa odio blanditiis eligendi soluta modi atque eum corporis itaque unde!",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Js" }],
    image: "/assets/work/project1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    title: "Pet Care",
    category: "frontend",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis culpa odio blanditiis eligendi soluta modi atque eum corporis itaque unde!",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Js" }],
    image: "/assets/work/project2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    title: "Planet Book",
    category: "frontend",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis culpa odio blanditiis eligendi soluta modi atque eum corporis itaque unde!",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Js" }],
    image: "/assets/work/project3.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    title: "Skill Swap",
    category: "frontend",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis culpa odio blanditiis eligendi soluta modi atque eum corporis itaque unde!",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Js" }],
    image: "/assets/work/project4.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    title: "Sol y Luna - Restaurant",
    category: "frontend",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis culpa odio blanditiis eligendi soluta modi atque eum corporis itaque unde!",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Js" }],
    image: "/assets/work/project5.png",
    live: "",
    github: "",
  },
  {
    num: "06",
    title: "Travellers",
    category: "frontend",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis culpa odio blanditiis eligendi soluta modi atque eum corporis itaque unde!",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Js" }],
    image: "/assets/work/project6.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  return <div>Work page</div>;
};

export default Work;
