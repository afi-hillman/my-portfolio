"use client";
import { techStack } from "@/components/techStack";
import { projects } from "@/components/projects";
import Image from "next/image";
// import ContactButton from "@/components/ContactButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import HeroMap from "@/components/HeroMap";
import ContactButton from "@/components/ContactButton";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      {/* HERO */}
      <div className="w-full flex justify-between items-center gap-4">
        <div className="w-1/2 border border-border rounded-xl">
          <HeroMap />
        </div>
        <div className="w-1/2 p-8 space-y-4 border border-border rounded-xl flex flex-col justify-between self-stretch">
          {/* <h5 className="text-foreground text-xl md:text-2xl">
            Fullstack development is the name of the game, and clean code is how
            I play. <br /> I approach every project like a well-planned strategy
            —efficient, scalable, and built to win.
          </h5> */}
          <h5 className="text-foreground text-xl md:text-2xl">
            Hey, you can call me Afi. Software Engineer with almost 2 years of
            experience, current work revolves around React frontend development.
          </h5>
          <div className="flex items-center justify-center w-full">
            <ContactButton />
          </div>
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
            <div className="border border-border p-4 rounded-xl">
              <div className="flex gap-4">
                <div className="border border-border rounded-full flex justify-center items-center w-16 h-16 p-2.5">
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
                  <h4 className="text-primary">INVOKE Solutions Sdn. Bhd.</h4>
                  <h5>Software Engineer</h5>
                  <p className="text-foreground-offset text-xs">
                    July 2023 - Present
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="education">
            <div className="border border-border p-4 rounded-xl space-y-2">
              <div className="flex gap-4">
                <div className="border border-border rounded-full flex justify-center items-center w-16 h-16 p-2.5">
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
                <div className="border border-border rounded-full flex justify-center items-center w-16 h-16 p-2.5">
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
            Build Loadout: Some of the tools in my dev arsenal
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 justify-between h-[360px] md:h-fit overflow-y-scroll md:overflow-hidden">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-grow gap-2 rounded-xl p-2.5 border border-ring hover:bg-muted duration-300"
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
        <div className="flex flex-col gap-4">
          {projects.map((project, index) => (
            <Link key={index} href={`/projects/${project.url}`}>
              <div className="flex flex-col relative group overflow-hidden rounded-xl border border-border cursor-pointer">
                <div>
                  <Image
                    src={project.image}
                    width={1920}
                    height={1080}
                    alt="project image"
                    className="bg-cover rounded-xl opacity-75 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 w-full absolute text-white bg-black/80 bottom-0  translate-y-14 group-hover:translate-y-0 transition-all duration-300">
                  <div>
                    <Image
                      width={48}
                      height={48}
                      src={project.logo}
                      className="w-12 h-12 p-1 rounded-md border border-border group-hover:w-10 group-hover:h-10 duration-300 bg-white"
                      alt="project logo"
                    />
                    <p>{project.title}</p>
                  </div>
                  <div className="flex gap-2 flex-wrap my-2">
                    {project?.tech?.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex gap-2 items-center p-2 rounded-md border border-border"
                      >
                        {tech?.icon}
                        <p>{tech?.name}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mb-4 group-hover:mb-2 transition-all duration-300">
                    {project.subtitle}
                  </p>
                  <div className="group">
                    <button className="bg-white text-black rounded-md flex items-center gap-2 px-2 py-1">
                      <p>Learn more</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path
                            strokeDasharray="20"
                            strokeDashoffset="20"
                            d="M3 12h17.5"
                          >
                            <animate
                              fill="freeze"
                              attributeName="stroke-dashoffset"
                              dur="0.2s"
                              values="20;0"
                            />
                          </path>
                          <path
                            strokeDasharray="12"
                            strokeDashoffset="12"
                            d="M21 12l-7 7M21 12l-7 -7"
                          >
                            <animate
                              fill="freeze"
                              attributeName="stroke-dashoffset"
                              begin="0.2s"
                              dur="0.2s"
                              values="12;0"
                            />
                          </path>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
