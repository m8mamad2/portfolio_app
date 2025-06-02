'use client'

import Image from "next/image";
import cIcon from '@/app/assets/icon1.png'
import { Button } from "@nextui-org/react";


export default function HireMe(){
    return <div className="flex flex-col justify-center items-center pt-16">
        <div className="border border-white/[0.2s] p-8 rounded-full"> 
        <Image className="brightness-0 invert" src={cIcon} alt='icon'/>
        </div>
        <h1 className="font-bold text-xl sm:text-5xl my-5 text-center">{"Tell me about your next \nproject"}</h1>
        <div className="flex flex-row gap-6">
            <Button 
                onClick={()=> window.location.href = `https://t.me/flut_ter`}
                className="px-10 py-8 rounded-full text-white" 
                variant="bordered">Telegram</Button>

            <Button 
                onClick={()=> window.location.href = "mailto:m8mamad2@gmail.com?subject=Project%20Hire&body=Hire%20Project"}
                className="px-10 py-8 rounded-full" 
                variant="solid">Email me</Button>
        </div>
    </div>
}