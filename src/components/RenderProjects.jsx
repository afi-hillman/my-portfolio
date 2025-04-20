import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/components/projects";

const RenderProjects = () => {
  return (
    <div className="flex flex-col gap-4">
      {projects.map((project, index) => {
        return (
          <Link key={index} href={`/projects/${project.url}`}>
            <div className="flex flex-col relative group overflow-hidden rounded-xl border border-border cursor-pointer">
              <div className="bg-background">
                <Image
                  src={project.image}
                  width={1920}
                  height={1080}
                  alt="project image"
                  className="bg-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 w-full absolute text-white bg-black/80 bottom-0  translate-y-14 group-hover:translate-y-0 transition-all duration-300">
                <div className="flex gap-2 items-center md:block">
                  <Image
                    width={48}
                    height={48}
                    src={project.logo}
                    className="w-12 h-12 p-1 rounded-md border border-border group-hover:w-10 group-hover:h-10 duration-300 bg-white"
                    alt="project logo"
                  />
                  <p>{project.title}</p>
                </div>
                <div className="flex gap-2 flex-wrap my-2 md:hidden">
                  {project?.tech?.slice(0, 2).map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex gap-2 items-center p-2 rounded-md border border-border"
                    >
                      {tech?.icon}
                      <p>{tech?.name}</p>
                    </div>
                  ))}
                  {project?.tech?.length - 2 > 0 && (
                    <div className="flex gap-2 items-center p-2 rounded-md border border-border">
                      +{project?.tech?.length - 2}
                    </div>
                  )}
                </div>
                <div className="hidden md:flex gap-2 flex-wrap my-2">
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
                <p className="hidden md:block group-hover:mb-2 transition-all duration-300">
                  {project.subtitle}
                </p>
                <div className="mt-4 group">
                  <button className="bg-primary text-text rounded-md flex items-center gap-2 px-2 py-1">
                    <p className="text-white">Learn more</p>
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
        );
      })}
    </div>
  );
};

export default RenderProjects;
