import React from "react";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Introduction from "./components/Introduction";

const Home = () => {
  return (
    <div className="bg-gray-100 py-4">
      <div className=" mx-2 sm:mx-10 lg:mx-24 bg-white rounded-lg shadow-lg">
        <header></header>
        <div className=" flex flex-col gap-3">
          {/* Introduction */}
          <Introduction />
          {/* Work Experience */}
          <div className="py-5 px-10 gap-3">
            <WorkExperience />
          </div>
          {/* Projects */}
          <div className="py-5 px-10 gap-3 bg-slate-50">
            <Projects />
          </div>
        </div>
        <footer></footer>
      </div>
    </div>
  );
};

export default Home;
