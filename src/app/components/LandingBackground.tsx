import "../globals.css";
import React from "react";
import { LandingButton } from "./Button";
import dynamic from "next/dynamic";
// import LandingProfileImage from "./LandingProfileImage";
// import LandingProfileImage from '@/app/components/LandingProfileImage';
const LandingProfileImage = dynamic(
  () => import('@/app/components/LandingProfileImage'),
  { ssr: false }
);

export function GridBackgroundDemo() {
  return (
    <div className="h-[45rem] sm:h-[50rem] mb-56 md:mb-0 w-full dark:bg-black bg-white  dark:bg-dot-white/[0.4] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="grid grid-cols-1 mt-20 lg:mt-0 md:grid-cols-2 gap-6 justify-center items-center  sm:mt-0 lg:px-20 md:px-5 xl:px-72 px-10 2xl:px-[22rem]">
        <div>
          <p className="text-gray-600 mt-28">Developer</p>
          <h1 className="text-2xl md:text-6xl font-bold mt-3 mb-10">
            I`am Mohammad Mahdi Mirali
          </h1>
          <p className="text-gray-400 md:text-base text-sm">
            I’m a dedicated Flutter developer with 2 years of professional
            experience crafting intuitive and high-performance mobile
            applications. My journey in tech has also led me to explore the
            dynamic world of web development, where I’ve gained valuable
            experience with NestJS, Node.js, React, and Next.js. I am passionate
            about leveraging my skills in both corporate and freelance projects.
            I thrive on learning new technologies and continuously expanding my
            expertise to stay ahead in this ever-evolving field.
          </p>
          <div className="">
            <LandingButton style="" />
          </div>
        </div>
        <LandingProfileImage />
      </div>
    </div>
  );
}
