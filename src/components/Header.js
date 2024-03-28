import React from "react";

const Header = ({
  navBars,
  selectedNavbar,
  setSelectedNavbar,
  onClickTitle,
}) => {
  return (
    <header className="sticky top-0">
      <div className="py-1 md:pt-5 md:pb-3 bg-gray-700 text-white border-b-2">
        <div className="flex flex-col md:flex-row justify-between px-5 items-center font-mono">
          <div
            className="font-extrabold text-lg text-gray-100 hover:cursor-pointer hidden md:block"
            onClick={onClickTitle}
          >
            Jin's Personal Website
          </div>
          <div className="flex gap-5 md:gap-10 font-semibold text-sm antialiased">
            {navBars.map((navBar) => (
              <div
                key={navBar.id}
                onClick={() => setSelectedNavbar(navBar.id)}
                className={`${
                  selectedNavbar === navBar.id
                    ? "underline hover:cursor-default decoration-blue-200"
                    : "hover:cursor-pointer hover:text-blue-200"
                }`}
              >
                {navBar.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
