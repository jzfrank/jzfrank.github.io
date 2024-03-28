import React from "react";
import { PROJECTS } from "../data/constants";

const Projects = () => {
  return (
    <div className="flex flex-col">
      <div className="text-sm text-gray-500">Selection of Projects:</div>
      <div className="grid grid-cols-12 gap-y-4 gap-x-3">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 p-2 px-4 border-[1px] rounded-md h-full hover:shadow-lg hover:cursor-default"
          >
            <div className="flex flex-col items-start justify-between gap-4 h-full">
              <div>
                <div className="flex flex-col gap-3 justify-center">
                  <div className="col-span-12">
                    <img
                      src={project.logo}
                      alt="logo"
                      className="h-12 lg:h-16 rounded-lg shadow-sm"
                    />
                  </div>
                  <div className="col-span-12 text-sm font-mono font-semibold">
                    {project.title}
                  </div>
                </div>
                <div className="text-xs font-mono">{project.description}</div>
              </div>
              <div className="flex flex-row gap-2 text-xs">
                <span>view:</span>
                {project.deployedLink && project.deployedLink.length > 0 && (
                  <a
                    className=" text-blue-400 underline"
                    href={project.deployedLink}
                  >
                    deployed app
                  </a>
                )}
                {project.sourceCodeLink &&
                  project.sourceCodeLink.length > 0 && (
                    <a
                      className=" text-blue-400 underline"
                      href={project.sourceCodeLink}
                    >
                      source code
                    </a>
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
