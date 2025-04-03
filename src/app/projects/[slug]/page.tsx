"use client";
import React from "react";
import { projects } from "@/components/projects";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const ProjectDetails = () => {
  const params = useParams();
  const projectData = projects.find((proj) => proj.url === params.slug);

  return (
    <div className="flex flex-col gap-10">
      {/* <h2>Project</h2> */}
      <div className="rounded-xl border border-grayline p-5">
        <div className="flex justify-between w-full">
          <h3>{projectData?.title}</h3>
          {projectData?.link && (
            <Link
              href={projectData?.link}
              target="_blank"
              className="flex items-center gap-2 group"
            >
              <p className="group-hover:text-primary">Take me there!</p>
              <div className="rounded-full flex items-center justify-center border p-1 text-primary transition-all duration-300 ease-in-out overflow-hidden relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="transition-all duration-300 ease-in-out group-hover:-rotate-45"
                >
                  <path
                    fill="currentColor"
                    d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"
                  />
                </svg>
              </div>
            </Link>
          )}
        </div>
        <div className="flex gap-2 flex-wrap my-2">
          {projectData?.tech?.map((tech, techIndex) => (
            <div
              key={techIndex}
              className="flex gap-2 items-center p-2 rounded-md border border-grayline"
            >
              {tech?.icon}
              <p>{tech?.name}</p>
            </div>
          ))}
        </div>
        <p>{projectData?.subtitle}</p>
      </div>
      <div>{projectData?.description}</div>
      <Image
        src={projectData?.gif || ""}
        alt="gif of project"
        height={1920}
        width={1080}
        className="w-full h-full rounded-xl"
        quality={75}
        priority
      />
      {projectData?.description2 && <div>{projectData?.description2}</div>}
      {projectData?.gif2 && (
        <Image
          src={projectData?.gif2 || ""}
          alt="gif of project"
          height={1920}
          width={1080}
          className="w-full h-full rounded-xl"
          quality={75}
          priority
        />
      )}
    </div>
  );
};

export default ProjectDetails;
