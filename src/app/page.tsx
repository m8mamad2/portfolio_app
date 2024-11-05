
import  Footer  from "./components/Footer"
import { GridBackgroundDemo } from "./components/LandingBackground";
import { Skills } from "./components/Skills";
import { BentoGridDemo } from "./components/ProjectGrid";
import HireMe from "./components/HireMe";

export default function Home() {
  return (
    <>
      <GridBackgroundDemo />
      <Skills />
      <BentoGridDemo />
      <HireMe />
      <Footer />
    </>
  );
}
