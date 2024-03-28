import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Introduction = () => {
  return (
    <div className="py-5 px-10 grid grid-cols-12 gap-4 bg-slate-50">
      <div className="hidden lg:block lg:col-span-4"></div>
      <div className="col-span-12 lg:col-span-8">
        <div className="flex justify-center lg:pb-4">
          <span className="text-lg lg:text-3xl">
            <span className="font-mono font-semibold text-gray-500">
              👋Hi there, I'm{" "}
            </span>
            <span className="font-mono font-bold underline">Jin</span>
          </span>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-4 w-full p-2 h-full flex justify-center items-center">
        <img
          src="/images/me.png"
          className="rounded-full w-36 md:w-64 lg:w-72 shadow-lg"
        />
      </div>
      <div className="col-span-12 lg:col-span-8 font-sans px-2 sm:px-4 h-full md:px-16 lg:px-0 flex flex-col gap-3">
        <div className="flex lg:justify-center lg:pb-5 justify-start">
          <span className="text-sm lg:text-xl font-bold">
            <span className="font-semibold text-gray-500">I'm a</span>💻
            full-stack developer,{" "}
            <span className="font-semibold text-gray-500">and a</span>⛰️ hiking
            addict
          </span>
        </div>
        <div className="text-xs lg:text-lg text-gray-500 flex flex-col gap-1">
          <p>
            I am a fullstack web developer with a focus on the frontend. My
            expertise lies in building web applications using various frameworks
            and technologies.
          </p>
          <p>
            My tech stack:{" "}
            <span className="italic font-semibold">
              React, Node.JS, NextJS, Spring Boot, Python, TailwindCSS, MySQL,
              MongoDB, Docker, MySQL, C++
            </span>
            , and more.
          </p>
          <p>
            I am a core contributor to{" "}
            <a
              href="https://www.tremor.so/"
              className="underline text-blue-500 font-semibold"
            >
              @tremor/react
            </a>
            , a React component library for building dashboards. It has received
            14k stars.
          </p>
          <p>
            As a graduate from ETH Zurich and UZH in MSc Quantitative Finance, I
            have strong quantitative skills. I'm also a quick learner and a team
            player.
          </p>
          <p>I can be reached at:</p>
        </div>
        <div className="flex justify-center items-center gap-3 w-full mb-2">
          <div className="grid-cols-12 grid gap-4">
            {[
              {
                href: "https://www.linkedin.com/in/frankjinzhang/",
                text: "LinkedIn",
                favicon: faLinkedin,
              },
              {
                href: "https://github.com/jzfrank/",
                text: "GitHub",
                favicon: faGithub,
              },
              {
                href: "mailto:frankjinzhang@gmail.com",
                text: "Email",
                favicon: faEnvelope,
              },
            ].map((item) => (
              <div key={item.href} className="col-span-4 text-center">
                <a
                  href={item.href}
                  className="text-blue-500 text-sm font-semibold underline"
                >
                  <FontAwesomeIcon
                    icon={item.favicon}
                    className="h-4 md:h-6 lg:h-8"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
