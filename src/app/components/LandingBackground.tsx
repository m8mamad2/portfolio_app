import "../globals.css";
import React from "react";
import { LandingButton } from "./Button";
import LandingProfileImage from "./LandingProfileImage";



export function GridBackgroundDemo() {
  return (
    <div className="h-[45rem] sm:h-[50rem] mb-56 sm:mb-0 w-full dark:bg-black bg-white  dark:bg-dot-white/[0.4] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-center px-10 sm:px-[25rem]">
        <div>
          <p  className="text-gray-600 mt-28">Developer</p>
          <h1 className="text-2xl sm:text-7xl font-bold mt-3 mb-10">I`am David C. Perez Mason</h1>
          <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus nobis voluptatem aperiam isicing elit. Illo doloribus nobis voluptatem aperiam, repellendus exercitationem amet, officiis unde sit aut porro explicabo dicta voluptatibus vitae eos sapiente distinctio officia earum.</p>
          <div className="">
            <LandingButton />
          </div> 
        </div>
        <LandingProfileImage />
      </div>

    </div>
  );
}   
