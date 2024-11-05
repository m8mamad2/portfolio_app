
'use client'

import { BackgroundGradientDemo } from "./components/Titile";
import { Description, WobbleCard } from "./components/Description";
import { IconStarFilled, IconDownload } from '@tabler/icons-react'
import { projects } from "@/app/utils/data";
import Image from "next/image";

export default function ProjectScreen( { params }: { params: { id: string } }){

    const data = projects.find(e=> e.index === Number(params.id) )
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3  sm:h-[93.9vh] py-10 px-14">
            
            <div className="col-span-1 relative mx-auto border-zinc-700 dark:border-zinc-700  border-[14px] rounded-[2.5rem] bg-zinc-700 sm:h-[85vh] sm:w-[28rem]">
                
                <div className="h-[32px] w-[3px] bg-zinc-700 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-zinc-700 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-zinc-700 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-zinc-700 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-hidden  sm:h-[82vh] sm:w-[26.5rem] bg-white dark:bg-zinc-700">
                    <Image src={data!.imageWithoutMockup}  className="object-cover " alt=""/>
                </div>

            </div>

            
            
            <div className="col-span-1 sm:col-span-2 sm:h-[85vh] sm:grid sm:grid-rows-6 w-full">
                
                <div className="sm:row-span-2">
                    <BackgroundGradientDemo title={data!.title} githubUrl={data!.githubUrl}/> 
                </div>
                
                <div className="sm:row-span-3">
                    <div className="h-full mb-10">
                        <Description description={data!.description}  descriptionTitle={data!.descriptionTitle}/>
                    </div>
                </div>

                <div className="row-span-1 gap-5 flex flex-row mt-4 ">

                    <a className="relative cursor-pointer border border-white/[0.3] hover:scale-110 hover w-72 gap-4 justify-center rounded-2xl flex flex-col sm:flex-row items-center">
                        <a href={data!.githubUrl}>Give Github Star </a>
                        <IconStarFilled className="text-amber-500"/>
                    </a>
                    
                        <WobbleCard 
                            onClick={
                                data!.hasDownloadApk 
                                    ?()=>{
                                        const link = document.createElement('a');
                                        link.href = data!.apkUrl!;
                                        link.click();
                                    }
                                    :()=>{}
                        }
                            className="col-span-1 cursor-pointer flex flex-col sm:flex-row justify-between items-center w-full">
                            {
                                data!.hasDownloadApk
                                    ? (<>
                                        <h1 className="text-bold text-center mb-1">Downlaod APK</h1>
                                        <IconDownload />
                                    </>)
                                    : (<>
                                        <h1 className="text-bold text-center">Apk File is Not Available, see Repository</h1>
                                    </>)
                                
                            }
                        </WobbleCard>
                    
                </div>

            </div>

        </div>
    )
}

