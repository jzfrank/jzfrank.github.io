import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen py-4">
      <div className=" mx-2 sm:mx-10 lg:mx-24 bg-white min-h-screen rounded-lg shadow-lg">
        <header></header>
        <div className="py-10 px-10 flex flex-col gap-5">
          {/* Introduction */}
          <div className="grid grid-cols-12 gap-4">
            <div className="hidden lg:block lg:col-span-4"></div>
            <div className="col-span-12 lg:col-span-8">
              <div className="flex justify-center lg:pb-4">
                <span className="text-lg lg:text-3xl">
                  <span className="font-mono font-semibold text-gray-500">
                    Hi there, I'm{" "}
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
            <div className="col-span-12 lg:col-span-8 font-sans px-2 sm:px-4 md:px-16 lg:px-0 flex flex-col gap-3">
              <div className="flex lg:justify-center lg:pb-5 justify-start">
                <span className="text-sm lg:text-xl font-semibold">
                  I'm a Full-stack developer, and a hiking addict
                </span>
              </div>
              <div className="text-xs lg:text-lg text-gray-500 flex flex-col gap-1">
                <p>
                  I am a fullstack web developer with a focus on the frontend.
                  My expertise lies in building web applications using various
                  frameworks and technologies.
                </p>
                <p>
                  My tech stack:{" "}
                  <span className="italic font-semibold">
                    React, Node.JS, NextJS, Spring Boot, Python, TailwindCSS,
                    MySQL, MongoDB, Docker, MySQL, C++
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
                  , a React component library for building dashboards. It has
                  received 14k stars.
                </p>
                <p>
                  As a graduate from ETH Zurich and UZH in MSc Quantitative
                  Finance, I have strong quantitative skills. I'm also a quick
                  learner and a team player.
                </p>
                <p>I can be reached at:</p>
              </div>
              <div className="flex justify-center items-center gap-3">
                <ul className="text-sm md:text-md lg:text-lg flex gap-4 lg:gap-8 justify-center">
                  {[
                    {
                      href: "https://www.linkedin.com/in/jin-zhang-3a5a6b1a7/",
                      text: "LinkedIn",
                    },
                    {
                      href: "github.com",
                      text: "GitHub",
                    },
                    {
                      href: "mailto:frankjinzhang@gmail.com",
                      text: "Email",
                    },
                  ].map((item) => (
                    <li>
                      <a
                        href={item.href}
                        className="text-blue-500 font-semibold underline"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Projects */}
          <div className="px-4 flex flex-col gap-3">
            <div className="text-sm text-gray-500">Selection of projects:</div>
            <div className="grid grid-cols-12 gap-y-2 gap-x-2">
              {[
                {
                  title: "Tremor React",
                  description:
                    "I'm not the creator, I'm only a core contributor. A React component library for building dashboards. It has received 14k stars.",
                  logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png",
                  deployedLink: "https://www.tremor.so/",
                  sourceCodeLink: "https://github.com/tremorlabs/tremor",
                },
                {
                  title: "Zupan Hub Inventory Management System",
                  description:
                    "A full-stack web dashboard that helps Zupan Hub manage their inventory. It is implemented with t3 stack using NextJS, Typescript, TailwindCSS, and Prisma.",
                  logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png",
                  deployedLink: "hub.zupan.ai",
                },
                {
                  title: "Memory Game (Web Version)",
                  description: `A game that tests players' memory. Players in turn flip cards, which will vanish if two cards' value collide.
				Implemented in ReactJS.`,
                  logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
                  deployedLink:
                    "https://jzfrank.github.io/memory-game-web-version",
                  sourceCodeLink:
                    "https://github.com/jzfrank/memory-game-web-version",
                },
                {
                  title: "IDMC (frontend part)",
                  description: `In Hack4Good, in team of 3, we helped NGO IDMC (Internal Displacement Monitor Center) build 
                    next generation automatic news detecting tools (a scraper, classifier, information extractor, front-end, and database). `,
                  logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
                  sourceCodeLink: "https://github.com/jzfrank/idmc-dashboard",
                  deployedLink: "https://idmc-dashboard.vercel.app/",
                },
                {
                  title: "Memory Game (Desktop Version)",
                  description:
                    "Memory Game implemented in C++. Used rapidjson, sockpp, and wxwidgets as libraries.",
                  logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/cpp/cpp.png",
                  sourceCodeLink: "https://github.com/jzfrank/memory-game",
                },
                {
                  title: "AirHXH (Airbnb Clone)",
                  description:
                    "An attempt to clone Airbnb yet adding flavor of manga Huner X Huner. It is written using NextJS, Materialize, sanity.io.",
                  logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
                  deployedLink: "https://airhxh.vercel.app/",
                  sourceCodeLink: "https://github.com/jzfrank/airhxh-frontend",
                },
                {
                  title: "Instagram Clone",
                  description:
                    "Clone of Instagram using NextJS, tailwindcss, and Firebase. It gets deployed by vercel. It supports log in by Google account. You can upload pictures or like others' post just like Instagram. ",
                  logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
                  deployedLink:
                    "https://instagram-clone-git-main-jzfrank.vercel.app",
                  sourceCodeLink: "https://github.com/jzfrank/instagram-clone",
                },
                {
                  title: "IMDB Clone",
                  description:
                    "Clone of IMDB using NextJS and tailwindcss. Data are from TMDB API. You can browse the most trendy and highest rated movies here.",
                  logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
                  deployedLink: "https://imdb-clone-liart.vercel.app/",
                  sourceCodeLink: "https://github.com/jzfrank/imdb-clone",
                },
                {
                  title: "Google Clone",
                  description:
                    "Clone of Google search using NextJS and tailwindcss. Of course, it used Google search API. It gets deployed by vercel. It supports log in by Google account. You can search just like in Google (in fact, the underlying logic of search API is the same).",
                  logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
                  deployedLink: "https://google-clone-three-sable.vercel.app/",
                  sourceCodeLink: "https://github.com/jzfrank/google-clone",
                },
                {
                  title: "Simon Game",
                  description:
                    "An implementation of Simon Game, which tests the remembrance of the player. It is written using HTML, CSS, JavaScript. It gets hosted by GitHub Page.",
                  logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
                  deployedLink: "https://jzfrank.github.io/SimonGame",
                  sourceCodeLink: "https://github.com/jzfrank/SimonGame",
                },
                {
                  title: "Gimme a Joke",
                  description:
                    "A simple pun/programming joke generator. It is written using HTML, CSS, JavaScript, Bootstrap. It gets hosted by GitHub Page.",
                  logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
                  deployedLink: "https://jzfrank.github.io/Gimme-a-joke/",
                  sourceCodeLink: "https://github.com/jzfrank/Gimme-a-joke",
                },
                {
                  title: "Blackjack",
                  description:
                    "A very basic implementation of Blackjack, where the player could only choose to hit or stand. It is written using vanilla HTML, CSS, JavaScript, Bootstrap.",
                  logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/css/css.png",
                  deployedLink: "https://jzfrank.github.io/blackjack/",
                  sourceCodeLink: "https://github.com/jzfrank/blackjack",
                },
              ].map((project) => (
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
                      <div className="text-xs font-mono">
                        {project.description}
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 text-xs">
                      <span>view:</span>
                      {project.deployedLink &&
                        project.deployedLink.length > 0 && (
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
          {/* Work Experience */}
        </div>

        <footer></footer>
      </div>
    </div>
  );
}

export default App;
