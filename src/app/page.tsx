"use client";
import { techStack } from "@/components/techStack";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeroMap from "@/components/HeroMap";
import ContactButton from "@/components/ContactButton";
import { motion } from "framer-motion";
import RenderProjects from "@/components/RenderProjects";

const Home = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col items-center gap-8">
      {/* HERO */}
      <div className="w-full flex md:flex-row flex-col justify-between gap-4 flex-1">
        <div className="w-full md:w-1/3 border border-border rounded-xl">
          <HeroMap />
        </div>
        <div className="w-full md:w-2/3 border border-border rounded-xl bg-background-offset">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="p-8 space-y-4 flex flex-col justify-between self-stretch h-full"
          >
            <motion.h5
              className="text-foreground text-xl md:text-2xl"
              variants={itemVariants}
            >
              Hey, I&apos;m Afi. Junior software engineer with a passion for{" "}
              <span className="relative group inline-block">
                <span className="z-30 relative">smooth experiences</span>
                <div className="absolute bottom-0 left-0 w-full h-[0.6em] group-hover:bg-secondary transition-all duration-500 scale-x-0 group-hover:scale-x-100 transform origin-left z-20" />
                <div className="absolute bottom-0 left-0 w-full h-[0.6em] bg-muted transition-all duration-500 scale-x-100 group-hover:scale-x-100 transform origin-left z-10" />
              </span>
              , work revolves around delivering exceptional user interactivity
              through{" "}
              <span className="relative group inline-block">
                <span className="z-30 relative">React</span>
                <div className="absolute bottom-0 left-0 w-full h-[0.6em] group-hover:bg-secondary transition-all duration-500 scale-x-0 group-hover:scale-x-100 transform origin-left z-20" />
                <div className="absolute bottom-0 left-0 w-full h-[0.6em] bg-muted transition-all duration-500 scale-x-100 group-hover:scale-x-100 transform origin-left z-10" />
              </span>{" "}
              frontend development.
            </motion.h5>
            <motion.div
              className="flex items-center justify-center w-full"
              variants={itemVariants}
            >
              <ContactButton />
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* EXPERIENCE */}
      <div className="space-y-4 w-full">
        <Tabs defaultValue="career" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="career" className="w-full">
              Career
            </TabsTrigger>
            <TabsTrigger value="education" className="w-full">
              Education
            </TabsTrigger>
          </TabsList>
          <TabsContent value="career">
            <div className="border border-border p-4 rounded-xl bg-background-offset">
              <div className="flex gap-4">
                <div className="border border-border rounded-full bg-background flex justify-center items-center w-16 h-16 p-2.5">
                  <Image
                    src={"/invoke_logo.webp"}
                    width={50}
                    height={50}
                    alt={"invoke logo"}
                    className="object-contain w-full h-full"
                    quality={75}
                  />
                </div>
                <div>
                  <h4 className="text-primary">INVOKE, Kuala Lumpur</h4>
                  <h5>Software Engineer</h5>
                  <p className="text-foreground-offset text-xs">
                    July 2023 - Present
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="education">
            <div className="border border-border p-4 rounded-xl space-y-2 bg-background-offset">
              <div className="flex gap-4">
                <div className="border border-border rounded-full bg-background flex justify-center items-center w-16 h-16 p-2.5">
                  <Image
                    src={"/um_logo.png"}
                    width={50}
                    height={50}
                    alt={"university logo"}
                    className="object-contain w-full h-full"
                    quality={75}
                  />
                </div>
                <div>
                  <h4 className="text-primary">University of Malaya</h4>
                  <h5>Bachelor of Mechanical Engineering</h5>
                  <p className="text-foreground-offset text-xs">
                    September 2018 - July 2022
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="border border-border rounded-full bg-background flex justify-center items-center w-16 h-16 p-2.5">
                  <Image
                    src={"/um_logo.png"}
                    width={50}
                    height={50}
                    alt={"university logo"}
                    className="object-contain w-full h-full"
                    quality={75}
                  />
                </div>
                <div>
                  <h4 className="text-primary">University of Malaya</h4>
                  <h5>Foundation in Physical Sciences</h5>
                  <p className="text-foreground-offset text-xs">
                    June 2017 - April 2018
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {/* TECH STACK */}
      <div className="space-y-4 w-full">
        <div className="space-y-4">
          <h2>Tech Stack</h2>
          <p className="text-foreground-offset">
            Build Loadout: <span className="underline">Some</span> of the tools
            in my dev arsenal (not all!)
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 justify-between h-[360px] md:h-fit overflow-y-scroll md:overflow-hidden">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-grow bg-background-offset gap-2 rounded-xl p-2.5 border border-ring hover:bg-muted duration-300"
            >
              <div className={`p-3 rounded-lg w-fit ${tech.bgColor}`}>
                {tech.icon}
              </div>
              <div className="flex flex-col justify-between">
                <h4>{tech.name}</h4>
                <p>{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* PROJECTS */}
      <div className="space-y-4 w-full">
        <div className="space-y-4">
          <h2>Projects</h2>
          <p className="text-foreground-offset">
            Work/Personal Code Campaigns: One line at a time
          </p>
        </div>
        <RenderProjects />
      </div>
    </div>
  );
};
export default Home;
