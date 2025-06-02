

import { BackgroundGradientDemo } from "./components/Titile";
import { Description,  } from "./components/Description";
import { IconStarFilled,  } from '@tabler/icons-react'
import { projects } from "@/app/utils/data";
import Image from "next/image";
import WobbleCardComponent from "./components/WoblleCard";

export async function generateStaticParams() {
    const params = projects.map((project) => ({
      id: project.index.toString(),
    }));
    return params;
  }

export default function ProjectScreen( { params }: { params: { id: string } }){

    const data = projects.find(e=> e.index === Number(params.id) )
    
    return (
        <div className="grid grid-cols-1 overflow-hidden sm:grid-cols-4 sm:h-[90vh] py-10 px-10 ">
            
            <div className="col-span-1 relative mx-auto border-zinc-700 dark:border-zinc-700  border-[14px] rounded-[2.5rem]  md:h-[85vh]"> 
                <div className="h-[32px] w-[3px] bg-zinc-700 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-zinc-700 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-zinc-700 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-zinc-700 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-hidden  w-full h-full bg-white dark:bg-zinc-700">
                    <Image src={data!.imageWithoutMockup}  className=" bg-contain bg-center h-full w-full" alt=""/>
                </div>
            </div>
            
            <div className="col-span-1 sm:col-span-3 gap-4 sm:ml-20 sm:h-[85vh] sm:grid sm:grid-rows-6 sm:mt-0 mt-5 ">
                
                <div className="sm:row-span-2 ">
                    <BackgroundGradientDemo title={data!.title} githubUrl={data!.githubUrl}/> 
                </div>
                
                <div className="sm:row-span-3">
                    <div className="h-full mb-10 ">
                        <Description description={data!.description}  descriptionTitle={data!.descriptionTitle}/>
                    </div>
                </div>

                <div className="row-span-1 gap-5 flex flex-row ">

                    <a className="relative cursor-pointer border border-white/[0.3] hover:scale-110 hover w-72 gap-4 justify-center rounded-2xl flex flex-col sm:flex-row items-center">
                        <a href={data!.githubUrl}>Give Github Star </a>
                        <IconStarFilled className="text-amber-500"/>
                    </a>
                    
                    <WobbleCardComponent data={data}/>
                    
                </div>

            </div>

        </div>
    )
}

