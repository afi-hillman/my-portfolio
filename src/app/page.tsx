import { techStack } from "@/components/techStack";
import { projects } from "@/components/projects";
import Image from "next/image";
import ContactButton from "@/components/ContactButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      {/* <div className="flex gap-2 items-end">
        <Image
          src={"/gojo_pfp.jpg"}
          width={1920}
          height={1080}
          alt="my picture"
          className="bg-cover w-20 h-20 rounded-full border border-ring"
        />
        <div>
          <p>What&apos;s up, you can call me Afi</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
          >
            <path
              fill="#dd2e44"
              d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"
            />
            <path
              fill="#eee"
              d="M.555 29h34.891A3.97 3.97 0 0 0 36 27H0c0 .732.211 1.409.555 2M0 23h36v2H0zm0-4h36v2H0zm0-4h36v2H0zm0-4h36v2H0zm.555-4A3.96 3.96 0 0 0 0 9h36c0-.732-.211-1.41-.555-2z"
            />
            <path fill="#010066" d="M18 5H4a4 4 0 0 0-4 4v10h18z" />
            <path
              fill="#ffcc4d"
              d="M9.534 17.233a5.234 5.234 0 0 1-.001-10.466c.715 0 1.397.146 2.018.405A5.96 5.96 0 0 0 8 6a6 6 0 0 0 0 12a5.96 5.96 0 0 0 3.551-1.172a5.2 5.2 0 0 1-2.017.405"
            />
            <path
              fill="#ffcc4d"
              d="m12.922 8.829l.334 1.62l1.003-1.315l-.402 1.604l1.475-.749l-1.059 1.271l1.654-.035l-1.505.686l1.505.686l-1.654-.035l1.059 1.271l-1.475-.749l.402 1.605l-1.003-1.316l-.334 1.621l-.334-1.621l-1.003 1.316l.402-1.605l-1.475.749l1.058-1.271l-1.653.035l1.505-.686l-1.505-.686l1.653.035l-1.058-1.271l1.475.749l-.402-1.604l1.003 1.315z"
            />
          </svg>
        </div>
      </div> */}
      {/* ABOUT */}
      <div className="w-fit self-start">
        <div className="flex items-end gap-2 relative">
          <h4 className="text-primary">
            What&apos;s good, you can call me Afi
          </h4>
          <div className="absolute -bottom-[70%] right-[35%] ">
            <ContactButton />
          </div>
        </div>
        <p className="text-[72px]">I&apos;m a software engineer</p>
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
            <div className="border border-ring p-4 rounded-xl">
              <div className="flex gap-4">
                <div className="border border-ring rounded-full flex justify-center items-center w-12 h-12">
                  {/* <Image
                    src={"/um_logo.png"}
                    width={48}
                    height={48}
                    alt={"university logo"}
                    className="w-12 h-12"
                  /> */}
                </div>
                <div>
                  <h4 className="text-primary">INVOKE Solutions Sdn. Bhd.</h4>
                  <h5>Software Engineer</h5>
                  <p className="text-gray text-xs">July 2023 - Present</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="education">
            <div className="border border-ring p-4 rounded-xl space-y-2">
              <div className="flex gap-4">
                <div className="border border-ring rounded-full flex justify-center items-center w-12 h-12">
                  {/* <Image
                    src={"/um_logo.png"}
                    width={48}
                    height={48}
                    alt={"university logo"}
                    className="w-12 h-12"
                  /> */}
                </div>
                <div>
                  <h4 className="text-primary">University of Malaya</h4>
                  <h5>Bachelor of Mechanical Engineering</h5>
                  <p className="text-gray text-xs">
                    September 2018 - July 2022
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="border border-ring rounded-full flex justify-center items-center w-12 h-12">
                  {/* <Image
                    src={"/um_logo.png"}
                    width={48}
                    height={48}
                    alt={"university logo"}
                    className="w-12 h-12"
                  /> */}
                </div>
                <div>
                  <h4 className="text-primary">University of Malaya</h4>
                  <h5>Foundation in Physical Sciences</h5>
                  <p className="text-gray text-xs">June 2017 - April 2018</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {/* TECH STACK */}
      <div className="space-y-4 w-full">
        <div className="space-y-4">
          <h2>My Tech Stack</h2>
          <p>Build Loadout: Some of the tools in my dev arsenal</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-between">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-grow gap-2 rounded-xl p-2.5 border border-ring hover:bg-muted duration-300 dark:bg-red-500"
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
          <h2>My Projects</h2>
          <p>My Code Campaigns: One line at a time</p>
        </div>
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col relative group overflow-hidden rounded-xl border border-ring cursor-pointer"
          >
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
                  className="w-12 h-12 rounded-md border border-ring group-hover:w-10 group-hover:h-10 duration-300 bg-white"
                  alt="project logo"
                />
                <p>{project.title}</p>
              </div>
              <div className="flex gap-2 flex-wrap my-2">
                {project?.tech?.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex gap-2 items-center p-2 rounded-md border border-ring"
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
        ))}
      </div>
    </div>
  );
};
export default Home;
