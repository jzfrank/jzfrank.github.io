import React, { useState } from "react";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Introduction from "./components/Introduction";
import Header from "./components/Header";
import Footer from "./components/Footer";

const NAV_BARS = [
  { name: "About", id: "about" },
  { name: "Experiences", id: "work-experience" },
  { name: "Projects", id: "projects" },
];

const NAV_BAR_TO_COMPONENT = {
  about: <Introduction />,
  "work-experience": <WorkExperience />,
  projects: <Projects />,
};

const Home = () => {
  const [selectedNavbar, setSelectedNavbar] = useState(NAV_BARS[0].id);

  return (
    <div className="bg-gray-100 cursor-default">
      <Header
        navBars={NAV_BARS}
        selectedNavbar={selectedNavbar}
        setSelectedNavbar={setSelectedNavbar}
        onClickTitle={() => setSelectedNavbar(NAV_BARS[0].id)}
      />
      <div className="min-h-screen bg-white">
        <div className="p-10">{NAV_BAR_TO_COMPONENT[selectedNavbar]}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
