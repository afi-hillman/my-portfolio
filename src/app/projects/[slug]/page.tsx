"use client";
import React from "react";
import { projects } from "@/components/projects";
import { useParams } from "next/navigation";
import Image from "next/image";

const ProjectDetails = () => {
  const params = useParams();
  const projectData = projects.find((proj) => proj.id === Number(params.slug));

  console.log(projectData);
  return (
    <div className="flex flex-col gap-10">
      {/* <h2>Project</h2> */}
      <div className="rounded-xl border border-grayline p-5">
        <h3>{projectData?.title}</h3>
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
        className="w-full rounded-xl"
      />
    </div>
  );
};

export default ProjectDetails;
