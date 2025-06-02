
'use client'
import { useEffect, useState } from 'react';
import profile from '@/app/assets/profile.json';
import type { LottieComponentProps } from 'lottie-react'; // Import the type
import type { FC } from 'react';

export default function LandingProfileImage() {
  // Properly type the state as either null or a component
  const [LottieComponent, setLottieComponent] = 
    useState<FC<LottieComponentProps> | null>(null);

  useEffect(() => {
    // Import Lottie only on the client side
    import("lottie-react").then((module) => {
      setLottieComponent(() => module.default);
    });
  }, []);

  if (!LottieComponent) {
    // Return a placeholder while Lottie is loading
    return <div className="flex justify-center items-center">Loading animation...</div>;
  }

  return (
    <LottieComponent
      animationData={profile}
      className="flex justify-center items-center"
      loop={true}
    />
  );
}