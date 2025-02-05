import { techStack } from "@/components/techStack";
import { projects } from "@/components/projects";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex gap-2">
        <div>image</div>
        <div>
          <p>Afi Hillman</p>
          <p>Based in Malaysia</p>
        </div>
      </div>
      <div>
        <h1>SOFTWARE</h1>
        <div className="flex items-center gap-2">
          <h1 className="text-center">ENGINEER</h1>
          <div className="rounded-full border-ring border py-4 px-3 h-[60px] flex gap-2 items-center hover:bg-primary hover:text-primary-foreground duration-300 cursor-pointer">
            <div className="relative rounded-full bg-green-500 w-4 h-4">
              <div className="rounded-full absolute bg-green-500 animate-ping w-4 h-4"></div>
            </div>
            <p>Let&apos;s Connect!</p>
          </div>
        </div>
      </div>
      <div className="space-y-10 w-full">
        <div className="space-y-4">
          <h1>My Tech Stack</h1>
          <p>list of shiz</p>
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
      <div className="space-y-10 w-full">
        <div className="space-y-4">
          <h1>My Projects</h1>
          <p>list of shiz</p>
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
                  className="w-12 h-12 rounded-md border border-ring group-hover:w-10 group-hover:h-10 duration-300"
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
