import React, { useState } from "react";
import { WORK_EXPERIENCES } from "../data/constants";

const WorkExperience = () => {
  const [showDescriptions, setShowDescriptions] = useState(
    Array(WORK_EXPERIENCES.length).fill(false)
  );

  return (
    <div className="flex flex-col">
      <div className="text-sm text-gray-500">Work Experience:</div>
      <div className="flex flex-col gap-2">
        {WORK_EXPERIENCES.map((experience, index) => (
          <div
            className="p-4 rounded-md border-[1px] hover:shadow-md hover:cursor-default text-gray-500 text-sm"
            key={experience.description}
          >
            <div className="grid grid-cols-12 gap-5 justify-between items-start">
              <div className="col-span-12 md:col-span-4">
                <span className="flex flex-col gap-2">
                  <div>{experience.date}</div>
                  <div className="text-xs lg:text-sm">
                    {experience.location}
                  </div>
                </span>
              </div>
              <div className="col-span-12 md:col-span-8">
                <div className="flex flex-col gap-2">
                  <span className="font-semibold">
                    <span className="italic">{experience.position}</span>{" "}
                    <span className="font-normal">at</span>
                    <span> {experience.company}</span>
                  </span>
                  <span className="text-xs lg:text-sm text-gray-400">
                    <div className="lg:hidden">
                      {showDescriptions[index] ? (
                        <>
                          {experience.description}
                          <p
                            className="text-blue-400 underline italic hover:cursor-pointer"
                            onClick={() =>
                              setShowDescriptions((prev) => {
                                const newShowDescriptions = [...prev];
                                newShowDescriptions[index] = false;
                                return newShowDescriptions;
                              })
                            }
                          >
                            hide
                          </p>
                        </>
                      ) : (
                        <>
                          {experience.description
                            .split(" ")
                            .slice(0, 30)
                            .join(" ")}
                          ...
                          <span
                            className="text-blue-400 underline italic hover:cursor-pointer pl-1"
                            onClick={() => {
                              setShowDescriptions((prev) => {
                                const newShowDescriptions = [...prev];
                                newShowDescriptions[index] = true;
                                return newShowDescriptions;
                              });
                            }}
                          >
                            more
                          </span>
                        </>
                      )}
                    </div>
                    <div className="hidden lg:block">
                      {experience.description}
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
