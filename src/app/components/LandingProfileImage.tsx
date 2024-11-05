'use client'

import profile from '@/app/assets/profile.json'
import Lottie from "lottie-react";

export default function LandingProfileImage() {
    return (
        <>
        <Lottie
          animationData={profile}
          className="flex justify-center items-center"
          loop={true}
        />
        </>
    )
}