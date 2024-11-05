// 

'use client'

import React from "react";
import { IconFileBroken } from "@tabler/icons-react";
import { projects } from "../utils/data";
import { cn } from "../utils/cn";
import  Image, { StaticImageData }  from 'next/image'
import { useRouter } from "next/navigation";



const BentoGrid = ({ className,children, }: { className?: string; children?: React.ReactNode; }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoGridItem = ({
  className,
  title,
  description,
  images,
  index
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  images: StaticImageData[];
  index: number
}) => {
  const router = useRouter()
  
  return (
    
    <div
      key={index}
      onClick={()=> router.push(`/project/${index}`)}
      className={cn(
        "row-span-1 cursor-pointer rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="flex flex-row justify-center items-center gap-5 flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        {
          images!.map((e, index)=> <Image key={index} src={e} width={ index === 3 || index === 6 ? 80 : 40 } alt="image"/>)
        }
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <IconFileBroken />
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};




export function BentoGridDemo() {
  return (
    <div className="bg-black py-6">
        <h1 className="text-4xl font-bold sm:ml-[20rem] my-10">Projects</h1>
        <BentoGrid className="mx-auto">
          {projects.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              images={item.image}
              index={item.index}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            ))}
        </BentoGrid>
    </div>
  );
}

