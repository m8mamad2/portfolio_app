import {
  IconCurrencyDollar,
  IconHeart,
  IconSkateboarding,
  IconTerminal2,
  IconBrandReact,
  IconUsersGroup,
  IconBrandFlutter,
  IconApps
} from "@tabler/icons-react";
import { cn } from "../utils/cn";




export function Skills() {
  const features = [
    {
      title: "Flutter Development",
      description:
        "As a Flutter developer, I design and build high-performing, visually stunning mobile applications for both Android and iOS platforms.",
      icon: <IconBrandFlutter />,
    },
    {
      title: "NestJS Backend Development",
      description:
        "I create efficient, scalable, and modular backend systems using NestJS and Typescript.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "React Frontend Development",
      description:"My experience with React enables me to create dynamic, responsive, and interactive user interfaces",
      icon: <IconBrandReact />,
    },
    {
      title: "Application Deployment",
      description: "With extensive experience working in Linux environments, I manage and deploy applications seamlessly across various distributions",
      icon: <IconTerminal2 />,
    },
    {
      title: "Teamwork",
      description: "I thrive in team environments, bringing strong communication skills, a collaborative mindset, and a commitment to shared goals.",
      icon: <IconUsersGroup />,
    },
    {
      title: "Performance Optimization",
      description:"I am dedicated to performance optimization, whether it’s reducing page load times, optimizing mobile applications, or ensuring backend services handle high traffic efficiently",
      icon: <IconApps />,
    },
    {
      title: "Continuous Learning ",
      description:"I am constantly driven to learn and explore new technologies",
      icon: <IconSkateboarding />,
    },
    {
      title: "Software Support",
      description: "Beyond development, I provide reliable software support, ensuring that applications run smoothly post-launch.",
      icon: <IconHeart />,
    },
  ];
  return (
    <>
        <h1 className="text-4xl font-bold  sm:ml-[20rem] sm:my-10  my-18">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
        ))}
        </div>
    </>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
